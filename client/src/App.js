import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';

// imports for components
import Nav from './components/Nav';
import Footer from './components/Footer';

// imports for pages 
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Profile from './pages/Profile';
import AddPost from './pages/NewPost'
import Auth from './utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const isLoggedIn = Auth.loggedIn();


function App() {


  return (
    <ApolloProvider client={client}>
      <Router>

        <div>
          <Nav />

          {/* begin routes to swap out pages */}
          <Routes>

          {/* If user is not logged int route to home, else navigate to blog */}
            <Route 
            path="/"
            element={ !isLoggedIn  
              ? <HomePage />
              : <Navigate to="/blog" replace />}
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
          element={ isLoggedIn  
            ? <Profile />
            : <Navigate to="/login" replace />}
          />

          <Route
          path="/blog"
          element={ isLoggedIn  
            ? <Blog />
            : <Navigate to="/login" replace />}
          />

          <Route
          path="/blogpost/:postId"
          element={ isLoggedIn
          ? <BlogPost />
          : <Navigate to="/login" replace /> } 
          />

      {/* if user is logged in route to add post, else re-route to login */}
          <Route 
            path="/newpost"
            element={ isLoggedIn  
              ? <AddPost />
              : <Navigate to="/login" replace />}
          />

          </Routes>
        
          

        </div>
        
        <Footer />
      </Router>
      </ApolloProvider>
  );
}

export default App;