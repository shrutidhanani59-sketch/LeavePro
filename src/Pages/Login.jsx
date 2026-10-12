import login from '../assets/login.png'
import icon from '../assets/icon.png'

function Login(){
    return(
        <div className="wrapper">
            <div className="leftPart ">
                <div className="heading d-flex  gap-2">
                    <img className='h-6 mt-2 icon' src={icon} alt="" />
                    <p className='fw-bold text-4xl mt-2'>LeavePro</p>
                </div>
                <p className='text-xl  text-secondary head'>Employee Leavel Management System</p>

                <img className='login-img' src={login} alt="" />

                <p className='para text-2xl ' >Manage your leavees, <br/> track your balance and <br/> keep your work-life balance.</p>
            </div>

            <div className="rightPart">
                <h1>Welcome Back!</h1>
            </div>
        </div>
    )
}

export default Login;