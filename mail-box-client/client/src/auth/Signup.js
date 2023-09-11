import {useState} from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router';
import axios from 'axios';

function Signup(){
     const [inputs,setInputs] = useState({name:'',email:'',password:'',confirmPassword:''});
     const navigate = useNavigate();
     const handleSubmit=async (e)=>{
        e.preventDefault();
        if(inputs.password !== inputs.confirmPassword){
            alert('password and confirm password is not match');
        }else{
            const data = await axios.post('http://localhost:8080/auth/signup',{
                name:inputs.name,email:inputs.email,password:inputs.password
            });
            alert(data.data.message);
            navigate('/login');
        }
     }
     return(
        <div className='signup'>
            if already registered <Link to='/'
            style={{textDecoration:"none"}}>Login</Link>
            <form onSubmit={handleSubmit}>
                <div className='input'>
                    <span>Name</span>
                    <input type='text' value={inputs.name || ''}
                    onChange={(e)=>{setInputs({...inputs,name:e.target.value})}}/>
                </div>
                <div className='input'>
                    <span>Email</span>
                    <input type='email' value={inputs.email || ''}
                    onChange={(e)=>{setInputs({...inputs,email:e.target.value})}}/>
                </div>
                <div className='input'>
                    <span>Password</span>
                    <input type='password' value={inputs.password || ''}
                    onChange={(e)=>{setInputs({...inputs,password:e.target.value})}}/>
                </div>
                <div className='input'>
                    <span>Confirm Password</span>
                    <input type='password' value={inputs.confirmPassword || ''}
                    onChange={(e)=>{setInputs({...inputs,confirmPassword:e.target.value})}}/>
                </div>
                <div className='input'>
                    <button>Signup</button>
                </div>
            </form>
        </div>
     )
}
export default Signup;