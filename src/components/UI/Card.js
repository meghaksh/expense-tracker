import "./Card.css";
const Card = (props) => {
  //Wrapper component which shows all the children passed to it. It uses props.children for that
  const classes = "card " + props.className;
  console.log("From Card.js " + classes);
  return <div className={classes}>{props.children}</div>;
};

export default Card;
