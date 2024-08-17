import './App.css';
// import LoginSignup from './components/LoginSignup/LoginSignup';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Dashboard from "";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Signup />} />
      {/* <Route path='/' element={<Dashboard />} /> */}
      </Routes>
      </BrowserRouter>
  );
}

export default App;
