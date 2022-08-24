import React, { useState, useEffect } from "react";
import * as Tone from 'tone'

const PlayerProvider = ({ children }) => {
    const [player, setPlayer] = useState(null);
    useEffect(() => {
        const player = new Tone.Players(
            {
                BD: "/kick.wav",
            },
            () => {
                console.log("buffers loaded");
                setPlayer(player);
            }
        ).toDestination();
    }, []);

    return children({ player });
};

export default PlayerProvider;
