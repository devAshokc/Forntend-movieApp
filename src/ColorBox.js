import React from 'react';


export function ColorBox({ color }) {
    const styles = {
        display: "flex",
        flexFlow: "column",
        gap: "20px",
        margin: "0px auto",
        height: "40px",
        width: "350px",
        background: color,
        marginTop: "10px"
    };
    return <>
        <div style={styles}></div>
    </>;
}
