import PropTypes from "prop-types"; // type script and flow packages are other solution
import cardCss from "../styles/card.module.css";
import { Modal } from "../Components/Modal.js";
const Card = (props) => {
  // console.log(props.prop);
  const item = props.prop;
  let id = item.label.split(' ').join('_');
  id = id.split('"').join('');
  id = id.split("'").join('');
  return (
    <div className={cardCss.card}>
      <div>
        <img className={cardCss.img} src={item.image} alt={item.label} />
      </div>
      <a href={item.url} target="_blank">
        <h2>{item.label}</h2>
      </a>
      <div className={cardCss.info}>
        <a href={item.url} target="_blank" className={cardCss.badge}>
          Recepie
        </a>
        
        <Modal prop={item} label={item.label} />
      </div>
    </div>
  );
};

export default Card;
