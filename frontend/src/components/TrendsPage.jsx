// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom'; // Import Link for internal navigation

// // // // const TrendsPage = () => {
// // // //   return (
// // // //     <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
// // // //       {/* Home link in the top-right corner */}
// // // //       <Link
// // // //         to="/"
// // // //         style={{
// // // //           position: "fixed",
// // // //           top: "25px",
// // // //           right: "25px",
// // // //           padding: "5px 10px",
// // // //           color: "#fff",
// // // //           backgroundColor: "#007bff",
// // // //           textDecoration: "none",
// // // //           borderRadius: "5px",
// // // //           boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
// // // //         }}
// // // //       >
// // // //         Home
// // // //       </Link>
      
// // // //       {/* Main content with red text */}
// // // //       <div style={{ textAlign: "center", color: "red" }}>
// // // //         <h1>Trends Page</h1>
// // // //         <p>Here are the latest trends!</p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TrendsPage;
// // // import React from 'react';

// // // const TrendsPage = () => {
// // //   return (
// // //     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>

// // //       {/* Boxes */}
// // //       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
// // //         <TextBox title="Curtain Codes" value="#FFF" />
// // //         <TextBox title="Sinage Codes" value="#EEE" />
// // //       </div>

// // //       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
// // //         <TextBox title="Notes" value="Painting trucks!!" />
// // //         <TextBox title="Method" value="Spray paint onto curtain" />
// // //       </div>

// // //       <button style={saveButtonStyle}>Save Job</button>
// // //     </div>
// // //   );
// // // };

// // // const TextBox = ({ title, value }) => {
// // //   return (
// // //     <div style={textBoxStyle}>
// // //       <h3>{title}</h3>
// // //       <textarea value={value} style={textAreaStyle} readOnly />
// // //     </div>
// // //   );
// // // };

// // // // Styles
// // // const inputStyle = {
// // //   width: "100%",
// // //   padding: "10px",
// // //   borderRadius: "5px",
// // //   border: "1px solid #ccc",
// // // };

// // // const buttonStyle = {
// // //   padding: "10px 20px",
// // //   backgroundColor: "#00bfff",
// // //   color: "#fff",
// // //   border: "none",
// // //   borderRadius: "5px",
// // //   cursor: "pointer",
// // // };

// // // const saveButtonStyle = {
// // //   padding: "10px 20px",
// // //   backgroundColor: "#28a745",
// // //   color: "#fff",
// // //   border: "none",
// // //   borderRadius: "5px",
// // //   cursor: "pointer",
// // //   position: "absolute",
// // //   bottom: "20px",
// // //   right: "20px",
// // // };

// // // const textBoxStyle = {
// // //   flex: 1,
// // //   padding: "10px",
// // //   border: "1px solid #ccc",
// // //   borderRadius: "5px",
// // //   marginRight: "10px",
// // // };

// // // const textAreaStyle = {
// // //   width: "100%",
// // //   height: "100px",
// // //   padding: "10px",
// // //   borderRadius: "5px",
// // //   border: "1px solid #ccc",
// // //   resize: "none",
// // // };

// // // export default TrendsPage;
// // import React from 'react';

// // const TrendsPage = () => {
// //   return (
// //     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>

// //       {/* Larger Boxes */}
// //       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
// //         <TextBox title="Curtain Codes" value="#Zest Wu" />
// //         <TextBox title="Sinage Codes" value="Zest Wu" />
// //       </div>

// //       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
// //         <TextBox title="Notes" value="Metrics 3!!" />
// //         <TextBox title="Method" value="Metrics 4" />
// //       </div>
// //     </div>
// //   );
// // };

// // const TextBox = ({ title, value }) => {
// //   return (
// //     <div style={largeTextBoxStyle}>
// //       <h3>{title}</h3>
// //       <textarea value={value} style={largeTextAreaStyle} readOnly />
// //     </div>
// //   );
// // };

// // // Styles
// // const inputStyle = {
// //   width: "100%",
// //   padding: "10px",
// //   borderRadius: "5px",
// //   border: "1px solid #ccc",
// //   fontSize: "16px",
// // };

// // const buttonStyle = {
// //   padding: "10px 20px",
// //   backgroundColor: "#00bfff",
// //   color: "#fff",
// //   border: "none",
// //   borderRadius: "5px",
// //   cursor: "pointer",
// //   fontSize: "16px",
// // };

