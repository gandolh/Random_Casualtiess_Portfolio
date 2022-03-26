
const express = require('express')
require('dotenv').config();
var cors = require('cors')
const app = express()
const port = process.env.PORT
app.use(cors())
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODBURL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async (err) => {
  const dbo= client.db("myPosts")
  const posts = dbo.collection("posts");
  // perform actions on the collection object
      cursor= await posts.find();
      const posts_data=[];
      await cursor.forEach((el)=>posts_data.push(el));
       app.get('/posts', (req, res) => {
        // res.send('Hello World1!')
        res.send(posts_data)
      })

      app.get('/animationrefs',(req,res)=>{
          //https://github.com/gandolh/GenerativeArt


      })

      
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      })
      
      
      client.close();
    });
    
    
