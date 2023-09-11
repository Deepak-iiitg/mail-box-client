import {Routes,Route} from 'react-router-dom';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Ui from '../Ui/Uis';
import Body from '../dashboard/Body';
import Viewed from '../dashboard/View';

function Routers(){
    return(
     <Routes>
        <Route path='/' element={<Ui/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<Body />}></Route>
        <Route path='/view' element={<Viewed/>}></Route>
     </Routes>
    )
}
export default Routers;