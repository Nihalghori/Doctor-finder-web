import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./componenets/Base";
import GetStarted from "./componenets/GetStarted";
import DoctorDashboard from "./componenets/DoctorDashboard";
import DoctorDetails from "./componenets/DoctorDetails";
import AppointmentPage from "./componenets/AppointmentPage";
import SigninPage from "./componenets/SigninPage";
import Login from "./componenets/login";
import { AuthProvider } from "./componenets/AuthProvider";

const doctors = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    // Add other properties and details as needed
  },
  // Add more doctor objects
];

function PrivateRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/login" />;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in.
        setUser(authUser);
      } else {
        // No user is signed in.
        setUser(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once

  return (
    <AuthProvider>
      <Router basename="/Doctor-finder-web">
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/signup" element={<SigninPage />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/doctor-dashboard" /> : <Login />}
          />
          <Route
            path="/doctor-dashboard"
            element={
              <PrivateRoute
                element={<DoctorDashboard />}
                isAuthenticated={user !== null}
              />
            }
          />
          <Route
            path="/doctor-dashboard/:id"
            element={<DoctorDetails doctors={doctors} />}
          />
          <Route path="/book-appointment/:id" element={<AppointmentPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;