// // const saveButtonStyle = {
// //   padding: "10px 20px",
// //   backgroundColor: "#28a745",
// //   color: "#fff",
// //   border: "none",
// //   borderRadius: "5px",
// //   cursor: "pointer",
// //   fontSize: "16px",
// //   marginTop: "20px", // Adjusted for spacing
// // };

// // const largeTextBoxStyle = {
// //   flex: 1,
// //   padding: "20px",
// //   border: "1px solid #ccc",
// //   borderRadius: "5px",
// //   marginRight: "10px",
// //   height: "250px", // Larger height for the boxes
// // };

// // const largeTextAreaStyle = {
// //   width: "100%",
// //   height: "180px", // Adjusted height for larger box
// //   padding: "10px",
// //   borderRadius: "5px",
// //   border: "1px solid #ccc",
// //   resize: "none",
// //   fontSize: "16px", // Increased font size for larger box
// // };

// // export default TrendsPage;
// import React from 'react';

// const TrendsPage = () => {
//   return (
//     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>

//       {/* Centre-aligned Larger Boxes */}
//       <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
//         <TextBox title="Curtain Codes" value="#FFF" />
//         <TextBox title="Sinage Codes" value="#EEE" />
//       </div>

//       <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
//         <TextBox title="Notes" value="Painting trucks!!" />
//         <TextBox title="Method" value="Spray paint onto curtain" />
//       </div>
//     </div>
//   );
// };

// const TextBox = ({ title, value }) => {
//   return (
//     <div style={largeTextBoxStyle}>
//       <h3>{title}</h3>
//       <textarea value={value} style={largeTextAreaStyle} readOnly />
//     </div>
//   );
// };

// // Styles
// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
//   fontSize: "16px",
// };

// const buttonStyle = {
//   padding: "10px 20px",
//   backgroundColor: "#00bfff",
//   color: "#fff",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   fontSize: "16px",
// };

// const saveButtonStyle = {
//   padding: "10px 20px",
//   backgroundColor: "#28a745",
//   color: "#fff",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   fontSize: "16px",
//   marginTop: "20px",
// };

// const largeTextBoxStyle = {
//   width: "48%", // Box width to control size
//   padding: "20px",
//   border: "1px solid #ccc",
//   borderRadius: "5px",
//   marginRight: "10px",
//   height: "250px", // Larger height for the boxes
// };

// const largeTextAreaStyle = {
//   width: "100%",
//   height: "180px", // Adjusted height for larger box
//   padding: "10px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
//   resize: "none",
//   fontSize: "16px",
// };

// export default TrendsPage;
// import React from 'react';

// const TrendsPage = () => {
//   return (
//     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
  
//       {/* Center-aligned Larger Boxes */}
//       <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
//         <div style={{ display: "flex", justifyContent: "center", width: "100%", maxWidth: "1500px" }}>
//           <TextBox title="Curtain Codes" value="#FFF" />
//           <TextBox title="Sinage Codes" value="#EEE" />
//         </div>
//       </div>

//       <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
//         <div style={{ display: "flex", justifyContent: "center", width: "100%", maxWidth: "1500px" }}>
//           <TextBox title="Notes" value="Painting trucks!!" />
//           <TextBox title="Method" value="Spray paint onto curtain" />
//         </div>
//       </div>

//     </div>
//   );
// };

// const TextBox = ({ title, value }) => {
//   return (
//     <div style={largeTextBoxStyle}>
//       <h3>{title}</h3>
//       <textarea value={value} style={largeTextAreaStyle} readOnly />
//     </div>
//   );
// };

// // Styles
// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
//   fontSize: "16px",
// };

// const buttonStyle = {
//   padding: "10px 20px",
//   backgroundColor: "#00bfff",
//   color: "#fff",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   fontSize: "16px",
// };

// const saveButtonStyle = {
//   padding: "10px 20px",
//   backgroundColor: "#28a745",
//   color: "#fff",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   fontSize: "16px",
//   marginTop: "20px",
// };

// const largeTextBoxStyle = {
//   width: "60%",  // Increase this value from 48% to 60% or more
//   padding: "20px",
//   border: "1px solid #ccc",
//   borderRadius: "5px",
//   marginRight: "10px",
//   height: "250px", 
// };

// const largeTextAreaStyle = {
//   width: "100%",
//   height: "180px", // Adjusted height for larger box
//   padding: "10px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
//   resize: "none",
//   fontSize: "16px",
// };

