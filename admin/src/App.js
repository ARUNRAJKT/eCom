import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminHome from './pages/adminHome/adminHome.jsx';

function App() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<AdminHome />} />
      </Routes>
    </Router>
  );
}

export default App;
