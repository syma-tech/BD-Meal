import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../Shared/Header/Header";
import Banner from "../../Banner/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  const [searchFood, getSearchFood] = useState("");
  console.log(searchFood);
  // from header

  // from banner
  const [foodsName, setFoodsName] = useState({});
  const urlByName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`;
  console.log("hello");
  useEffect(() => {
    fetch(urlByName)
      .then((res) => res.json())
      .then((data) => {
        setFoodsName(data);
        console.log(foodsName);
        console.log("bye");
      });
  }, [searchFood]);
  return (
    <>
      <div className="background-image">
        <div className="background-overlay">
          <Header getSearchFood={getSearchFood} />
          <Banner foodsName={foodsName} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
