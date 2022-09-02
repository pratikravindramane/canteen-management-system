import classes from './Cart.module.css'
const CartItem=(props)=>{
    return <li>
    <div>
    <p className={classes.name}>{props.items.name}</p>
    <p className={classes.price}>{props.items.price}</p>
    </div>
  </li>
}
export default CartItem