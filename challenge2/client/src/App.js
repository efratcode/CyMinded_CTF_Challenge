import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import "./App.css"; // Import the updated styles
//import Login from '.src/pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/*<Route path="/login" component={Login} />>*/}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