// export default TrendsPage;
// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
//       {/* Center-aligned Larger Boxes with rounded container */}
//       <div style={boxContainerStyle}>
//         <div style={{ display: "flex", justifyContent: "center", width: "100%", maxWidth: "1500px" }}>
//           <TextBox title="Curtain Codes" value="#FFF" />
//           <TextBox title="Sinage Codes" value="#EEE" />
//         </div>
//       </div>

//       <div style={boxContainerStyle}>
//         <div style={{ display: "flex", justifyContent: "center", width: "100%", maxWidth: "1500px" }}>
//           <TextBox title="Notes" value="Painting trucks!!" />
//           <TextBox title="Method" value="Spray paint onto curtain" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const TextBox = ({ title, value }) => {
//   return (
//     <div style={largeTextBoxStyle}>
//       <h3>{title}</h3>
//       <textarea value={value} style={largeTextAreaStyle} readOnly />
//     </div>
//   );
// };

// // Styles for the box container with curved corners
// const boxContainerStyle = {
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for a card-like effect
//   marginBottom: "20px", // Margin to separate the box containers
// };

// const largeTextBoxStyle = {
//   width: "60%", // Increased width for the text boxes
//   padding: "20px",
//   border: "1px solid #ccc",
//   borderRadius: "5px", // Small radius for the individual text boxes
//   marginRight: "10px",
//   height: "250px",
// };

// const largeTextAreaStyle = {
//   width: "100%",
//   height: "180px", // Adjusted height for larger box
//   padding: "10px",
//   borderRadius: "5px", // Small radius for text areas
//   border: "1px solid #ccc",
//   resize: "none",
//   fontSize: "16px",
// };

// export default TrendsPage;
// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
//       {/* Four separate containers for each TextBox */}
//       <div style={boxContainerStyle}>
//         <TextBox title="Curtain Codes" value="#FFF" />
//       </div>

//       <div style={boxContainerStyle}>
//         <TextBox title="Sinage Codes" value="#EEE" />
//       </div>

//       <div style={boxContainerStyle}>
//         <TextBox title="Notes" value="Painting trucks!!" />
//       </div>

//       <div style={boxContainerStyle}>
//         <TextBox title="Method" value="Spray paint onto curtain" />
//       </div>
//     </div>
//   );
// };

// const TextBox = ({ title, value }) => {
//   return (
//     <div style={largeTextBoxStyle}>
//       <h3>{title}</h3>
//       <textarea value={value} style={largeTextAreaStyle} readOnly />
//     </div>
//   );
// };

// // Styles for the box container with curved corners
// const boxContainerStyle = {
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for a card-like effect
//   marginBottom: "20px", // Margin to separate the box containers
//   display: "flex",
//   justifyContent: "center", // Center the text boxes horizontally
// };

// const largeTextBoxStyle = {
//   width: "60%", // Increased width for the text boxes
//   padding: "20px",
//   border: "1px solid #ccc",
//   borderRadius: "5px", // Small radius for the individual text boxes
//   marginRight: "10px",
//   height: "250px",
// };

// const largeTextAreaStyle = {
//   width: "100%",
//   height: "180px", // Adjusted height for larger box
//   padding: "10px",
//   borderRadius: "5px", // Small radius for text areas
//   border: "1px solid #ccc",
//   resize: "none",
//   fontSize: "16px",
// };

// export default TrendsPage;
// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
//       {/* Row 1: First two text boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <TextBox title="Curtain Codes" value="#FFF" />
//         </div>
//         <div style={boxContainerStyle}>
//           <TextBox title="Sinage Codes" value="#EEE" />
//         </div>
//       </div>

//       {/* Row 2: Last two text boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <TextBox title="Notes" value="Painting trucks!!" />
//         </div>
//         <div style={boxContainerStyle}>
//           <TextBox title="Method" value="Spray paint onto curtain" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const TextBox = ({ title, value }) => {
//   return (
//     <div style={largeTextBoxStyle}>
//       <h3>{title}</h3>
//       <textarea value={value} style={largeTextAreaStyle} readOnly />
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "center", // Center the text boxes within the row
//   marginBottom: "20px", // Space between rows
// };

// const boxContainerStyle = {
//   flex: 1, // Allows the boxes to grow and fill the space
//   maxWidth: "48%", // Keeps the boxes at about half width
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   margin: "0 10px", // Small margin between boxes
// };

// const largeTextBoxStyle = {
//   width: "100%",
//   padding: "20px",
//   border: "1px solid #ccc",
//   borderRadius: "5px", // Small radius for the individual text boxes
//   height: "250px",
// };

