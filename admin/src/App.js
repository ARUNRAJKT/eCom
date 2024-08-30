import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layout/adminHome';
// import Dashboard from './pages/Dashboard';
import Users from './components/Users';
import Products from './components/Products';
import Orders from './components/Orders';
import Admin from './components/Admins';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="admins" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

