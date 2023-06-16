import React, { useContext, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import ContectData from "../../Components/Store/ContectData";
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const emailinput = useRef();
  const passwardinput = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isloading, Setisloading] = useState(false);
  const authctx = useContext(ContectData);
  // const navigate = useNavigate()
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredemail = emailinput.current.value;
    const enteredpassword = passwardinput.current.value;

    Setisloading(true);
    let url;
    if(isLogin) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDb6pBOUipj6C_1Nvj5qP-G8hgrt6H74eU'
    }
    else{
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDb6pBOUipj6C_1Nvj5qP-G8hgrt6H74eU'
    }
      fetch(
        url,
    {
      method: 'POST',
      body: JSON.stringify({
        email: enteredemail,
        password: enteredpassword,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    }
      ).then((res) => {
        Setisloading(false)
        if(res.ok) {
          return res.json();
        }
        else{
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed';
            throw new Error(errorMessage);
          });
        }
      }).then((data) => {
        authctx.login(data)
        console.log(data);
        // navigate('/E-Commerce/')
        history.push('/E-Commerce');
      }).catch(err => {
        alert(err.message);
      });
  };
    
  return (
    <section>
    <h1 className="text-center">{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={SubmitHandler}>
        <div className='row'>
          <label className="h4 m-2">Your Email :</label>
          <input type='email' id='email' className="form-control m-2" required ref = {emailinput}/>
        </div>
        <div className='row'>
          <label className="h4 m-2">Your Password :</label>
          <input
          className="form-control m-2"
            type='password'
            id='password'
            ref = {passwardinput}
            required
          />
        </div>
        <div className='row'>
          {!isloading && <button className="btn btn-dark m-2">{isLogin ? 'Login' : 'Create Account'}</button>}
          {isloading && <p>Sending Request...</p>}
          <button
            type='button'
            className='btn btn-warning m-2'
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
      </section>
  );
};

export default AuthForm;
