import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Home from './pages/Home';
import Unauthorized from './pages/Unauthorized';
import ProtectedRoute from './pages/ProtectedRoute';
import "./App.css"; // Import the updated styles
//import Login from '.src/pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/dashboard" element={<ProtectedRoute requiredRole="founder"><Dashboard /></ProtectedRoute>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><Admin/></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute requiredRole="employee"><Home/></ProtectedRoute>} />
        <Route path="/unauthorized" element={<ProtectedRoute><Unauthorized/></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
