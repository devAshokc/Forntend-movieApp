import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { API } from "./global.js"

const movieValidationSchema = yup.object({
    name: yup
        .string()
        .required("Why not fill this name😅")
        .min(1, "need a longer name🤔"),
    poster: yup
        .string()
        .required("Why not fill this poster😅")
        .min(4, "need a longer poster🤔"),
    rating: yup
        .number()
        .required("Why not fill this rating😅")
        .min(0, "need a bigger rating🤔").max(10),
    summary: yup
        .string()
        .required("Why not fill this summary😅")
        .min(20, "need a longer summary🤔"),
    trailer: yup
        .string()
        .required("Why not fill this trailer😅")
        .min(4, "need a longer trailer🤔")
})
export function EditMovie() {
  const { id } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        fetch(`${API}/movies/${id}`)
            .then((data) => data.json())
            .then((n) => setMovie(n));
    }, [id]);
    return movie ? <EditMovieFrom movie={movie}/>: 'Loading...'
  }
 export function EditMovieFrom({movie}){
    const { handleSubmit, values, handleChange, touched, handleBlur, errors } = useFormik({
        initialValues: {
            name: movie.name,
            poster:movie.poster,
            rating:movie.rating,
            summary: movie.summary,
            trailer: movie.trailer
        },
        validationSchema: movieValidationSchema,
        onSubmit: (updateMovie) => {
            console.log('onSubmit', updateMovie)
            editMovie(updateMovie)
        }
    })
    const navigate = useNavigate()
    const editMovie = (updateMovie) => {
        fetch(`${API}/movies/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updateMovie),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(() => navigate('/movies'))
            .catch((n) => console.log('error occurred' + n))
    };
    return <>
        <Box onSubmit={handleSubmit} className="form" component="form" sx={{
          display:"grid",
          minHeight:"100vh",
          gap: 2,
          placeContent:"center"
        }} >
            <TextField
             sx = {{width: "360px"}} 
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name ? errors.name : null}
                label="Name" variant="outlined" />


            <TextField
                name="poster"
                value={values.poster}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.poster && errors.poster}
                helperText={touched.poster && errors.poster ? errors.poster : null}
                label="Poster" variant="outlined" />

            <TextField
                name="rating"
                value={values.rating}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.rating && errors.rating}
                helperText={touched.rating && errors.rating ? errors.rating : null}
                label="Rating" variant="outlined" />

            <TextField
                name="summary"
                value={values.summary}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.summary && errors.summary}
                helperText={touched.summary && errors.summary ? errors.summary : null}
                label="Summary" variant="outlined" />
            <TextField
                name="trailer"
                value={values.trailer}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.trailer && errors.trailer}
                helperText={touched.trailer && errors.trailer ? errors.trailer : null}
                label="Trailer" variant="outlined" />
            <Button color='success' type="Submit" variant="contained">Save</Button>
        </Box>
    </>;
}

