//import './card_styling.css'
//card component for the four-card-feature-section
function Card(props) {

  return (
    <>
      <div className={props.cardInfo.style}  id={props.cardInfo.id}>
        <h2>{props.cardInfo.title}</h2>
        <p>{props.cardInfo.text}</p>
        
        <img src={props.cardInfo.image} />
    </div>
    </>
  );
}

export default Card;