import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
// import ProductsPage from './pages/ProductsPage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import About from './pages/About';
// import Login from './pages/Login';
// import RegisterPage from './pages/RegisterPage';
// import ForgotPassword from './pages/ForgotPassword';
// import Shipping from './pages/Shipping';
// import Payment from './pages/Payment';
// import NotFound from './pages/NotFound';
// import PrivateRouter from "./PrivateRouter";

// import Toast from "./components/Toast";
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* <Toast/> */}
      <Router>
        <Routes>
        	<Route path="/" element={<Home />} />
        	{/* <Route path="/products" element={<ProductsPage />} />
        	<Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipping" element={<PrivateRouter><Shipping /></PrivateRouter>} />
          <Route path="/payment" element={<PrivateRouter><Payment /></PrivateRouter>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>  
    </>
  );
}

export default App;
