import { useState, useEffect } from 'react'
import Grid from './Grid';
import Bar from './SequencerBar'
import PlayButton from './PlayButton';
import './SequenceEditor.css'
import NewSequenceForm from './NewSequenceForm';

const steps = 16;
const initialCellState = { triggered: false, activated: false };

// the db object looks different due to nesting
const emptySequence = {
    title: '',
    plays: 0,
    image: '',
    distortionValue: '',
    crusherValue: '',
    limiterValue: '',
    stepInterval: '',
    userId: null,
    pattern: []
}

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
    const [sequenceObject, setSequenceObject] = useState(emptySequence)
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
    const [visualBpm, setVisualBpm] = useState(120)
    const [stepInterval, setStepInterval] = useState(120)
    
    
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
        }, stepInterval);
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
    
    const controlForm = (e) => {
        setSequenceObject({
            ...sequenceObject,
            [e.target.name]: e.target.value
        })
    }

    const handleTempoClick = (e) => {
        e.preventDefault()
        setStepInterval(15000 / visualBpm)
    }

    const handleSaveSequence = async () => {
        let passMe = {
            title: sequenceObject.title,
            plays: 0,
            image: sequenceObject.image,
            settings: {
                distortion_value: distortionValue,
                crusher_value: crusherValue,
                limiter_value: limiterValue,
                step_interval: stepInterval
            },
            user_id: 1,
            pattern: sequence,
        }
        console.log(passMe)
        let req = await fetch('http://localhost:3300/sequences', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(passMe)
        })
        let res = await req.json()
        console.log('you did it', res)
    }
    
    
    return (
        <>
            <NewSequenceForm controlForm={controlForm} sequenceObject={sequenceObject} />
            <button onClick={handleSaveSequence}>Save to Database</button>
            <Bar>
                <PlayButton playing={playing} onClick={() => setPlaying(!playing)} />
                <form onSubmit={handleTempoClick}>
                    <input type='number'value={visualBpm} placeholder='bpm' min='15' max='240' step='1' onChange={(e) => setVisualBpm(e.target.value)} />
                    <button type='submit'>Update Tempo</button>
                </form>
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