import React, { useState } from 'react';
import ShowPersonProfile from './components/ShowPersonProfile';
import { Button, CssBaseline } from '@mui/material';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = `${newTheme}-theme`;
  };

  return (
    <div className="App">
      <CssBaseline />
      <Button onClick={toggleTheme} variant="contained">
        Toggle Theme
      </Button>
      <ShowPersonProfile />
    </div>
  );
}

export default App;
