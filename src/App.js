import React from 'react';
import './App.css';
import AuthProvider from './components/auth/AuthProvider';
import Profile from './components/auth/Profile';

function App() {
  return (
      <AuthProvider>
         <Profile />
      </AuthProvider>
  );
}

export default App;
