// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import AuthProvider from "./context/AuthContext";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//   <BrowserRouter>
//     <AuthProvider> {/* AuthProvider must wrap the entire app */}
//       <App />
//     </AuthProvider>
//   </BrowserRouter>
// </React.StrictMode>
// );

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'; // Tailwind CSS import (if you're using Tailwind)
import { AuthProvider } from './context/AuthContext'; // Import your Auth Context for login/logout functionality

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);