// const largeTextAreaStyle = {
//   width: "100%",
//   height: "180px", // Adjusted height for larger box
//   padding: "10px",
//   borderRadius: "5px", // Small radius for text areas
//   border: "1px solid #ccc",
//   resize: "none",
//   fontSize: "16px",
// };

// export default TrendsPage;
// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
//       {/* Row 1: First two text boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <TextBox title="Curtain Codes" value="#FFF" />
//         </div>
//         <div style={boxContainerStyle}>
//           <TextBox title="Sinage Codes" value="#EEE" />
//         </div>
//       </div>

//       {/* Row 2: Last two text boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <TextBox title="Notes" value="Painting trucks!!" />
//         </div>
//         <div style={boxContainerStyle}>
//           <TextBox title="Method" value="Spray paint onto curtain" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const TextBox = ({ title, value }) => {
//   return (
//     <div style={largeTextBoxStyle}>
//       <h3>{title}</h3>
//       <textarea value={value} style={largeTextAreaStyle} readOnly />
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "center", // Center the text boxes within the row
//   marginBottom: "40px", // Increased space between rows
// };

// const boxContainerStyle = {
//   flex: 1, // Allows the boxes to grow and fill the space
//   maxWidth: "45%", // Reduced width to avoid overlap
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   margin: "0 20px", // Increased margin between boxes to avoid overlap
// };

// const largeTextBoxStyle = {
//   width: "100%",
//   padding: "20px",
//   border: "1px solid #ccc",
//   borderRadius: "5px", // Small radius for the individual text boxes
//   height: "250px",
// };

// const largeTextAreaStyle = {
//   width: "100%",
//   height: "180px", // Adjusted height for larger box
//   padding: "10px",
//   borderRadius: "5px", // Small radius for text areas
//   border: "1px solid #ccc",
//   resize: "none",
//   fontSize: "16px",
// };

// export default TrendsPage;
// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
//       {/* Row 1: First two outer boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Curtain Codes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Sinage Codes</h3>
//         </div>
//       </div>

//       {/* Row 2: Last two outer boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Notes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Method</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "center", // Center the text boxes within the row
//   marginBottom: "40px", // Increased space between rows
// };

// const boxContainerStyle = {
//   flex: 1, // Allows the boxes to grow and fill the space
//   maxWidth: "45%", // Reduced width to avoid overlap
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   margin: "0 20px", // Increased margin between boxes to avoid overlap
//   display: "flex",
//   justifyContent: "center", // Center the content (title) inside the box
//   alignItems: "center", // Center vertically
//   height: "250px", // Keep height for consistent appearance
// };

// export default TrendsPage;

// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
//       {/* Row 1: First two boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Curtain Codes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Sinage Codes</h3>
//         </div>
//       </div>

//       {/* Row 2: Second two boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Notes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Method</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "center", // Center the text boxes within the row
//   marginBottom: "40px", // Space between rows
// };

// const boxContainerStyle = {
//   flex: 1, // Allows the boxes to grow and fill the space
//   maxWidth: "45%", // Keeps boxes roughly half width in each row
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   margin: "0 20px", // Margin between boxes to avoid overlap
//   height: "250px", // Height as before for future images or content
//   display: "flex",
//   justifyContent: "center", // Center the title or future content
//   alignItems: "center", // Center vertically
// };

// export default TrendsPage;

// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}> {/* Increased maxWidth for more horizontal space */}
//       {/* Row 1: First two larger boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Curtain Codes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Sinage Codes</h3>
//         </div>
//       </div>

//       {/* Row 2: Second two larger boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Notes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Method</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "center", // Center the text boxes within the row
//   marginBottom: "40px", // Space between rows
// };

// const boxContainerStyle = {
//   flex: 1, // Allows the boxes to grow and fill the space
//   maxWidth: "48%", // Increased maxWidth to make the boxes wider
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   margin: "0 20px", // Margin between boxes to avoid overlap
//   height: "350px", // Increased height for larger boxes
//   display: "flex",
//   justifyContent: "center", // Center the title or future content
//   alignItems: "center", // Center vertically
// };

// export default TrendsPage;
// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "1600px", margin: "0 auto" }}> {/* Increased maxWidth for more horizontal space */}
//       {/* Row 1: First two larger horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Curtain Codes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Sinage Codes</h3>
//         </div>
//       </div>

//       {/* Row 2: Second two larger horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Notes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Method</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "center", // Center the text boxes within the row
//   marginBottom: "40px", // Space between rows
// };

