import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Index from "./components/Index";
import CheckLogin from "./components/CheckLogin";
import ProductDetail from "./components/ProductDetail";

const isActive = ({ isActive }) => {
  return {
    background: isActive ? "red" : "white",
    color: isActive ? "yellow" : "black",
  };
};

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <NavLink style={isActive} to={"/"}>
        Home
      </NavLink>
      <br></br>
      <NavLink style={isActive} to={"/login"}>
        Login
      </NavLink>
      <br></br>
      <NavLink style={isActive} to={"/register"}>
        Register
      </NavLink>
      <br />

      <br />
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate(-2)}>back 2 step</button>
      <button onClick={() => navigate(-1)}>back 1</button>
      <button onClick={() => navigate(1)}>next to 1 step</button>
      <button onClick={() => navigate(2)}>next to 2</button>

      {/* định nghĩa route */}
      <Routes>
        <Route path="/" element={<CheckLogin />}>
          <Route index element={<Index />}></Route>
          <Route path="banner" element={<Banner />}></Route>
          <Route path="content" element={<Content />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products" element={<Products />}></Route>

        <Route path="*" element={<NotFound />}></Route>

        <Route path="/products/:productId" element={<ProductDetail />}></Route>
      </Routes>
      <NavLink style={isActive} to={"/products"}>
        Products
      </NavLink>
    </div>
  );
}

export default App;
