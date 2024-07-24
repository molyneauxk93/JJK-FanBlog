import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import BlogPosts from './components/BlogPosts';

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Profile from './pages/Profile';



function App() {

  return (
      <Router>

        <div>
          <Nav />

          {/* begin routes to swap out pages */}
          <Routes>

            <Route 
            path="/"
            element={<HomePage />}
          />
          
          <Route
          path="/login"
          element={<Login />}
          />

          <Route
          path="/signup"
          element={<SignUp />}
          />

          <Route
          path="/profile"
          element={<Profile />} 
          />

          <Route
          path="/blog"
          element={<Blog />}
          />

          <Route
          path="/blogpost"
          element={<BlogPost />} 
          />

          </Routes>
        
          

        </div>
        
        <Footer />
      </Router>
  );
}

export default App;