import React, { useState } from 'react';
import { ColorBox } from "./ColorBox";

export function AddColor() {
    const [color, setcolor] = useState('');
    const styles = {
        backgroundColor: color,
    };
    const [colorList, setColorList] = useState(["yellow", "violet", "gray", "blue", "tomato", "black"]);
    return <>
        <input type="text" style={styles} placeholder="name" onChange={(event) => setcolor(event.target.value)} />
        <p>Colour: {color}</p>
        <button onClick={() => setColorList([...colorList, color])}>Add Colour</button>
        {colorList.map((n, i) => <ColorBox color={n} key={i} />)}
    </>;
}
