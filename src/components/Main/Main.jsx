import data from "../../helper/data";
import Card from "../Cards/Cards";
import mainStyle from "./Main.css";
import { useState } from "react";

const Main = () => {
  const [countStart, setCountStart] = useState(0);
  const [countEnd, setCountEnd] = useState(5);

  const handleNext = () => {
    setCountStart(countStart == data.length - 5 ? 0 : countStart + 5);
    setCountEnd(countEnd == data.length ? 5 : countEnd + 5);
  };

  const handlePrev = () => {
    setCountStart(countStart <= 0 ? 15 : countStart - 5);
    setCountEnd(countEnd == 5 ? 20 : countEnd - 5);
    // if (countStart <= 1) {
    //   setCountStart(15);
    //   setCountEnd(20);
    // }
    // else {
    //   setCountStart(countStart - 5);
    //   setCountEnd(countEnd - 5);
    // }
  };
  return (
    <div className="container text-center">
      <div>
        <h3 className="header">Employee List</h3>
        <p className="emp-count">
          (Employees {countStart + 1} to {countEnd})
        </p>
      </div>

      <div className="cards">
        {data.slice(countStart, countEnd).map(
          (item) => (
            <Card key={item.id} {...item} />
          )
          //   console.log(item)
        )}
      </div>

      <div>
        <button className="button" onClick={handlePrev}>
          Prev
        </button>
        <button className="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Main;
