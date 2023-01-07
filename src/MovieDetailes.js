import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { API } from "./global.js"
// import GradeIcon from '@mui/icons-material/Grade';

export function MovieDetailes() {
    const { id } = useParams();
    // const movie = movieList[id]
    // console.log(movieList, movie)
    // movie
    const [movie, setMovie] = useState({});
    useEffect(() => {
        fetch(`https://movie-backend-d328.onrender.com/movies/${id}`)
            .then((data) => data.json())
            .then((n) => setMovie(n));
    }, []);
    const navigate = useNavigate();
    const styles = {
        // Ternary Operator
        color: movie.rating > 8 ? "green" : "red",
        fontSize: "20px"
    };
    return <>
        <div>
            <iframe
                width="100%"
                height="700"
                src={movie.trailer}
                title="Ponniyin Selvan Trailer | #PS1 Tamil | Mani Ratnam | AR Rahman | Subaskaran | Madras Talkies | Lyca" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <div className="movie-details-container">
                <div className="movie-specs">
                    <h1 className="movie-name">{movie.name}
                    </h1>
                    <h3 style={styles} className="movie-rating">⭐{movie.rating}</h3>
                </div>
                <p className="movie-summary ">{movie.summary}</p>
                <Button variant="outline" onClick={() => navigate(-1)}>Back</Button>
            </div>
        </div>
    </>;
}
