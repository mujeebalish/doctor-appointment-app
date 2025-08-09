//import { useState } from 'react'
import {Routes, Route} from 'react-router'
//import './App.css'
import Home from './pages/Home/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup.jsx';
import Dashbord from './pages/Dashboard/Dashboard.jsx'
const  App = ()=> {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/signup'  element={<Signup/>}/>
      <Route path='/dashbord'  element={<Dashbord/>}/>
      </Routes>
      <h1>App.jsx</h1>
      </div>
  );
}

export default App;
