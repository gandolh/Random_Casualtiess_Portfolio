import { useState } from "react";
import Banner from "./Banner";
import BlogCategories from "./BlogCategories";
import Posts from "./Posts";

const Home = () => {
  const [blogCateg, setBlogCateg] = useState<Array<BlogCategory>>([
    { id: 1, name: "Most recent", active: true },
    { id: 2, name: "Popular", active: false },
    { id: 3, name: "Animations", active: false },
    { id: 4, name: "Piece of my life", active: false },
  ]);

  const [articles, _] = useState([]);


  const changeActiveCategory = (id : Number) => {
    let blogCategCopy = blogCateg.map((link) =>
      id === link.id ? { ...link, active: true } : { ...link, active: false }
    );
    setBlogCateg(blogCategCopy);
  };


  return (
    <>
      <Banner />
      <BlogCategories
          blogCateg={blogCateg}
          onChangeActiveCategory={changeActiveCategory}
        />
      <Posts articles={articles} />
    </>
  );
};

export default Home;
