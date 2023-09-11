import { useContext } from "react";
import { renderContext } from "./Dash";
import Inbox from "./Inbox";
import Sent from "./Sent";
import Compose from "./Compose";
function VisibleComp(){
    const {render} = useContext(renderContext);
    if(render === 'inbox'){
        return <Inbox/>;
    }else if(render === 'sent'){
        return <Sent/>;
    }else if(render === 'compose'){
        return <Compose/>;
    }else{
        return <p>Welcome to mail box</p>
    }
}
export default VisibleComp;