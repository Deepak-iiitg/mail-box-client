import {useState} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
let email = '';
function Login(){
    const [inputs,setInputs]= useState({email:'',password:''});
    const navigate = useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let data = await axios.post('http://localhost:8080/auth/login',inputs);
        const res = data.data;
        if(data.status===201){
            email = inputs.email;
            navigate('/dashboard',{state:{email:inputs.email}});
        }else{
            alert(res.message);
        }
    }
    return(
        <div className='login'>
            
            <form onSubmit={handleSubmit}>
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
                    <button>login</button>
                </div>
                <div className='input'>
                     if you have not registered <Link to='/signup'
                     style={{textDecoration:"none"}}>sign up</Link>
                </div>
            </form>
        </div>
    )
}
export default Login;
export {email};