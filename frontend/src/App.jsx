import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Internships from "./pages/Internship"; 
import InternshipDetail from "./pages/InternshipDetail";
import Jobs from "./pages/Jobs";      
import Courses from "./pages/Courses"; 
import About from "./pages/About";     
import Contact from "./pages/Contact";
import MyApplications from "./pages/MyApplications";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/internship/:id" element={<InternshipDetail />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />      
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-applications" element={<MyApplications />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;