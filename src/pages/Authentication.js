import React, { useContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import AuthForm from '../components/AuthForm';
import { auth } from '../utils/firebase';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../store/auth-context';

const Auth = () => {
  const {setAuthCtx} = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const isSignin = searchParams.get("mode") === "Signin";

  const getData = (data) =>{
    // console.log(data);
    setError(null);
    let userInfo = {};
    if(isSignin){
      signInWithEmailAndPassword(auth, data.email, data.password).then(
        async (res)=>{
          userInfo = res.user;
          localStorage.setItem("userId", userInfo.uid);
          localStorage.setItem("displayName", userInfo.displayName);
          setAuthCtx({
            isSignedIn: true,
            userId: localStorage.getItem("userId"),
            displayName: localStorage.getItem("displayName"),
          })
          // console.log(userInfo);
          if(res.status !== 400){
            navigate("/");
          }
        }
      ).catch((err) => {
        setError(err.message);
      });
    }else{
      createUserWithEmailAndPassword(auth, data.email, data.password).then(
        async (res)=>{ 
          const user = res.user;
          await updateProfile(user,{
            displayName: data.name,
          })
          userInfo = res.user;
          localStorage.setItem("userId", userInfo.uid);
          localStorage.setItem("displayName", userInfo.displayName);
          setAuthCtx({
            isSignedIn: true,
            userId: localStorage.getItem("userId"),
            displayName: localStorage.getItem("displayName"),
          })
          // console.log(userInfo);
          if(res.status !== 400){
            navigate("/");
          }
        }
      ).catch((err) => {
        setError(err.message);
      });
    }
  }

  return (
    <>
      <AuthForm getData={getData} error={error} />
    </>
  )
}

export default Auth;
