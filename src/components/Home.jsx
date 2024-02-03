import React from "react";
import { useState, useEffect } from "react";
import Banner from "./Banner";
import BlogCategories from "./BlogCategories";
import BlogCategMobile from "./BlogCategMobile";
import Posts from "./Posts";
const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  const breakpoint = 750;

  const [blogCateg, setBlogCateg] = useState([
    { id: 1, name: "Most recent", active: true },
    { id: 2, name: "Popular", active: false },
    { id: 3, name: "Animations", active: false },
    { id: 4, name: "Piece of my life", active: false },
  ]);

  //fetch data from mongodb to show articles:D
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const articlesFromServer = await fetchArticles();
      setArticles(articlesFromServer);
    };
    getArticles();
  }, []);

  const fetchArticles = async () => {
    // const res = await fetch("http://localhost:8000/posts");
    const data = await res.json();
    return data;
  };
  //end here


  const changeActiveCategory = (id) => {
    let blogCategCopy = blogCateg.map((link) =>
      id === link.id ? { ...link, active: true } : { ...link, active: false }
    );
    setBlogCateg(blogCategCopy);
  };


  return (
    <>
      <Banner />
      {width > breakpoint ? (
        <BlogCategories
          blogCateg={blogCateg}
          onChangeActiveCategory={changeActiveCategory}
        />
      ) : (
        <BlogCategMobile
          blogCateg={blogCateg}
          onChangeActiveCategory={changeActiveCategory}
        />
      )}
      <Posts articles={articles} />
    </>
  );
};

export default Home;