// const boxContainerStyle = {
//   flex: 1, // Allows the boxes to grow and fill the space
//   maxWidth: "70%", // Increased maxWidth to make the boxes wider horizontally
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   margin: "0 20px", // Margin between boxes to avoid overlap
//   height: "250px", // Keep the original height
//   display: "flex",
//   justifyContent: "center", // Center the title or future content
//   alignItems: "center", // Center vertically
// };

// export default TrendsPage;
// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}> {/* Full width container for more space */}
//       {/* Row 1: First two larger horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Curtain Codes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Sinage Codes</h3>
//         </div>
//       </div>

//       {/* Row 2: Second two larger horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Notes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Method</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "center", // Center the text boxes within the row
//   marginBottom: "40px", // Space between rows
// };

// const boxContainerStyle = {
//   flex: 1, // Allows the boxes to grow and fill the space
//   maxWidth: "300%", // Increased width to make the boxes much wider
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   margin: "0 20px", // Margin between boxes to avoid overlap
//   height: "250px", // Keep the original height
//   display: "flex",
//   justifyContent: "center", // Center the title or future content
//   alignItems: "center", // Center vertically
// };

// export default TrendsPage;
// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}> {/* Full width container */}
//       {/* Row 1: First two much wider horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Curtain Codes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Sinage Codes</h3>
//         </div>
//       </div>

//       {/* Row 2: Second two much wider horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Notes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Method</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "space-between", // Ensure boxes are spaced across the row
//   marginBottom: "40px", // Space between rows
//   width: "100%", // Take full width of the container
//   padding: "0 40px", // Adds some padding inside the row
// };

// const boxContainerStyle = {
//   flex: "0 0 45%", // Each box takes up 45% of the row width, making them much wider
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   height: "250px", // Keep the original height
//   display: "flex",
//   justifyContent: "center", // Center the title or future content
//   alignItems: "center", // Center vertically
// };

// export default TrendsPage;
// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}> {/* Full width container */}
//       {/* Row 1: First two much wider horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Curtain Codes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Sinage Codes</h3>
//         </div>
//       </div>

//       {/* Row 2: Second two much wider horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Notes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Method</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "space-between", // Ensure boxes are spaced across the row
//   marginBottom: "40px", // Space between rows
//   width: "100%", // Take full width of the container
//   padding: "0 40px", // Adds some padding inside the row
// };

// const boxContainerStyle = {
//   flex: "0 0 90%", // Each box now takes up 90% of the row's width to make them much wider
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   height: "250px", // Keep the original height
//   display: "flex",
//   justifyContent: "center", // Center the title or future content
//   alignItems: "center", // Center vertically
// };

// export default TrendsPage;
// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}> {/* Full width container */}
//       {/* Row 1: First two wider horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Curtain Codes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Sinage Codes</h3>
//         </div>
//       </div>

//       {/* Row 2: Second two wider horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Notes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Method</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "center", // Center the boxes horizontally
//   marginBottom: "40px", // Space between rows
//   width: "100%", // Take full width of the container
//   padding: "0 40px", // Adds padding inside the row
//   gap: "20px", // Ensures space between the boxes
// };

// const boxContainerStyle = {
//   flex: "0 0 45%", // Each box takes up 45% of the row width to ensure proper spacing
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   height: "250px", // Keep the original height
//   display: "flex",
//   justifyContent: "center", // Center the title or future content
//   alignItems: "center", // Center vertically
// };

// export default TrendsPage;
// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}> {/* Full width container */}
//       {/* Row 1: First two wider horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Curtain Codes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Sinage Codes</h3>
//         </div>
//       </div>

//       {/* Row 2: Second two wider horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Notes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Method</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "center", // Center the boxes horizontally
//   marginBottom: "40px", // Space between rows
//   width: "100%", // Take full width of the container
//   gap: "20px", // Ensures space between the boxes
// };

// const boxContainerStyle = {
//   flex: "0 0 90%", // Each box takes up 90% of the row width, making them wide
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   height: "250px", // Keep the original height
//   display: "flex",
//   justifyContent: "center", // Center the title or future content
//   alignItems: "center", // Center vertically
// };

// export default TrendsPage;
// import React, { useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}> {/* Full width container */}
//       {/* Row 1: First two wider horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Curtain Codes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Sinage Codes</h3>
//         </div>
//       </div>

