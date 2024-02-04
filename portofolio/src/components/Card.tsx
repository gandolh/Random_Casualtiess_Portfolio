import Tilt from 'react-parallax-tilt';
import "./Card.css";
type CardProps = {
  article: Article;
}

const Card = ({article} : CardProps) => {
  const { img, alt_img, category, title } = article;
  return (
    <Tilt     
    tiltReverse={true}
  >
    <div className="card">
      <img draggable="false" src={img} alt={alt_img} className="card_poster"></img>
      <p className="category">{category}</p>
      <h2 className="title">{title}</h2>
    </div>
    </Tilt>
  );
};

export default Card;
