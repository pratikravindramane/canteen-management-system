import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";

import classes from "./Product.module.css";
const Product = () => {
  const [listData, setListData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://user-data-693e1-default-rtdb.firebaseio.com/data.json"
      );
      if (!response.ok) {
        throw new Error("something went worng");
      }
      const data = await response.json();
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          image: data[key].image,
          cost: data[key].cost,
        });
      }

      setListData(loadedMovies);
    } catch (error) {
      alert(error.message);
    }
    console.log("1");
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const content = listData.map((data) => {
    return (
      <Card
        key={data.id}
        image={data.image}
        name={data.name}
        id={data.id}
        price={data.cost}
        description={data.description}
      />
    );
  });

  // console.log(listData.filter((data)=>data.name))
  return (
    <>
      <h1 className={classes.title}>Products</h1>
      <div className={classes.product}>{content}</div>
    </>
  );
};

export default Product;