//       {/* Row 2: Second two wider horizontal boxes */}
//       <div style={rowStyle}>
//         <div style={boxContainerStyle}>
//           <h3>Notes</h3>
//         </div>
//         <div style={boxContainerStyle}>
//           <h3>Method</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "center", // Center the boxes horizontally
//   marginBottom: "40px", // Space between rows
//   width: "100%", // Take full width of the container
//   gap: "20px", // Ensures space between the boxes
// };

// const boxContainerStyle = {
//   flex: "0 0 90%", // Each box takes up 90% of the row width
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   height: "250px", // Keep the original height
//   display: "flex",
//   justifyContent: "center", // Center the title or future content
//   alignItems: "center", // Center vertically
//   transition: "transform 0.3s ease", // Smooth transition for the hover effect
// };

// const boxContainerStyleHover = {
//   ...boxContainerStyle,
//   transform: "scale(1.05)", // Slightly increase size on hover (5% bigger)
// };

// export default TrendsPage;
// import React, { useState, useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}>
//       {/* Row 1: First two wider horizontal boxes */}
//       <div style={rowStyle}>
//         <HoverBox title="Curtain Codes" />
//         <HoverBox title="Sinage Codes" />
//       </div>

//       {/* Row 2: Second two wider horizontal boxes */}
//       <div style={rowStyle}>
//         <HoverBox title="Notes" />
//         <HoverBox title="Method" />
//       </div>
//     </div>
//   );
// };

// const HoverBox = ({ title }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       style={{
//         ...boxContainerStyle,
//         transform: isHovered ? "scale(1.05)" : "scale(1)", // Increase size on hover
//       }}
//       onMouseEnter={() => setIsHovered(true)} // Detect when mouse enters
//       onMouseLeave={() => setIsHovered(false)} // Detect when mouse leaves
//     >
//       <h3>{title}</h3>
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "center", // Center the boxes horizontally
//   marginBottom: "40px", // Space between rows
//   width: "100%", // Take full width of the container
//   gap: "20px", // Ensures space between the boxes
// };

// const boxContainerStyle = {
//   flex: "0 0 90%", // Each box takes up 90% of the row width
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   height: "250px", // Keep the original height
//   display: "flex",
//   justifyContent: "center", // Center the title or future content
//   alignItems: "center", // Center vertically
//   transition: "transform 0.3s ease", // Smooth transition for the hover effect
// };

// export default TrendsPage;

// import React, { useState, useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}>
//       {/* Row 1: First two wider horizontal boxes */}
//       <div style={rowStyle}>
//         <HoverBox title="Curtain Codes" imageSrc="/images/TopLeftPic.jpg" /> {/* Path to your image */}
//         <HoverBox title="Sinage Codes" />
//       </div>

//       {/* Row 2: Second two wider horizontal boxes */}
//       <div style={rowStyle}>
//         <HoverBox title="Notes" />
//         <HoverBox title="Method" />
//       </div>
//     </div>
//   );
// };

// const HoverBox = ({ title, imageSrc }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       style={{
//         ...boxContainerStyle,
//         transform: isHovered ? "scale(1.05)" : "scale(1)", // Increase size on hover
//       }}
//       onMouseEnter={() => setIsHovered(true)} // Detect when mouse enters
//       onMouseLeave={() => setIsHovered(false)} // Detect when mouse leaves
//     >
//       {imageSrc ? (
//         <img
//           src={imageSrc}
//           alt={title}
//           style={{ width: "100%", height: "auto", borderRadius: "10px" }}
//         />
//       ) : (
//         <h3 style={textStyle}>{title}</h3>
//       )}
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "space-between", // Distribute boxes evenly across the row
//   marginBottom: "40px", // Space between rows
//   width: "100%", // Take full width of the container
//   padding: "0 40px", // Add padding to make sure they don't stick to edges
// };

// const boxContainerStyle = {
//   flex: "0 0 45%", // Make the boxes wide, each takes 45% of the row width
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   height: "auto", // Let the box adjust to the content height
//   position: "relative", // Set container as relative for absolute positioning
//   transition: "transform 0.3s ease", // Smooth transition for the hover effect
// };

// const textStyle = {
//   position: "absolute", // Position the text absolutely
//   top: "10px", // Top padding
//   left: "10px", // Left padding
//   margin: 0, // Reset margin
//   color: "black", // Keep text color black
//   fontSize: "18px", // Adjust font size as needed
// };

