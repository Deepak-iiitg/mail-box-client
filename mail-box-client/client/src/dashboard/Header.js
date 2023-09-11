import './styles.css';
import {Link} from 'react-router-dom';
function Header(){
    return (
        <div className='header'>
            <div className='left-header'>
               <span style={{color:"orange"}}>MailBox</span>
            </div>
            <div className='right-header'>
                <Link to='/' style={{color:"white",textDecoration:"none"}}>logout</Link>
            </div>
        </div>
    )
}
export default Header;