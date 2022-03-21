import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App1 from'./App1'
//import Register from './register'


function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App1/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;
