import { useState, useEffect } from 'react'
import Grid from './Grid';
import Bar from './SequencerBar'
import PlayButton from './PlayButton';
import './SequenceEditor.css'

const steps = 16;
const initialCellState = { triggered: false, activated: false };

const SequenceEditor = ({ 
    player, 
    lineMap,  
    setCrusherValue, 
    crusherValue,
    limiterValue,
    setLimiterValue,
    distortionValue,
    setDistortionValue 
}) => {
    player.volume.value = -1 * lineMap.length
    const initialState = new Array(lineMap.length).fill().map(() => Array(16).fill(initialCellState))
    const [sequence, setSequence] = useState(initialState);
    const [playing, setPlaying] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);
    const [showCrush, setShowCrush] = useState(false)
    const [showLimiter, setShowLimiter] = useState(false)
    const [showDistortion, setShowDistortion] = useState(false)
    const [checkedD, setCheckedD] = useState(false)
    const [checkedC, setCheckedC] = useState(false)
    const [checkedL, setCheckedL] = useState(false)
    const [cs, setCs] = useState(0)
    

    const toggleStep = (line, step) => {
        const sequenceCopy = [...sequence];
        const { triggered, activated } = sequenceCopy[line][step];
        sequenceCopy[line][step] = { triggered, activated: !activated };
        console.log("toggled");
        setSequence(sequenceCopy);
    };

    const nextStep = time => {
        for (let i = 0; i < sequence.length; i++) {
            for (let j = 0; j < sequence[i].length; j++) {
                const { triggered, activated } = sequence[i][j];
                sequence[i][j] = { activated, triggered: j === time };
                if (triggered && activated) {
                    player.player(lineMap[i]).start();
                }
            }
        }
        setSequence(sequence);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (playing) {
                setCurrentStep((currentStep + 1) % steps);
                nextStep(currentStep)
            }
        }, 166);
        return () => {
            clearTimeout(timer);
        };
    }, [currentStep, playing]);

    const handleClickCrush = () => {
        setShowCrush(!showCrush)
    }

    const handleClickLimiter = () => {
        setShowLimiter(!showLimiter)
    }

    const handleClickDistortion = () => {
        setShowDistortion(!showDistortion)
    }

    const handleCheckCrush = () => {
        if (!checkedC) {
            setCs(3)
            setCrusherValue(9 - cs)
        } else {
            setCs(0)
            setCrusherValue(16)
        }
        setCheckedC(!checkedC)
    }

    const handleCheckLimiter = () => {
        if (!checkedL) {
            setLimiterValue(-20)
        } else setLimiterValue(0)
        setCheckedL(!checkedL)
    }

    const handleCheckDistortion = () => {
        if (!checkedD) {
            setDistortionValue(.5)
        } else setDistortionValue(0)
        setCheckedD(!checkedD)
    }

    const handleSlideDistortion = (e) => {
        setDistortionValue(e.target.value)
        setCheckedD(true)
    }

    const handleSlideCrusher = (e) => {
        setCs(e.target.value)
        setCrusherValue(9 - cs)
        setCheckedC(true)
    }

    const handleSlideLimiter = (e) => {
        setLimiterValue(0 - e.target.value)
        setCheckedL(true)
    }

    
    return (
        <>
            <Bar>
                <PlayButton playing={playing} onClick={() => setPlaying(!playing)} />
                <button onClick={handleClickDistortion}>Distortion</button>
                {showDistortion
                ? 
                <>
                    <input type="range" step=".10" min="0" max="1" value={distortionValue} className="slider" onChange={handleSlideDistortion} />
                    <input type="checkbox" checked={checkedD} value={checkedD} onChange={handleCheckDistortion} /> 
                </>
                : <></>}
                <button onClick={handleClickCrush}>Crusher</button>
                {showCrush
                ? 
                <>
                    <input type="range" step=".6" min="0" max="6" value={cs} className="slider" onChange={handleSlideCrusher} />
                    <input type="checkbox" checked={checkedC} value={checkedC} onChange={handleCheckCrush} /> 
                </>
                : <></>}
                <button onClick={handleClickLimiter}>Limiter</button>
                {showLimiter
                ?
                <>
                    <input type="range" step="10" min="0" max="100" value={Math.abs(limiterValue)} className="slider" onChange={handleSlideLimiter} />
                    <input type="checkbox" checked={checkedL} value={checkedL} onChange={handleCheckLimiter} />
                </>
                : <></>}
            </Bar>
            <Grid sequence={sequence} toggleStep={toggleStep} steps={steps} lineMap={lineMap} />
        </>
    );
};

export default SequenceEditor;