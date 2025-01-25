import React, { useEffect, useState } from "react";
import axios from "axios";

function Component2() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getMovie")
      .then((res) => {
        // handle success
        console.log(res.data);
        setCardData(res.data);
        //  console.log(res);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <>
      <div className="container2">
        <h1>Display Movie Data</h1>
        <div className="main">
          {cardData.map((val) => {
            return (
              <div className="card">
                <h2>Name: {val.name}</h2>
                <p>Hero: {val.hero}</p>
                <p>Heroine: {val.heroine}</p>
                <p>Release: {val.release}</p>
                <p>Rating: {val.rating}</p>
                <p>Genre: {val.genre}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Component2;
