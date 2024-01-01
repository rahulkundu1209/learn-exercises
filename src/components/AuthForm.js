import React, { useEffect, useState } from 'react'
import { Form, useNavigate, Link, useSearchParams } from 'react-router-dom'
import { Typography, Box, IconButton } from '@mui/material';

import BackDrop from './BackDrop';
import crossImg from "../assets/icons/cross.png";

const AuthForm = ({getData, error}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [samePassword, setSamePassword] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const isSignin = searchParams.get("mode") === "Signin";

  const closeForm = () =>{
    navigate("/");
  }

  useEffect(()=>{
    if(isSignin){
      if(
        email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) &&
        password.length >= 6
      ){
        setDisabled(false);
      }else{
        setDisabled(true);
      }
    } 
    else{
      if(
        email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) &&
        password.length >= 6 &&
        name.length > 0 &&
        samePassword
      ){
        setDisabled(false);
      }else{
        setDisabled(true);
      }
    }
    
  }, [email, password, name]);

  const confirmPasswordHandler = (event) =>{
    if(event.target.value !== password){
      setSamePassword(false);
      // console.log(event.target.value);
      return;
    }
    setSamePassword(true);
  }

  const submitAuthForm = (event) =>{
    event.preventDefault();

    let data = {};
    if(isSignin){
      data = {
        email: email,
        password: password,
      }
    }else{
      data={
        name: name,
        email: email,
        password: password
      }
    }

    getData(data);
  }

  return (
    <BackDrop>
      <Box
        width="500px"
        height="500px"
        bgcolor="#fff"
        padding="24px"
        borderRadius="20px"
        position="relative"
        sx={{
          opacity: "1",
        }}
      >
        <Box
          position="absolute"
          right="2px"
          top="2px"
        >
          <IconButton onClick={closeForm} >
            <img src={crossImg} alt='close' height="30px" width="30px" />
          </IconButton>
        </Box>
        <Typography variant='h3' mb="20px" >{isSignin ? "Signin" : "Signup"}</Typography>
        
        <Form className='auth-form' onSubmit={submitAuthForm} >
          {isSignin ? (
            <>
            <p>
              <label htmlFor='email-address' >Email:</label>
              <input type="email" id='email-address' value={email} onChange={e =>{setEmail(e.target.value)}} required/>
            </p>
            <p>
              <label htmlFor='password' >Password:</label>
              <input type="password" id='password' value={password} onChange={e =>{setPassword(e.target.value)}} required/>
            </p>
            <button disabled={disabled} >Signin</button>
            </>
          ):(<>
          <p>
            <label htmlFor='name' >Name:</label>
            <input type='text' id='name' value={name} onChange={e =>{setName(e.target.value)}} required/>
          </p>
          <p>
            <label htmlFor='email-address' >Email:</label>
            <input type="email" id='email-address' value={email} onChange={e =>{setEmail(e.target.value)}} required/>
          </p>
          <p>
            <label htmlFor='password' >Create Password:</label>
            <input type="password" id='password' value={password} onChange={e =>{setPassword(e.target.value)}} required/>
          </p>
          <p>
            <label htmlFor='confirm-password' >Confirm Password:</label>
            <input type="password" id='confirm-password' style={!samePassword?{backgroundColor: "#fc8383"}:{}} onChange={confirmPasswordHandler} required/>
          </p>
          <button disabled={disabled} >Signup</button>
          </>
          )}
        </Form>
        {error && <p>{error}</p>}
        {isSignin? (
          <Typography mt="10px" >Don't have an account? <Link to={"/auth?mode=signup"} >Signup</Link></Typography>
        ):(
          <Typography mt="10px" >Already Signed Up? <Link to={"/auth?mode=Signin"} >Signin</Link></Typography>
        )}
        
      </Box>
    </BackDrop>
  )
}

export default AuthForm
