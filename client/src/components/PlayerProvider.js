import { useState, useEffect } from "react";
import * as Tone from 'tone'

const PlayerProvider = ({ children }) => {
    const [player, setPlayer] = useState(null);
    const [crusherValue, setCrusherValue] = useState(16)
    const [limiterValue, setLimiterValue] = useState(-50)
    const [distortionValue, setDistortionValue] = useState(0)
     
    useEffect(() => {
        const _player = new Tone.Players(
            {
                BD: '/trad_kick_03_C.wav',
                BD2: '/sub_kick_01_C.wav',
                SN: '/CYCdh_ElecK03-Snr02.wav',
                CH: '/trebly-trap-hat-sample-d-sharp-key-58-16w.wav',
                OH: '/CYCdh_ElecK03-OpHat.wav',
                T1: '/CYCdh_ElecK03-Tom01.wav',
                T2: '/CYCdh_ElecK03-Tom02.wav',
                T3: '/CYCdh_ElecK03-Tom03.wav',
            },
            () => {
                console.log("buffers loaded");
                setPlayer(_player);
            }
            )
            const distortion = new Tone.Distortion(distortionValue)
            const crusher = new Tone.BitCrusher(crusherValue)
            const limiter = new Tone.Limiter(limiterValue)
            
            const fx = [distortion, crusher, limiter]
            
            const chainFunction = (...effects) => {
                _player.chain(...effects, Tone.Destination)
            }
        chainFunction(...fx)
    }, [distortionValue, crusherValue, limiterValue]);
    
    return children({ 
        player, 
        crusherValue,  
        setCrusherValue, 
        limiterValue,
        setLimiterValue,
        distortionValue,
        setDistortionValue
        
    }) 
};

export default PlayerProvider;
