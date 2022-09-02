import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLoged, setIsLoged] = useState(true);
  const [isLoding, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch =useDispatch(authActions)
  const navigate=useNavigate()



  const changeHandler = () => {
    setIsLoged((prev) => !prev);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;


    let url;
    if (isLoged) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyADRBYYyXlyowwVbr9EdQCKJZgeYikGxtk";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADRBYYyXlyowwVbr9EdQCKJZgeYikGxtk";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
    // .then(()=>{
    //   if(enteredEmail==='admin@gmail.com' && enteredPassword==='123456'){
    //     adminDispatch(adminAction.admin())
    //   }
    // })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errroMessage = "Authentication Failed!";
            throw new Error(errroMessage);
          });
        }
      })
      .then(()=>{
        dispatch(authActions.login())
        navigate('/',{replace:true})
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.login}>
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
              {isLoged ? "Login" : "Create"}
            </button>
          )}
            <button
              className={classes.change}
              type="button"
              onClick={changeHandler}
            >
              {!isLoged ? "Login to your account" : "Create new Account"}
            </button>
            {isLoged && <Link to='/adminLogin' className={classes.change}>Admin Login</Link>}
        </form>
      </div>
    </section>
  );
};
export default Login;
