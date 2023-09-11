import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState, useEffect, createContext, useContext } from 'react';
import VisibleComp from "./VisibleComp";
import axios from 'axios';
import { bodyContext } from "./Body";
const renderContext = createContext();
function Dash() {
    const [render, setRender] = useState('');
    const [count, setCount] = useState(10);
    const [messages,setMessages] = useState([]);
    const {email} = useContext(bodyContext);
    useEffect(()=>{
        const fetchMessage=async()=>{
            const result =  await axios('http://localhost:8080/message/receiver/'+email);
            let data = result.data.data;
            console.log(data);
            setMessages(data);
            let c = 0;
            for(let d of messages){
             if(d["isRead"]){
                 continue;
             }else{
                c++;
             }
            }
            setCount(c);       
         }
         fetchMessage();
    },[count]);
    return (
        <renderContext.Provider value={{ render, setRender, count, setCount}}>
            <div className="dash">
                <div className="left-dash">
                    <Sidebar />
                </div>
                <div className='right-dash'>
                    <VisibleComp />
                </div>
            </div>
        </renderContext.Provider>
    )
}
export default Dash;
export { renderContext };