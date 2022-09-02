import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import LoginPage from "./pages/login";
import Cart from "./components/Cart/Cart";
import AdminLogin from "./components/Login/AdminLogin";
import SalesList from "./components/Sales/SalesList";
import AddSales from "./components/Sales/AddSales";
import ProductList from "./components/Product/ProductList";
import AddProduct from "./components/Product/AddProduct";
import Dashboard from "./components/Dashboard/Dashboard";
import { useSelector } from "react-redux";
import CartProvider from "./store/CartProvider";



function App() {

  const login=useSelector(state=>state.auth.isAuthentication)
  console.log(login)
  const adminLog=useSelector(state=>state.admin.admin)
  const adminLoggedIn=localStorage.getItem('adminLog')

  console.log(adminLog)
  const loggedIn=localStorage.getItem('loggedIn')


  let loginBtn=true
  if(login || loggedIn || adminLoggedIn){
    loginBtn=false
  }
  let forCart;
  if(login || loggedIn){
    forCart=true
  }
  else if(adminLog){
    forCart=false
  }




  return (
    <CartProvider>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        {loginBtn && <Route path="/login" element={<LoginPage />} />}
        {forCart && <Route path="/cart" element={<Cart/>}/>}
        <Route path="/adminLogin" element={<AdminLogin/>}/>
        {adminLoggedIn && <Route path="/sales-list" element={<SalesList/>}/>}
        {adminLoggedIn &&<Route path="/add-sales" element={<AddSales/>}/>}
        {adminLoggedIn &&<Route path="/product-list" element={<ProductList/>}/>}
        {adminLoggedIn &&<Route path="/add-product" element={<AddProduct/>}/>}
        {adminLoggedIn &&<Route path="/dashboard" element={<Dashboard/>}/>}
      </Routes>
    </Layout>
    </CartProvider>
  );
}

export default App;
