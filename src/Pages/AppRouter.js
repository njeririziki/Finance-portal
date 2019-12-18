import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Home from './Home';
import Pocket from './PocketMoney'


const AppRouter = ()=>{
    return(
        <BrowserRouter>
        <div>
            <Route path='/' component={Home} exact/>
            <Route path='/pocket' component={Pocket} exact/>
        </div>
        </BrowserRouter>
    )
}
 export default AppRouter;