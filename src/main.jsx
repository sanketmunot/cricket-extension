import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const cricketScoresDiv = document.createElement('div');
cricketScoresDiv.id = 'cricketScores';
document.body.appendChild(cricketScoresDiv);

ReactDOM.createRoot(document.getElementById('cricketScores')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
