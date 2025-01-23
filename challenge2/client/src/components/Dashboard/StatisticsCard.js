import React from "react";

function StatisticsCard() {
  // Example attendance data for all parks
  const attendanceData = [
      { year: "2022", Beijing: 400000, Hollywood: 290000, Japan: 490000, Orlando: 340000, Singapore: 220000 },
      { year: "2023", Beijing: 420000, Hollywood: 310000, Japan: 510000, Orlando: 360000, Singapore: 230000 },
      { year: "2024", Beijing: 450000, Hollywood: 330000, Japan: 530000, Orlando: 380000, Singapore: 250000 } 
  ];

  // Colors for the parks
  const colors = {
    Beijing: "#6A4C93", // Deep Purple
    Hollywood: "#FF6F61", // Coral
    Japan: "#FFD166", // Golden Yellow
    Orlando: "#06D6A0", // Aqua Green
    Singapore: "#118AB2" // Teal Blue
  };

  // Adjust dimensions for a smaller chart
  
  const chartHeight = 300;
  const chartWidth = 650;
  const barWidth = 20; // Bar width
  const barSpacing = 8; // Space between bars
  const groupSpacing = 80; // Space between year groups

  // Calculate max attendance for scaling
  const maxAttendance = Math.max(...attendanceData.flatMap((d) => Object.values(d).slice(1)));

  // Scale function to fit attendance values in chart height
  const scaleY = (value) => (value / maxAttendance) * chartHeight;

  return (
    <div className="col-md-12 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Parks Attendance Statistics</h5>
          <svg
            width={chartWidth + 100} // Added padding for Y-axis labels
            height={chartHeight + 20} // Extra space for X-axis labels
            style={{ display: "block", margin: "0 auto" }}
          >
            {/* Y-axis labels */}
            {Object.entries(colors).map(([park, color], index) => (
              <g key={park} transform={`translate(0, ${index * 25})`}>
                <rect x="5" y="5" width="10" height="10" fill={color} />
                <text x="20" y="15" fontSize="12" alignmentBaseline="middle">
                  {park}
                </text>
              </g>
            ))}

            {/* X-axis */}
            <line
              x1="80"
              y1={chartHeight}
              x2={chartWidth}
              y2={chartHeight}
              stroke="#000"
              strokeWidth="1"
            />

            {/* Y-axis */}
            <line
              x1="80"
              y1="0"
              x2="80"
              y2={chartHeight}
              stroke="#000"
              strokeWidth="1"
            />

            {/* Bars */}
            {attendanceData.map((yearData, yearIndex) => {
              const groupX = 80 + yearIndex * (4 * barWidth + groupSpacing);

              return Object.entries(yearData)
                .filter(([key]) => key !== "year") // Exclude the year key
                .map(([park, value], parkIndex) => (
                  <rect
                    key={`${yearData.year}-${park}`}
                    x={groupX + parkIndex * (barWidth + barSpacing)}
                    y={chartHeight - scaleY(value)}
                    width={barWidth}
                    height={scaleY(value)}
                    fill={colors[park]}
                  />
                ));
            })}

            {/* Year labels */}
            {attendanceData.map((yearData, yearIndex) => (
              <text
                key={yearData.year}
                x={80 + yearIndex * (4 * barWidth + groupSpacing) + (2 * barWidth)}
                y={chartHeight + 20}
                fontSize="12"
                textAnchor="middle"
              >
                {yearData.year}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

export default StatisticsCard;
