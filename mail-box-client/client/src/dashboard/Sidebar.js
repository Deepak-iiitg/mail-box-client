import './styles.css';
import { useContext } from 'react';
import { renderContext } from './Dash';
function Sidebar(){
    const {render,setRender,count,setCount} =useContext(renderContext);
    return(
        <ul>
            <li><button onClick={()=>setRender('inbox')}>Inbox</button>
            <sup>{count}</sup></li>
            <li><button onClick={()=>setRender('sent')}>Sent</button></li>
            <li><button onClick={()=>setRender('compose')}>Compose</button></li>
        </ul>
    )
}
export default Sidebar;