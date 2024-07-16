import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Content from "./pages/Content";
import Avatar from "./pages/Avatar";
export default function App() {
  return (
    <div>
        <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Content />} />
        <Route path="/avatar" element={<Avatar/>}/>
      </Routes>
    </Router>
    </div>
  )
}
