import React from 'react';

const StatisticsData = ({backendData}) => {
  return (
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
  );
};

export default StatisticsData;