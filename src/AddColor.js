import React, { useState } from 'react';
import { ColorBox } from "./ColorBox";
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
export function AddColor() {
    const [color, setcolor] = useState('');
    const styles = {
        backgroundColor: color,
        width: "300px",
    };
    const [colorList, setColorList] = useState(["yellow", "violet", "gray", "blue", "tomato", "black"]);
    return <>
        <Box sx={{marginTop:"100px"}}>
        {/* <input type="text" style={styles} placeholder="name" onChange={(event) => setcolor(event.target.value)} /> */}
        <TextField style={styles} id="outlined-basic" label="Enter-color" variant="outlined" onChange={(event) => setcolor(event.target.value)} />
        <p>Colour: {color}</p>
        <button onClick={() => setColorList([...colorList, color])}>Add Colour</button>
        </Box>
        {colorList.map((n, i) => <ColorBox color={n} key={i} />)}
    </>;
}
