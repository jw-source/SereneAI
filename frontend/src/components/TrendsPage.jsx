import React, { useState, useEffect } from 'react';
import { Line, Pie, Bar, Radar } from 'react-chartjs-2'; // Import chart components
import { Chart as ChartJS } from 'chart.js/auto'; // Ensure Chart.js is registered

const TrendsPage = () => {
  const [selectedBox, setSelectedBox] = useState(null); // Track the selected box for the modal

  useEffect(() => {
    // Change the body background color
    document.body.style.backgroundColor = "#ffdbb0";

    // Cleanup the effect when the component is unmounted
    return () => {
      document.body.style.backgroundColor = null; // Reset back to default
    };
  }, []);

  const handleBoxClick = (title) => {
    setSelectedBox(title); // Set the selected box title to show in the modal
  };

  const closeModal = () => {
    setSelectedBox(null); // Close the modal by resetting the state
  };

  // Sample data simulating the Python dictionary of emotions and scores
  const sampleData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], // X-axis labels (Days)
    datasets: [
      {
        label: 'Happiness',
        data: [0.2, 0.4, 0.6, 0.8, 0.9],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Sadness',
        data: [0.1, 0.3, 0.5, 0.2, 0.1],
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      },
      {
        label: 'Anger',
        data: [0.05, 0.1, 0.15, 0.1, 0.05],
        borderColor: 'rgba(255,99,132,1)',
        fill: false,
      },
      {
        label: 'Fear',
        data: [0.2, 0.3, 0.4, 0.3, 0.2],
        borderColor: 'rgba(255,159,64,1)',
        fill: false,
      },
    ],
  };

  // Prepare data for the radar chart where each dataset represents a day
  const emotions = sampleData.datasets.map((dataset) => dataset.label);

  const radarData = {
    labels: emotions,
    datasets: sampleData.labels.map((dayLabel, dayIndex) => ({
      label: dayLabel,
      data: sampleData.datasets.map((emotionDataset) => emotionDataset.data[dayIndex]),
      backgroundColor: `rgba(${(dayIndex * 50) % 255}, ${(dayIndex * 80) % 255}, ${(dayIndex * 110) % 255}, 0.2)`,
      borderColor: `rgba(${(dayIndex * 50) % 255}, ${(dayIndex * 80) % 255}, ${(dayIndex * 110) % 255}, 1)`,
      fill: true,
    })),
  };

  // Other data computations (cumulativeData, etc.) remain the same
  // Compute cumulative sums for each emotion (used for pie and bar charts)
  const cumulativeData = {
    labels: emotions,
    datasets: [
      {
        label: 'Cumulative Sum of Emotions',
        data: sampleData.datasets.map((dataset) =>
          dataset.data.reduce((a, b) => a + b, 0)
        ),
        backgroundColor: [
          'rgba(75,192,192,0.6)', // Happiness
          'rgba(153,102,255,0.6)', // Sadness
          'rgba(255,99,132,0.6)',  // Anger
          'rgba(255,159,64,0.6)',  // Fear
        ],
        borderColor: [
          'rgba(75,192,192,1)',
          'rgba(153,102,255,1)',
          'rgba(255,99,132,1)',
          'rgba(255,159,64,1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}>
      {/* Row 1: First two larger horizontal boxes */}
      <div style={rowStyle}>
        <HoverBox
          title="Curtain Codes"
          imageSrc="/images/TopLeftPic.jpg"
          onClick={() => handleBoxClick("Curtain Codes")}
        />
        <HoverBox
          title="Recent emotion frequencies"
          imageSrc="/images/TopRightPic.jpg"
          onClick={() => handleBoxClick("Recent emotion frequencies")}
        />
      </div>

      {/* Row 2: Second two larger horizontal boxes */}
      <div style={rowStyle}>
        <HoverBox
          title="Notes"
          imageSrc="/images/BottomLeftPic.jpg"
          onClick={() => handleBoxClick("Notes")}
        />
        <HoverBox
          title="Overall emotional spread"
          imageSrc="/images/BottomRightPic.jpg"
          onClick={() => handleBoxClick("Overall emotional spread")}
        />
      </div>

      {/* Modal for selected box */}
      {selectedBox && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <button style={closeButtonStyle} onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedBox}</h2>
            {selectedBox === "Curtain Codes" ? (
              // Render the bar chart for "Curtain Codes"
              <div style={{ width: '400px', height: '300px', margin: '0 auto' }}>
                <Bar data={cumulativeData} options={{ maintainAspectRatio: false }} />
              </div>
            ) : selectedBox === "Recent emotion frequencies" ? (
              // Render the line chart for "Recent emotion frequencies"
              <Line data={sampleData} />
            ) : selectedBox === "Overall emotional spread" ? (
              // Render the pie chart for "Overall emotional spread"
              <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
                <Pie data={cumulativeData} />
              </div>
            ) : selectedBox === "Notes" ? (
              // Render the radar chart for "Notes"
              <div style={{ width: '500px', height: '500px', margin: '0 auto' }}>
                <Radar data={radarData} options={{ maintainAspectRatio: false }} />
              </div>
            ) : (
              // Default content for other boxes
              <p>This is the content for {selectedBox}.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const HoverBox = ({ title, imageSrc, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...boxContainerStyle,
        transform: isHovered ? "scale(1.05)" : "scale(1)", // Increase size on hover
      }}
      onMouseEnter={() => setIsHovered(true)} // Detect when mouse enters
      onMouseLeave={() => setIsHovered(false)} // Detect when mouse leaves
      onClick={onClick} // Handle click to open modal
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensure the image fits perfectly into the box
            borderRadius: "10px",
          }}
        />
      ) : (
        <h3 style={textStyle}>{title}</h3>
      )}
    </div>
  );
};

// Styles
const rowStyle = {
  display: "flex",
  justifyContent: "center", // Center the row
  gap: "40px", // Add separation between the left and right boxes
  marginBottom: "40px", // Space between rows
  width: "100%", // Take full width of the container
  padding: "0 20px", // Reduced padding to make sure everything aligns well
};

const boxContainerStyle = {
  flex: "0 0 48%", // Slightly reduced width to ensure space between boxes
  padding: "20px",
  borderRadius: "15px", // Curved corners for the container
  backgroundColor: "#fff", // White background for the container
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
  height: "220px", // Increased height by 10%
  position: "relative", // Set container as relative for absolute positioning
  transition: "transform 0.3s ease", // Smooth transition for the hover effect
  cursor: "pointer", // Make the box clickable
};

const textStyle = {
  position: "absolute", // Position the text absolutely
  top: "10px", // Top padding
  left: "10px", // Left padding
  margin: 0, // Reset margin
  color: "black", // Keep text color black
  fontSize: "18px", // Adjust font size as needed
};

// Modal styles
const modalOverlayStyle = {
  position: "fixed", // Position the modal in the middle of the screen
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay background
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "60%", // Adjust modal width as needed
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for the modal
  position: "relative", // For the close button positioning
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
};

export default TrendsPage;
