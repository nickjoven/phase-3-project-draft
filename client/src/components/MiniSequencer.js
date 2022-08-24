import { useState, useEffect, useContext } from 'react'
import { sequencerSettings } from '../data/SequencerSettings'
import useStyles from '../hooks/useStyles'
import useTimer from '../hooks/useTimer'

const { baseBPM, stepsPerBar, beatsPerBar, barsPerSequence, totalSteps, totalBeats } = sequencerSettings 

const MiniSequencer = () => {
    const [BPM, setBPM] = useState(120)
    const [startTime, setStartTime] = useState(null)
    const [pastLapsedTime, setPastLapseTime] = useState(0)
    const [currentStepID, setCurrentStepID] = useState(null)
    const [getNotesAreaWidthInPixels] = useStyles(totalSteps) // hook 
    
    const notesAreaWidthInPixels = getNotesAreaWidthInPixels(totalSteps)
    const timePerSequence = baseBPM / BPM * 1000 * totalBeats
    const timePerStep = timePerSequence / totalSteps
    const isSequencePlaying = startTime !== null // sequence playing if starttime is not null 
    const playerTime = useTimer(isSequencePlaying)//  hoook that keeps track of time 
    const lapsedTime = isSequencePlaying ? Math.max(0, playerTime - startTime) : 0 // if seq iss playing, then lapsed time = the greater number between 0 and playerTime -startTime, if seq =! playing tehn lapsed time == 0 
    const totalLapsedTime = pastLapsedTime + lapsedTime // 

    useEffect(() => {
        if (isSequencePlaying) {
            setCurrentStepID(Math.floor(totalLapsedTime / timePerStep ) % totalSteps) // 
        } else {
            setCurrentStepID(null)
        }
    }, [isSequencePlaying, timePerStep, totalLapsedTime, totalSteps])

    function togglePlayback() {
        if (isSequencePlaying) {
            setPastLapseTime(l => l + performance.now() - startTime)
            setStartTime(null)
        } else {
            setStartTime(performance.now())
        }
    }




    

    return (

        <div className="MiniSequencer">
            <h1>Demo</h1>
        </div>
    )

}

export default MiniSequencer
