// export default TrendsPage;
// import React, { useState, useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}>
//       {/* Row 1: First two wider horizontal boxes */}
//       <div style={rowStyle}>
//         <HoverBox title="Curtain Codes" imageSrc="/images/TopLeftPic.jpg" /> {/* Image in top-left box */}
//         <HoverBox title="Sinage Codes" imageSrc="/images/TopRightPic.jpg" /> {/* Image in top-right box */}
//       </div>

//       {/* Row 2: Second two wider horizontal boxes */}
//       <div style={rowStyle}>
//         <HoverBox title="Notes" imageSrc="/images/BottomLeftPic.jpg" />
//         <HoverBox title="Method" imageSrc="/images/BottomRightPic.jpg"/>
//       </div>
//     </div>
//   );
// };

// const HoverBox = ({ title, imageSrc }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       style={{
//         ...boxContainerStyle,
//         transform: isHovered ? "scale(1.05)" : "scale(1)", // Increase size on hover
//       }}
//       onMouseEnter={() => setIsHovered(true)} // Detect when mouse enters
//       onMouseLeave={() => setIsHovered(false)} // Detect when mouse leaves
//     >
//       {imageSrc ? (
//         <img
//           src={imageSrc}
//           alt={title}
//           style={{ width: "100%", height: "auto", borderRadius: "10px" }}
//         />
//       ) : (
//         <h3 style={textStyle}>{title}</h3>
//       )}
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "space-between", // Distribute boxes evenly across the row
//   marginBottom: "40px", // Space between rows
//   width: "100%", // Take full width of the container
//   padding: "0 40px", // Add padding to make sure they don't stick to edges
// };

// const boxContainerStyle = {
//   flex: "0 0 45%", // Make the boxes wide, each takes 45% of the row width
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   height: "auto", // Let the box adjust to the content height
//   position: "relative", // Set container as relative for absolute positioning
//   transition: "transform 0.3s ease", // Smooth transition for the hover effect
// };

// const textStyle = {
//   position: "absolute", // Position the text absolutely
//   top: "10px", // Top padding
//   left: "10px", // Left padding
//   margin: 0, // Reset margin
//   color: "black", // Keep text color black
//   fontSize: "18px", // Adjust font size as needed
// };

// export default TrendsPage;
// import React, { useState, useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}>
//       {/* Row 1: First two smaller horizontal boxes */}
//       <div style={rowStyle}>
//         <HoverBox title="Curtain Codes" imageSrc="/images/TopLeftPic.jpg" /> {/* Image in top-left box */}
//         <HoverBox title="Sinage Codes" imageSrc="/images/TopRightPic.jpg" /> {/* Image in top-right box */}
//       </div>

//       {/* Row 2: Second two smaller horizontal boxes */}
//       <div style={rowStyle}>
//         <HoverBox title="Notes" imageSrc="/images/BottomLeftPic.jpg" />
//         <HoverBox title="Method" imageSrc="/images/BottomRightPic.jpg" />
//       </div>
//     </div>
//   );
// };

// const HoverBox = ({ title, imageSrc }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       style={{
//         ...boxContainerStyle,
//         transform: isHovered ? "scale(1.05)" : "scale(1)", // Increase size on hover
//       }}
//       onMouseEnter={() => setIsHovered(true)} // Detect when mouse enters
//       onMouseLeave={() => setIsHovered(false)} // Detect when mouse leaves
//     >
//       {imageSrc ? (
//         <img
//           src={imageSrc}
//           alt={title}
//           style={{
//             width: "100%", 
//             height: "100%", 
//             objectFit: "cover", // Ensures the image covers the box without stretching
//             borderRadius: "10px",
//           }}
//         />
//       ) : (
//         <h3 style={textStyle}>{title}</h3>
//       )}
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "space-between", // Distribute boxes evenly across the row
//   marginBottom: "40px", // Space between rows
//   width: "100%", // Take full width of the container
//   padding: "0 40px", // Add padding to make sure they don't stick to edges
// };

// const boxContainerStyle = {
//   flex: "0 0 36%", // Reduced width to 36% (20% smaller than 45%)
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   height: "200px", // Reduced height by approximately 20%
//   position: "relative", // Set container as relative for absolute positioning
//   transition: "transform 0.3s ease", // Smooth transition for the hover effect
// };

// const textStyle = {
//   position: "absolute", // Position the text absolutely
//   top: "10px", // Top padding
//   left: "10px", // Left padding
//   margin: 0, // Reset margin
//   color: "black", // Keep text color black
//   fontSize: "18px", // Adjust font size as needed
// };

