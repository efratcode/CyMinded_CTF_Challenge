import React, { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../components/Login/login.css';
const Login = () => {
  const [inputValue, setInputValue] = useState(''); // Store the login input
  const [errorMessage, setErrorMessage] = useState(''); // Store error messages for invalid flags
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    // Clear session on Login page load
    localStorage.removeItem("userRole"); // Remove userRole from localStorage when login page is accessed
    console.log("Session cleared. Redirecting to login page.");
  }, []);
  
  //handle login
  const handleLogin = async () => {
    if (inputValue.trim() === '') {
      setErrorMessage('Flag cannot be empty.');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    
    try {
      // Send the input FLAG to the server for validation
      const response = await fetch('http://localhost:5000/api/validate-flag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flag: inputValue.trim() }),
      });

      const result = await response.json();

      // If the server confirms the FLAG is valid
      if (response.ok && result.valid) {

        // Check the user's role from the backend response
        const userRole = result.userRole;
        // Store session data
        localStorage.setItem('userRole', userRole); // Save userRole

        if (userRole === 'founder') {
          // Navigate to the special founder dashboard
          navigate('/dashboard');
        } else if (userRole === 'admin' || userRole === 'employee') {
          // Navigate to the regular dashboard
          navigate('/home');
        }
        else{
          setErrorMessage('An error occurred. Please try again.');
        }
      } else {
        setErrorMessage(result.message || 'Invalid flag. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    
    } finally {
      setLoading(false);
    }
  };


  
  return (
    <div className="login-container">
      {/* Centered box for the login card */}
      <div className="login-card">
        {/* Title section */}
        <h1 className="login-title">Welcome to the second challege:)</h1>
        {/* Input container */}
        <div className="input-container">
          <input
            type="text"
            placeholder="insert FLAG here..."
            className="text-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update state as user types
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p> // Display error message
        )}
        {/* Submit button */}
        <button className="submit-button" 
        onClick={handleLogin}
        disabled={loading}>{loading ? 'Validating...' : 'Login'}</button>

      </div>
    </div>
  );
};

export default Login;
