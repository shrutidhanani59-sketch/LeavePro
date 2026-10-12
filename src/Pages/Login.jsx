import login from '../assets/login.png'
import icon from '../assets/icon.png'
import usericon from '../assets/usericon.png'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useState } from 'react';

function Login() {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handelsubmit = (e)=>{
        e.preventDefault();
        console.log("hi");
        
    }
    return (
        <div className="wrapper d-flex ">
            <div className="leftPart ">
                <div className="heading d-flex  gap-2">
                    <img className='h-6 mt-2 icon' src={icon} alt="" />
                    <p className='fw-bold text-4xl mt-2'>LeavePro</p>
                </div>
                <p className='text-xl  text-secondary head'>Employee Leavel Management System</p>

                <img className='login-img' src={login} alt="" />

                <p className='para text-2xl ' >Manage your leavees, <br /> track your balance and <br /> keep your work-life balance.</p>
            </div>

            <div className="rightPart  ">
                <h1 className='fw-bold'>Welcome Back!</h1>
                <p className='text-xl'>Login to your account to Countinue</p>
                <form onClick={handelsubmit}>


                    <label className="text-xl fw-bold mt-4">Email Address</label>

                    <div className="relative mt-1">
                        <MdEmail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 " />
                        <input className="border border-black pl-10 pr-3 py-2 px-5 rounded-xl w-full" type="email" placeholder="Enter your email" 
                        onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <br />

                    <label className="text-xl fw-bold mt-2">Password</label>
                    <div className="relative mt-1">
                        <FaLock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 " />
                        <input className="border border-black pl-10 pr-3 py-2 px-5 rounded-xl w-full" type="password" placeholder="Enter your password"
                        onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <br />
                    <button type="submit" className='border border-black px-2 py-2 fw-bold  loginBtn'>Login</button>
                </form>
                <p className='text-center mt-3'>Don't have an account? <span>Contact your HR</span> </p>

                <div className="demoBox border border-black px-5 rounded-2xl">
                    <p className='text-xl fw-bold py-4 '>Demo Account</p>
                    <div className="demo1 d-flex ">
                        <img className='user' src={usericon} alt="" />
                        <p className='ms-3 text-xl'>Employee Login <br /> employee@gmail.com / 123456</p>
                    </div>
                    <div className="demo1 d-flex mt-3">
                        <img className='user' src={usericon} alt="" />
                        <p className='ms-3 text-xl'>Manager Login <br /> manager@gmail.com / 123456</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Login;