import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import { adminAction, authActions } from "../../store";
import classes from './Navigation.module.css'
const Navigation = (props) => {
  const login=useSelector(state=>state.auth.isAuthentication)
  const adminLog=useSelector(state=>state.admin.admin)
  const disptach=useDispatch(authActions)
  const adminDispatch=useDispatch(adminAction)
  const loggedIn=localStorage.getItem('loggedIn')
  const adminLoggedIn=localStorage.getItem('adminLog')



  let loginBtn=true
  let logoutBtn;
  if(login || loggedIn || adminLog ||adminLoggedIn){
    loginBtn=false
    logoutBtn=true
  }
  // let forCart;
  // if(login || loggedIn){
  //   forCart=true
  // }
  // else if(adminLog || adminLoggedIn){
  //   forCart=false
  // }
  let forAdmin;
  if(adminLog || adminLoggedIn){
    forAdmin=true
  }
  else{
    forAdmin=false
  }
  
  const logoutHandler=()=>{
    disptach(authActions.logout())
    adminDispatch(adminAction.adminLogout())
    forAdmin=false
  }
  return (
    <nav className={classes.nav}>
      <h1>Canteen MS</h1>
      <ul>
        <li>
          <NavLink to="/home" className={(navdata)=>navdata.isActive ? classes.active :' '}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={(navdata)=>navdata.isActive ? classes.active :' '}>About</NavLink>
        </li>
        {/* {forCart && <li>
        <NavLink to='/cart' onClick={props.onShow}>cart</NavLink>
        </li>} */}
        {forAdmin && <li>
        <NavLink to="/dashboard" className={(navdata)=>navdata.isActive ? classes.active :' '}>DashBoard</NavLink>
        </li>}
        {loginBtn && <li>
        <NavLink to="/login" className={(navdata)=>navdata.isActive ? classes.active :' '}>Login</NavLink>
        </li>}
        {logoutBtn && <li>
        <NavLink to="/" className={(navdata)=>navdata.isActive ? classes.active :' '} onClick={logoutHandler}>logout</NavLink>
        </li>}

      </ul>
    </nav>
  );
};

export default Navigation;
