import buffer from 'buffer';
window.Buffer = buffer.Buffer;
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Portfolio from './components/Portfolio.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
