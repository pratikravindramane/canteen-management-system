import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { adminAction } from '../../store'
import classes from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
const AdminLogin=()=>{
    const [isLoding,setIsLoading]=useState(false)
    const navigate =useNavigate()

    
    const emailRef=useRef()
    const passwordRef=useRef()

    const adminEmail='admin@gmail.com'
    const adminPassword='123456'


    const disptach=useDispatch(adminAction)


    const submitHandler=(e)=>{
        e.preventDefault()
        setIsLoading(true)

        const enteredEmail=emailRef.current.value
        const enteredPassword=passwordRef.current.value
        if(enteredEmail===adminEmail && enteredPassword===adminPassword){
            disptach(adminAction.admin())
            navigate('/',{replace:true})
        }
        
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);

    }
    return<section className={classes.login}>
    <div className={classes["conatiner"]}>
      <form className={classes["login-form"]} onSubmit={submitHandler}>
        <h3 className="my-3">Login to your account</h3>
        <br />
        <div className={classes['input-cont']}>
          <label
            htmlFor="exampleInputEmail1"
            className={classes["form-label"]}
          >
            Email address
          </label>
          <input
            type="email"
            className={classes["form-control"]}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={emailRef}
          />
        </div>
        <div className={classes['input-cont']}>
          <label
            htmlFor="exampleInputPassword1"
            className={classes["form-label"]}
          >
            Password
          </label>
          <input
            type="password"
            className={classes["form-control"]}
            id="exampleInputPassword1"
            ref={passwordRef}
            minLength='6'
          />
        </div>
        {isLoding && <p>Sending Request</p>}
        <br />
        {!isLoding && (
          <button
            className={classes["login-btn"]}
            type="submit"
          >
            Login
          </button>
        )}
{/* 
          <button
            className={classes.change}
            type="button"
            onClick={adminHandler}
          >
            {!adminLog ? "Login As User" : "Admin Login"}
          </button> */}
          <Link to='/login' className={classes.change}>User Login</Link>


      </form>
    </div>
  </section>
}
export default AdminLogin