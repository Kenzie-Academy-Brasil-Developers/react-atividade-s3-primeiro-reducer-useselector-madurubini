import { useSelector } from "react-redux";
import "./style.css";

const FruitList = () => {
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="Card">
      {fruits.map((fruit) => (
        <div key={fruit} className="Fruit">
          <p> {fruit.name} </p>
          <img src={fruit.image} alt={fruit.name}></img>
        </div>
      ))}
    </div>
  );
};

export default FruitList;
