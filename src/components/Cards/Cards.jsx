import "./Cards.css";

const Card = ({ name, image, email, age }) => {
  return (
    <div className="card-div">
      <div>
        <img className="img" src={image} alt="image" />
      </div>
      <div className="desc-div">
        <p className="emp-name">{name}</p>
        <p className="par-light">{email}</p>
        <p className="par-light">{age}</p>
      </div>
    </div>
  );
};

export default Card;
