import React, { useEffect, useState } from "react";
import MenuBar from "../components/Dashboard/MenuBar"; // Import the new MenuBar component
import StatisticsCard from "../components/Dashboard/StatisticsCard";
import StatisticsData from '../components/Dashboard/StatisticsData';
import ActivityData from '../components/Dashboard/ActivityData';
import ParksData from '../components/Dashboard/ParksData';
import "../App.js"; // Import the updated styles
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
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
            <div>
              <ActivityData /> 
            </div>

            {/* Card 2: parks */}
            <div>
              <ParksData backendData={backendData}/> 
            </div>
            
            {/*Card 3: Statistics numbers*/}
            <div>
              <StatisticsData /> 
            </div>
       
            {/*card 4: stats visual*/}
            <div>
              <StatisticsCard />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
