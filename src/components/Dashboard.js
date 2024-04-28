import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import MyCards from "./MyCards";

export default function Dashboard() {
  return (
    <div className="container-fluid p-0">
      <NavBar />
      <div className="container mt-5">
        <div className="text-center p-4" style={{ backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
          <h1 className="mb-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '36px', fontWeight: 'bold' }}>Dashboard</h1>
          
          <MyCards />
          <Link to="/account/0" className="btn btn-secondary mt-4">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
