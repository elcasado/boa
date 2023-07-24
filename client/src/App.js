import React from 'react';
import MultiPageForm from './components/MultiPageForm'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" exact element={<HomePage />} />
        <Route path="/" exact element={<MultiPageForm />} />
      </Routes>
    </div>
  );
}

export default App;