import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from './NotFound';
import { Home } from './Home';
import { Addmovies } from './Addmovies';
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { MovieDetailes } from './MovieDetailes';
import { BasicForms } from './BasicForms';
import { EditMovie } from './EditMovie';


function App() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div className="home-sd">
      <ThemeProvider theme={darkTheme}>
        <Paper sx={{ minHeight: "100vh",padding:"20px" }} elevation={1} >
          <AppBar sx={{ position: "fixed" }} className="headElement">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>HOME</Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>MOVIES </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>ADD_MOVIE</Button>
              <Button color="inherit" onClick={() => navigate("/color-game")}>COLOR_GAME</Button>
              <Button color="inherit"
                sx={{ marginLeft: "auto" }}
                endIcon={mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                onClick={() => setMode(mode === 'dark' ? 'light' : "dark")} >
                {mode === 'light' ? 'dark' : "light"} Mode</Button>
            </Toolbar>
          </AppBar>
          <section className="Container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<MovieList />} />
              <Route path="/films" element={<Navigate replace to="/movies" />} />
              <Route path="/movies/add" element={<Addmovies />} />
              <Route path="/movies/:id" element={<MovieDetailes />} />
              <Route path="/movies/edit/:id" element={<EditMovie />} />
              <Route path="/color-game" element={<AddColor />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/basic-form" element={<BasicForms />} />
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
          </section>
        </Paper>
      </ThemeProvider>
      <br></br>
    </div>
  );
}
export default App;