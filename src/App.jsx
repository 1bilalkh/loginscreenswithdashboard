import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register"
import SignIn from "./pages/Signin"
import Login from "./pages/Login"
import Forgot from "./pages/Forgot"
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./component/ProtectedRoute.jsx";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forgot" element={<Forgot />} />
         <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
      />
      </Routes>
    </>
  );
}

export default App
