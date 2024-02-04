import "@/styles/BlogCategories.css";
type BlogCategoriesProps = {
  blogCateg: Array<BlogCategory>;
  onChangeActiveCategory: (id: number) => void;
}

const BlogCategories = ({blogCateg, onChangeActiveCategory } : BlogCategoriesProps) => {
  // console.log(props);
  return (
    <div className="blogCategories">
      {blogCateg.map((category) => (
          <div className={`tab ${category.active ? "active" : ""}`}
          key={category.id}
        onClick={()=>{
           onChangeActiveCategory(category.id);
        }}
        >
          {category.name}
        </div>
      ))}

    </div>
  );
};

export default BlogCategories;
