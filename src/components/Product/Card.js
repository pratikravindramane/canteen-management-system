import { useContext, useRef, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Card.module.css";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
const Card = (props) => {
  const [none,setNone]=useState()
  const cartCtx = useContext(CartContext);
  const userLogin = useSelector((state) => state.auth.isAuthentication);
  const adminLog = useSelector((state) => state.admin.admin);

  let loggedIn;
  if (userLogin || adminLog) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  const inputRef = useRef();
  const numberRef = useRef();
console.log(adminLog)
  
  // if(person.lenght<3||person.lenght===0){
  //   setError(false)
  // }
  
  const submitHandler = (e) => {
    e.preventDefault();
    setNone('')
    const person = inputRef.current.value;
    const number = numberRef.current.value;

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
    });

    fetch("https://user-data-693e1-default-rtdb.firebaseio.com/cart.json", {
      method: "POST",
      body: JSON.stringify({
        name: props.name,
        price: props.price,
        number,
        person,
      }),
    });
  };
  return (
    <form className={classes.card} onSubmit={submitHandler}>
      <img src={props.image} alt="" />
      <div className={classes.info}>
        <h5>{props.name}</h5>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
      {loggedIn && (
        <div className={classes['input-group']}>
          <div>
            <label htmlFor="input">Enter Name</label>
          <input type="text" className={classes.name}ref={inputRef} minLength={3} min={1} value={none}/>
          </div>

          <input type="number" className={classes.number}ref={numberRef} min={1} defaultValue={1}/>
        </div>
      )}
      {loggedIn ? (
        <button type="submit">Order</button>
      ) : (
        <Link className={classes.link}to="/login">Order</Link>
      )}
    </form>
  );
};
export default Card;
