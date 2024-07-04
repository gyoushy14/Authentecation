// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from "./components/Signup";
import Login from  './components/Login';
import {BrowserRouter , Routes , Route} from "react-router-dom";
function App() {

  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/regester" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;

