import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { NotesContext } from './hooks/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotesContext.Provider value={{notes:[]}}>
      <App />
    </NotesContext.Provider>
    
  </React.StrictMode>
);
