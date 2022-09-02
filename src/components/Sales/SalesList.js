import { useCallback, useEffect, useState } from 'react';
import classes from './SalesList.module.css'
const SalesList=()=>{
  const [listdata, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://user-data-693e1-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await response.json();
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          name: data[key].name,
          person: data[key].person,
          price: data[key].price,
          amount:data[key].number
        });
      }

      setData(loadedMovies);
    } catch (error) {
      alert(error.message);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const element=listdata.map((data)=>(
    <tr>
    
    <td>{data.person}</td>
    <td>{data.name}</td>
    <td>{data.price}</td>
    <td>{data.amount}</td>
    {/* <td><button>Delete</button> </td> */}
  </tr>
  ))
return    (
<section className={classes["billing-list"]}>
<h2 >product sales</h2>
<table className={classes.table}>
  <tbody className="content">
  <tr>
      <th>name</th>
      <th>product</th>
      <th>cost</th>
      <th>amount</th>
      {/* <th>action</th> */}
    </tr>
   {element}
      </tbody>
  </table>
</section>)
}
export default SalesList