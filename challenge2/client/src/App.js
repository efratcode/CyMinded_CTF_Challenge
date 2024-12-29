import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuBar from "./components/MenuBar"; // Import the new MenuBar component
import "./App.css"; // Import the updated styles
import StatisticsCard from "./components/StatisticsCard";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="app-container">
      {/* Sidebar/Menu */}
      <MenuBar />

      {/* Main Content */}
      <div className="dashboard-container">
        <div className="container mt-4">
          <div className="row">
            {/* Header */}
            <div className="col-12 text-center">
              <h1 className="mb-4">Dashboard</h1>
            </div>

            {/* Card 1: Activity */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Activity</h5>
                  <p className="card-text">
                    View your recent activity across the platform.
                  </p>
                  <button className="btn btn-primary">View Activity</button>
                </div>
              </div>
            </div>


            {/* Card 2: parks */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Parks List</h5>
                  {typeof backendData.parks === "undefined" ? (
                    <p>Loading...</p>
                  ) : (
                    <ul className="list-group">
                      {backendData.parks
                        .slice() // Create a shallow copy to avoid mutating state directly
                        .sort((a, b) => a.localeCompare(b)) // Alphabetical sort
                        .map((park, i) => (
                          <li className="list-group-item" key={i}>
                        {park}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            
            {/*Card 3: Statistics numbers*/}
            <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Statistics</h5>
                    <p className="card-text">120% growth on hiring this week.</p>
                    <button className="btn btn-success">View More</button>
                  </div>
                </div>
            </div>
           
            {/*card 4: stats visual*/}
            <div className="container mt-5">
              <div className="row">
                <StatisticsCard />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
