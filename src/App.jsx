import React from "react";
import Nava from "./Navigation/Nava";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"; 
import Home from "./Components/Home";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Todolist from "./Components/Todolist";







const App = () => {
  return(
    <div>
      <Router>
        <div>
          <Nava />
        </div>
        <div style={{ padding: '50px'}}>
        <Routes>
          <Route path="/"element={<Home/>} />
          <Route path="/work"element={<Work/>} />
          <Route path="/contact"element={<Contact/>} />
          <Route path="/Todolist"element={<Todolist/>}/>
        </Routes>
        </div>
      </Router>

      
      
      
    
      
    </div>
  )
}
export default App;