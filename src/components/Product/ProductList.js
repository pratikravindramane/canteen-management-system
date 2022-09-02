import { useCallback, useEffect, useState } from "react";
import classes from "./ProductList.module.css";
import ProductListItem from "./ProductListItem";
const ProductList = (props) => {
  const [listdata, setData] = useState([]);



  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://user-data-693e1-default-rtdb.firebaseio.com/data.json"
      );
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

      console.log(loadedMovies);

      setData(loadedMovies);
    } catch (error) {
      alert(error.message);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // const deleteHandler = (item) => {
  //   const items = listdata;
  //   const requestedOptions ={ method: "DELETE" } ;
  //   fetch(
  //     `https://user-data-693e1-default-rtdb.firebaseio.com/data.json/${item.id}`
  //       ,requestedOptions
  //   ).then((response) => {
  //     if(response.ok){
  //       const idk=items.indexOf(item)
  //       items.splice(idk,1)
  //       setData(items)
  //     }
  //   })
  //   .catch((error)=>{
  //     alert(error.message)
  //   });
  // };
  return (
    <section className={classes["product-list"]}>
      <h2>product list</h2>
      <table className={classes.table}>
        <tbody className={classes.content}>
          <tr className={classes.thead}>
            {/* <th>sr.</th> */}
            <th>Name</th>
            <th>Cost</th>
          </tr>
          {listdata.map((data) => (
            <ProductListItem key={data.id} name={data.name} cost={data.cost} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default ProductList;
