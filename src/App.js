import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./login"
import SignupForm from "./combinedSignup";
import ForgetPasswordForm from "./combinedForgetPassword";
import Dashboard from "./dashboard";
import { RequireToken } from "./auth";
import Signup2 from "./signup-2";
function App() {
  window.onload = () => {
    localStorage.removeItem('temitope');
  }
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/login'element={<Login/>}/>
      {/* <Route path="/signup1" element={<Signup1/>}></Route> */}
      {/* <Route path='/signup2/:username/:email/:phno' element={<Signup2/>}></Route> */}

      <Route path='/signup' element={<SignupForm/>}></Route>
      <Route path='/forgetpassword' element={<ForgetPasswordForm/>}></Route>
      <Route path = '/' element={<Dashboard/>}/>
      <Route path="/cur" element={<Signup2/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}



export default App;
// /:username/:email/:phno