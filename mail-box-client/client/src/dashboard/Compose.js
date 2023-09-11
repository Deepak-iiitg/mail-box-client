import { useState, useRef, useContext} from 'react';
import JoditEditor from 'jodit-react';
import { bodyContext } from './Body';
import axios from 'axios';
function Compose() {
    const {email}= useContext(bodyContext);
    const [message, setMessage] = useState({ from: email, to: '', sub: '', message: '',isRead:false });
    const editor = useRef(null);
    const [content, setContent] = useState('');
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(message);
        let result = await axios.post('http://localhost:8080/message',message);
        alert(result.data.message);
    }
    return (
        <div className='compose'>
            <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <input type='text' placeholder="To"
                    value={message.to || ''} onChange={(e) => {
                        setMessage({ ...message, to: e.target.value })
                    }}></input>
            </div>
            <div className='inputs'>
                <input type='text' placeholder="Sub"
                    value={message.sub || ''} onChange={(e) => {
                        setMessage({ ...message, sub: e.target.value })
                    }}></input>
            </div>
            <div className='editor'>
                <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1}
                    onChange={newContent => { setContent(newContent);
                        setMessage({
                        ...message,message:content
                    })}}
                />
            </div>
            <div className='inputs'>
                  <button type='submit' style={{color:'white',backgroundColor:'blueviolet'}}>send</button>
            </div>
            </form>
        </div>
    );
}
export default Compose;