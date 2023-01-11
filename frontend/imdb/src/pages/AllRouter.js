

import { Routes,Route } from "react-router-dom"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import Create from "./Create"
import Edit from "./Edit"
import Home from "./Home"
import Register from "./Register"
import Login from "./signIn"

const AllRouter = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/edit" element={<Edit/>}/>
     <Route path="/create" element={<Create/>}  />
     <Route path="/signin" element={<SignIn/>} />
      <Route path='/register' element={<SignUp/>} />
    </Routes>
  )
}

export default AllRouter