import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Electronic from "../Pages/Electronic"


 export default function Allroutes(){
    return<>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/electronics" element={<Electronic/>}/>
    </Routes>
    </>
}

