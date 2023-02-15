import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Counter } from './Counter';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
// import StarBorderIcon from '@mui/icons-material/StarBorder';

export function Movies({ movie, id, deleteButton, EditButton }) {
    const [show, setShow] = useState(true);
    const styles = {
        // Ternary Operator
        color: movie.rating > 8 ? "green" : "red",
        fontSize: "16px"
    };
    const navigate = useNavigate()
    return <>
        <Card className="movie-container">
            <img className="movie-poster" src={movie.poster} alt={movie.name}></img>
            <CardContent>
                <div className="movie-specs">
                    <h1 className="movie-name">{movie.name}
                        <IconButton color="primary" onClick={() => setShow(!show)} aria-label="Expand more and less">
                            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                        <IconButton color="primary" onClick={() => navigate(`/movies/${id}`)} aria-label="movieDetails">
                            <InfoIcon />
                        </IconButton></h1>
                    <h3 style={styles} className="movie-rating">⭐{movie.rating}</h3>
                </div>
                {/* condition rendering */}
                {show ? <p className="movie-summary ">{movie.summary}</p> : null}
            </CardContent>
            <CardActions>
                <Counter />
                {deleteButton} {EditButton} 
            </CardActions>
        </Card>
    </>;
}
