import React from 'react'
import { useSelector } from 'react-redux'
import classes from './Hero.module.css'
import {Link} from 'react-router-dom'
const Hero=()=>  {
  const login=useSelector(state=>state.auth.isAuthentication)
    return (
      <div className={classes.hero}>
        <img src="https://5.imimg.com/data5/FN/TF/MY-51754388/canteen-catering-service-1000x1000.jpg" alt="" />
        <div className={classes.info}>
            <p>Eat your Food Online</p>
            {!login&&<Link to={'/login'} className={classes.button}>Eat Now</Link>}
        </div>
      </div>
    )
  }


export default Hero
