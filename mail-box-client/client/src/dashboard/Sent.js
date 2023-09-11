import { useEffect, useState } from 'react';
import axios from 'axios';
function Sent(){
    const [messages,setMessages] = useState([]);
    const fetch = async()=>{
       const result = await axios.get('http://localhost:8080/message/sender/'+'amit@gmail.com');
       let data = result.data.data;
       setMessages(data);
    }
    useEffect(()=>{
        fetch();
    })
    return(
        <div className='send'>
            <ul>
             {
                messages.map((m,index)=>{
                    return <div style={{width:"100%",height:'auto',border:"1px solid black"
                    ,margin:"5px",textAlign:"center"}}>
                            <h1>sub : {m.sub}</h1>
                            <h3>to : {m.receiver}</h3>
                            <p>{m.message}</p>
                        </div>
                })
             }
             </ul>
        </div>
    )
}
export default Sent;