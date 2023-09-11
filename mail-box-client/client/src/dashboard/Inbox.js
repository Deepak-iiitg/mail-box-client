import { renderContext } from "./Dash";
import { useContext ,useEffect,useState} from "react";
import Viewed from "./View";
import { bodyContext } from "./Body";
import axios from 'axios';

function Inbox(){
    const [messages,setMessages] = useState([]);
    const {count,setCount} = useContext(renderContext);
    const {email} = useContext(bodyContext);
    useEffect(()=>{
        fetchMessage();
        //deleteMessage();
    },[])
    const fetchMessage=async()=>{
       const result =  await axios('http://localhost:8080/message/receiver/'+email);
       let data = result.data.data;
       console.log(data);
       setMessages(data);
       let c = 0;
       for(let d of messages){
        if(d["isRead"] === false){
            c++;
        }
       }
       setCount(c);       
    }
    const updateIsRead=async(id)=>{
        const result = await axios.patch('http://localhost:8080/message/'+id);
        console.log('updated');
        fetchMessage();
    }
    const deleteMessage=async(id)=>{
        const result = await axios.delete('http://localhost:8080/message/'+id);
        console.log('deleted');
        fetchMessage();
    }
    const [view,setView] = useState(false);
    return(
        <div className="receiver">
            <div className="inbox">
                {
                    messages.map((m,index)=>{
                        return <div style={{width:"100%",height:'auto',border:"1px solid black"
                        ,margin:"5px"}}>
                                <h1>sub : {m.sub}</h1>
                                <h3>from : {m.sender}</h3>
                                <button style={{backgroundColor:"blue"}}
                                onClick={()=>{setView(!view);
                                updateIsRead(m.id);}}
                                >View messsage</button>
                                <button style={{backgroundColor:"red"}}
                                onClick={()=>{
                                    deleteMessage(m.id)
                                }}>Delete message</button>
                                {
                                    view?<p>{m.message}</p>:''
                                }
                            </div>
                    })
                }
            </div>
        </div>
    )
}
export default Inbox;