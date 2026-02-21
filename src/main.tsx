import "./task-1";
import "./task-2";
import "./task-3";
import "./task-4";
import "./task-5";
import "./task-6";
import "./task-7";
import "./task-8";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
