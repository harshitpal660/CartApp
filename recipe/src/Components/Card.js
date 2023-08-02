import PropTypes from "prop-types"; // type script and flow packages are other solution
import cardCss from "../styles/card.module.css";
const Card = (props) => {
  // console.log(props.prop);
  const item = props.prop;
  return (
    <div className={cardCss.card}>
      <div>
        <img className={cardCss.img} src={item.image} alt={item.label} />
      </div>
      <div>
        <a href="props.url">
          <h2>{item.label}</h2>
        </a>
        <a href={item.url} className={cardCss.badge}>
          See More...
        </a>
      </div>
    </div>
  );
};

export default Card;
