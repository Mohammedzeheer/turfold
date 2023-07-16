import React,{useState,useEffect,Fragment} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {ToastContainer , toast } from 'react-toastify'  // for error npm 
import 'react-toastify/dist/ReactToastify.css';
import './userSignup.css'


function UserSignup() {

  const[user,setUser]=useState({
    username:"",
    password:"",
    email:"",
    phonenumber:'',
})
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post('http://localhost:4000/signup', { ...user }, { withCredential: true })
            console.log(data,"---------")
            if (data) {
           
                if (data.errors) {
                    const { username, password, email, phonenumber } = data.errors
                    if (username) generateError(username)
                    else if (phonenumber) generateError(phonenumber)
                    else if (password) generateError(password)
                    else if (email) generateError(email)
                }
                else {
                    navigate("/login")
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

 
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    
    //   axios.post('http://localhost:4000/signup', { ...user }, { withCredentials: true })
    //     .then((response) => {
    //       const res = response.data;
    
    //       if (res) {
    //         console.log(res, "-----------------response-");
    
    //         if (res.errors) {
    //           const { username, password } = res.errors;
    //           if (username) generateError(username);
    //           else if (password) generateError(password);
    //         } else {
    //               navigate('/login');
    //         }
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
    


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
            <img src="/image/turf7.png" style={{ width:'55vw' , height:'100vh', paddingTop:'70px'}} alt="" />
            </div>
      
            <div className="col-md-6 bg-light">
                <div className="login d-flex align-items-center py-5">
    
      
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-7 mx-auto">
                                <h3 className="display-4">Aone Turf</h3>
                                <p className="text-muted mb-4">Register Here</p>
                                <form action="/userlogin" method="post">
                                    <div className="form-group mb-3">
                                        <input type="text"  placeholder="User Name"  name="username" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}  autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" name="password" placeholder="Password"  onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="email"  placeholder="Email"  name="email" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}  autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" name="phonenumber" placeholder="Phone Number"  onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                    </div>
                      
                                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"  onClick={handleSubmit}>Sign up</button>
                                    <div className="text-center d-flex justify-content-between mt-4"><p>have an account?<a onClick={() => navigate('/login')} class="font-italic text-muted"> 
                                            <u>Login</u></a></p></div>
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








    // <Fragment>
    //   <div className="bodySignup">
    // <div className="containerS">  
    // <h2>Sign Up</h2>
    // <input type="text" placeholder="Username" name="username" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} className="input" />
    // <input type="text" placeholder="PhoneNumber" name="phonenumber" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} className="input" />
    // <input type="email" placeholder="Email" name="email" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} className="input" />
    // <input type="password" placeholder="Password" name="password" onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} className="input" />
    // <button type="submit" onClick={handleSubmit} className="button">SignUp</button>
    // <br/> 
    // <p><span className='doUhvAccount'>have an account?</span><a className='navigateLogin' onClick={() => navigate('/login')}> Log in</a></p>
                
     
    // </div>
    // <ToastContainer />
    // </div>
    // </Fragment>
  )
}

export default UserSignup
