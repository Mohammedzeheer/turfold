import React, { Fragment } from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'  //naviagete page path
import axios from 'axios';  // axios for connect with node (API)
import {ToastContainer , toast } from 'react-toastify'  // for error npm 
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {updateUser} from '../../../redux/userSlice';
import './UserLogin.css'

function UserLogin() {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const [user,setUser]=useState({})

  // useEffect(()=>{
  //   let user=localStorage.getItem('user')
  //   if(user){
  //     Navigate('/')
  //   }
  // },[])

  const handleLogin = (e)=>{
    e.preventDefault() // for make render 
    axios.post('http://localhost:4000/userlogin',{...user},{withCredentials:true}).then((res)=>{
      res=res.data
      if(res){
        console.log(res);
        if(res.errors){
          const{username,password}= res.errors
          if (username) generateError(username)
          else if (password) generateError(password)
        }else{
          localStorage.setItem('user',JSON.stringify(res))
          console.log(res.user,"username-----------");
          dispatch(updateUser({username:res.user.username,userId:res.user._id,image:res.user.image,token:res.token}))
          Navigate('/')
        }
      }
    })
  }

  const generateError = (err) => toast.error(err, {
    autoClose: 2000, 
    position: toast.POSITION.TOP_CENTER
})


  return ( 
      <Fragment>

<section>
     <div className="container-fluid">
    <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex  bg-light">
        <img src="/image/turf6.png" style={{ width:'55vw' , height:'100vh', paddingTop:'70px'}} alt="" />
        </div>
  
        <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">

  
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h3 className="display-4">Aone Turf</h3>
                            <p className="text-muted mb-4">Please a login </p>
                            <form action="/userlogin" method="post">
                                <div className="form-group mb-3">
                                    <input type="text"  placeholder="User Name"  name="username" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}  autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="password" name="password" placeholder="Password"  onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                </div>
                  
                                <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"  onClick={handleLogin}>Sign in</button>
                                <div className="text-center d-flex justify-content-between mt-4"><p>Don't have an account?<a onClick={() => Navigate('/Signup')} class="font-italic text-muted"> 
                                        <u>Sign up</u></a></p></div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
<ToastContainer />

    </section>

      </Fragment>
     
  )
}

export default UserLogin









          {/* <div className="bodyLogin">
              <div className="containerL">
                  <h2>Login</h2>

                  <input type="text" placeholder="Username" name="username" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} className="input" />
                  <input type="password" placeholder="Password" name="password" onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} className="input" />
                  <button type="submit" className="button" onClick={handleLogin}>Login</button>
                  <br />  
                 
                  <p><span className='doyouhave'>Don't have an account?</span><a className='navigateSignup' onClick={() => Navigate('/Signup')}> Sign up</a></p>
                
              </div>             
              <ToastContainer />
          </div> */}