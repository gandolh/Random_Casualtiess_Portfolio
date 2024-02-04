import Card from './Card';
import './Posts.css'
type PostsProps = {
    articles: Array<Article>;
}
const Posts = ({articles} : PostsProps) => {
    // console.log(props)
    return (
        <div className="posts">
        {
            articles.map((article)=>(<Card article={article} key={article.id}/>))
        }
    </div>  
    
    );
}
 
export default Posts;