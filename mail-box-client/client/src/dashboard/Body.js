import Dash from "./Dash";
import Header from "./Header";
import { useLocation } from "react-router";
import { createContext } from "react";
let bodyContext = createContext();
function Body(){
    const location = useLocation();
    let email = location.state.email;
    return(
    
        <div>
            <bodyContext.Provider value={{email}}>
            <div className="body">
                <Header/>
            </div>
            <div className="body">
               <Dash/>
            </div>
            </bodyContext.Provider>
        </div>
    )
}
export default Body;
export {bodyContext};