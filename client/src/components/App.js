import React, { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudentList from "./StudentList";
import TeacherList from "./TeacherList";
import CourseList from "./CourseList";
import Enrollmentform from "./EnrollmentForm";
import AssignmentList from "./AssignmentList";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>School Management System</h1>
          <ul className="nav-links">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/teachers">Teachers</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/enrollments">Enroll Students</Link></li>
            <li><Link to="/assignments">Assignments</Link></li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<h2>Dashboard</h2>} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/teachers" element={<TeacherList />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/enrollments" element={<Enrollmentform />} />
        <Route path="/assignments" element={<AssignmentList />} />
      </Routes>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to the School Management System</h2>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Students</h3>
          <p>Manage student records and information</p>
          <Link to="/students" className="btn">View Students</Link>
        </div>
        <div className="stat-card">
          <h3>Teachers</h3>
          <p>View teacher profiles and courses</p>
          <Link to="/teachers" className="btn">View Teachers</Link>
        </div>
        <div className="stat-card">
          <h3>Courses</h3>
          <p>Browse available courses and details</p>
          <Link to="/courses" className="btn">View Courses</Link>
        </div>
      </div>
    </div>
  );
}
export default App;
