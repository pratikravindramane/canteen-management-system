import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import classes from './Cart.module.css'
import CartItem from "./CartItem";
const Cart = (props) => {
  const personRef = useRef()
  const removeHandler=()=>{
    ctx.removeItem()
  }
  const ctx=useContext(CartContext)
    const cartItem=(
        <ul className={classes.list}>
            {ctx.items.map((item)=>(
                <CartItem items={item} key={item.id}/>
            ))}
        </ul>
    )


  
  const submitHandler=(e)=>{
    e.preventDefault()
    const person= personRef.current.value
    const sendName=ctx.items.map((data)=>data.name)
    const sendPrice=ctx.items.map((data)=>data.price)

    fetch('https://user-data-693e1-default-rtdb.firebaseio.com/cart.json',{
      method:'POST',
      body:JSON.stringify({
        name:sendName,
        price:sendPrice,
        person
      })
    })
  }
  let empty;
  if(ctx.items.length===0){
    empty=false
  }else{
    empty=true
  }
  return (
    <div>
    <div>
        {cartItem }    
    </div>
    {empty?<form onSubmit={submitHandler}>
        <div className={classes['form-div']}>
          <label htmlFor="name" className={classes.name}>name</label>
          <input type="text" id="name" ref={personRef} />
        </div>
        <button type="submit">Order</button>
      <button onClick={removeHandler}>Delete</button>
      </form> : <p>Cart is Empty</p> }
    </div>
  );
};
export default Cart;