// export default TrendsPage;
// import React, { useState, useEffect } from 'react';

// const TrendsPage = () => {
//   useEffect(() => {
//     // Change the body background color
//     document.body.style.backgroundColor = "#ffdbb0";

//     // Cleanup the effect when the component is unmounted
//     return () => {
//       document.body.style.backgroundColor = null; // Reset back to default
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}>
//       {/* Row 1: First two larger horizontal boxes */}
//       <div style={rowStyle}>
//         <HoverBox title="Curtain Codes" imageSrc="/images/TopLeftPic.jpg" /> {/* Image in top-left box */}
//         <HoverBox title="Sinage Codes" imageSrc="/images/TopRightPic.jpg" /> {/* Image in top-right box */}
//       </div>

//       {/* Row 2: Second two larger horizontal boxes */}
//       <div style={rowStyle}>
//         <HoverBox title="Notes" imageSrc="/images/BottomLeftPic.jpg" />
//         <HoverBox title="Method" imageSrc="/images/BottomRightPic.jpg" />
//       </div>
//     </div>
//   );
// };

// const HoverBox = ({ title, imageSrc }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       style={{
//         ...boxContainerStyle,
//         transform: isHovered ? "scale(1.05)" : "scale(1)", // Increase size on hover
//       }}
//       onMouseEnter={() => setIsHovered(true)} // Detect when mouse enters
//       onMouseLeave={() => setIsHovered(false)} // Detect when mouse leaves
//     >
//       {imageSrc ? (
//         <img
//           src={imageSrc}
//           alt={title}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover", // Ensure the image fits perfectly into the box
//             borderRadius: "10px",
//           }}
//         />
//       ) : (
//         <h3 style={textStyle}>{title}</h3>
//       )}
//     </div>
//   );
// };

// // Styles
// const rowStyle = {
//   display: "flex",
//   justifyContent: "space-around", // Reduce separation between the left and right boxes
//   marginBottom: "40px", // Space between rows
//   width: "100%", // Take full width of the container
//   padding: "0 20px", // Reduced padding to bring the boxes closer together
// };

// const boxContainerStyle = {
//   flex: "0 0 55%", // Increased width to 55% (10% larger than previous 45%)
//   padding: "20px",
//   borderRadius: "15px", // Curved corners for the container
//   backgroundColor: "#fff", // White background for the container
//   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for card effect
//   height: "220px", // Increased height by 10%
//   position: "relative", // Set container as relative for absolute positioning
//   transition: "transform 0.3s ease", // Smooth transition for the hover effect
// };

// const textStyle = {
//   position: "absolute", // Position the text absolutely
//   top: "10px", // Top padding
//   left: "10px", // Left padding
//   margin: 0, // Reset margin
//   color: "black", // Keep text color black
//   fontSize: "18px", // Adjust font size as needed
// };

// export default TrendsPage;
import React, { useState, useEffect } from 'react';

const TrendsPage = () => {
  useEffect(() => {
    // Change the body background color
    document.body.style.backgroundColor = "#ffdbb0";

    // Cleanup the effect when the component is unmounted
    return () => {
      document.body.style.backgroundColor = null; // Reset back to default
    };
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}>
      {/* Row 1: First two larger horizontal boxes */}
      <div style={rowStyle}>
        <HoverBox title="Curtain Codes" imageSrc="/images/TopLeftPic.jpg" /> {/* Image in top-left box */}
        <HoverBox title="Sinage Codes" imageSrc="/images/TopRightPic.jpg" /> {/* Image in top-right box */}
      </div>

      {/* Row 2: Second two larger horizontal boxes */}
      <div style={rowStyle}>
        <HoverBox title="Notes" imageSrc="/images/BottomLeftPic.jpg" />
        <HoverBox title="Method" imageSrc="/images/BottomRightPic.jpg" />
      </div>
    </div>
  );
};

const HoverBox = ({ title, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...boxContainerStyle,
        transform: isHovered ? "scale(1.05)" : "scale(1)", // Increase size on hover
      }}
      onMouseEnter={() => setIsHovered(true)} // Detect when mouse enters
      onMouseLeave={() => setIsHovered(false)} // Detect when mouse leaves
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
};

const textStyle = {
  position: "absolute", // Position the text absolutely
  top: "10px", // Top padding
  left: "10px", // Left padding
  margin: 0, // Reset margin
  color: "black", // Keep text color black
  fontSize: "18px", // Adjust font size as needed
};

export default TrendsPage;
