const express = require("express");
require("dotenv").config();
var cors = require("cors");
var fs = require("fs").promises;
var path = require("path");
var url = require("url");
const app = express();
const port = process.env.PORT;
app.use(cors());

const { MongoClient } = require("mongodb");
const uri = process.env.MONGODBURL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function ToFrontUrl(url_path) {
	const encoded = encodeURI(url_path);
	// console.log(encoded);
	return encoded;
}

//endpoints
async function getAnimationsPath(home_path) {
	let dict = {};
	for await (const file of getFiles(home_path)) {
		currentDict = dict;
		for (let i=0;i< Object.keys(file.directories).length - 1;i++) {
            const directory = file.directories[i];
			if (!(`${directory}` in currentDict)) {
                currentDict[directory] = {};
            }
            currentDict = currentDict[directory];
        }
        currentDict[file.name]= file.url_path;
	}
	return dict;
}

async function* getFiles(url_path) {
	const entries = await fs.readdir(url_path, { withFileTypes: true });
	//   console.log(entries)
	for (let file of entries) {
		if (file.name.includes(".git")) continue;
		if (file.isDirectory()) {
			yield* getFiles(`${url_path}${file.name}/`);
		} else {
			if (file.name.includes(".html")) {
				let encodedPath = ToFrontUrl(url_path + file.name);
				let relativeWebPath = (url_path + file.name).split("/");
				yield {
					...file,
					url_path: encodedPath,
					directories: relativeWebPath.slice(relativeWebPath.indexOf("GenerativeArt")),
				};
			}
		}
	}
}

app.get("/getanimationpath", async (req, res) => {
	const animationsPath = await getAnimationsPath(process.env.generativeArtPath);
	res.send(animationsPath);
});

client.connect(async (err) => {
	const dbo = client.db("myPosts");
	const posts = dbo.collection("posts");
	// perform actions on the collection object
	cursor = await posts.find();
	const posts_data = [];
	await cursor.forEach((el) => posts_data.push(el));
	app.get("/posts", (req, res) => {
		// res.send('Hello World1!')
		res.send(posts_data);
	});

	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
	});

	client.close();
});
