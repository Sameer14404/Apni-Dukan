import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Electronic from "../Pages/Electronic"
import AllProduct from "../Pages/Allproduct"


 export default function Allroutes(){
    return<>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<AllProduct/>}/>
        <Route path="/electronics" element={<Electronic/>}/>
    </Routes>
    </>
}

