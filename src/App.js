import { HashRouter , Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";

import Userdetail from "./components/Userdetail";
import Order from "./components/Order";
import Login from "./components/Login";
import Signup from "./components/Signup";
require("dotenv").config();


function App() {


  return (
    <>
    
      <Provider store={store}>
        <HashRouter>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />}></Route>
            
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/detail" element={<Userdetail />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>


          
        </HashRouter>
      </Provider>
      
    </>
  );
}

export default App;