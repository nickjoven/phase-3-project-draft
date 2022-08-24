import { useState, useEffect } from "react";
import * as Tone from 'tone'

const PlayerProvider = ({ children }) => {
    const [player, setPlayer] = useState(null);
    useEffect(() => {
        const _player = new Tone.Players(
            {
                BD: '/kick.wav',
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
