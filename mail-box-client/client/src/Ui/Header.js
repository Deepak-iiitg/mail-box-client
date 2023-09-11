import './styles.css';
import {Link} from 'react-router-dom';
function Header(){
    return (
        <div className='header'>
            <div className='left-header'>
               <span>MailBox</span>
            </div>
            <div className='right-header'>
                <Link to='/login' style={{color:"white",textDecoration:"none"}}>login</Link>
            </div>
        </div>
    )
}
export default Header;