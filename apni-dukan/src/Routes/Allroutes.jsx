import { Route, Routes } from "react-router-dom"
import Electronic from "../Pages/Electronic"

 export default function Allroutes(){
    return<>
    <Routes>
        <Route path="./electronics" element={<Electronic/>}/>
    </Routes>
    </>
}

