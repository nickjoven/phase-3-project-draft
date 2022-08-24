import { useState, useEffect } from "react";
import * as Tone from 'tone'

const PlayerProvider = ({ children }) => {
    const [player, setPlayer] = useState(null);
    useEffect(() => {
        const _player = new Tone.Players(
            {
                BD: '/trad_kick_03_C.wav',
                BD2: '/sub_kick_01_C.wav',
            },
            () => {
                console.log('uh', _player.get())
                console.log("buffers loaded");
                setPlayer(_player);
            }
        ).toDestination();
    }, []);

    return children({ player });
};

export default PlayerProvider;
