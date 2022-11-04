import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
export function Counter() {
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);
    const likedButton = () => { setLike(like + 1); };
    const disLikedButton = function () { setDisLike(disLike + 1); };
    return <>
        <div className="counter-container">
            <IconButton color="primary" onClick={likedButton} aria-label="likeButton">
                <Badge badgeContent={like} color="primary">
                    <ThumbUpIcon />
                </Badge>
            </IconButton>
            <IconButton color="error" onClick={disLikedButton} aria-label="likeButton">
                <Badge badgeContent={disLike} color="error">
                    <ThumbDownIcon />
                </Badge>
            </IconButton>
        </div>
    </>;
}
