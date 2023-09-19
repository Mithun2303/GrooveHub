import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./login"
import Signup1 from "./signup-1";
import Signup2 from "./signup-2";
import Forgetpassword1 from "./forgetpassword1";
import Forgetpassword2 from "./forgetpassword2";
function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path="/signup1" element={<Signup1/>}></Route>
      <Route path='/signup2/:username/:email/:phno' element={<Signup2/>}></Route>
      <Route path='/forgetpassword1' element={<Forgetpassword1/>}></Route>
      <Route path='/forgetpassword2' element={<Forgetpassword2/>}></Route>


    </Routes>
    </BrowserRouter>
  )
}



export default App;
// /:username/:email/:phno