import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import "./App.css"; // Import the updated styles
//import Login from '.src/pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
