import React, { useState, useEffect } from 'react';
import { Movies } from "./Movies";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { API } from "./global.js"

export function MovieList() {
    const navigate = useNavigate();
    const [movieList, setMovieList] = useState([])
    //step-1
    const getMovies = () => {
        fetch(`https://movie-backend-d328.onrender.com/movies`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((msg1) => setMovieList(msg1))
        // .then((msg) => console.log(msg))
    }
    //step-2
    useEffect(() => getMovies(), [])
    //step-3
    const deleteMovie = (id) => {
        console.log("deleting....", id)
        fetch(`https://movie-backend-d328.onrender.com/movies/${id}`, {
            method: "DELETE",
        })
            .then((data) => data.json())
            .then(() => getMovies())
    }
    return <>
        <div className="movie-list-container">
            {movieList.map((n, i) =>
                <Movies
                    movie={n}
                    key={n._id}
                    id={n.id}
                    deleteButton={<IconButton color="error" onClick={() => deleteMovie(n._id)} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>}
                    EditButton={<IconButton color="secondary" onClick={() => navigate(`/movies/edit/${n.id}`)} aria-label="delete">
                        <EditIcon />
                    </IconButton>} />)}
        </div>
    </>;
}

