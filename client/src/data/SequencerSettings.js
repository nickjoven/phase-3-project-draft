const sequencerSettings = {
    baseBPM: 60,
    stepsPerBar: 8,
    beatsPerBar: 4,
    barsPerSequence: 2,
    get totalSteps() { return this.stepsPerBar * this.barsPerSequence },
    get totalBeats() { return this.beatsPerBar * this.barsPerSequence },
    // totalSteps: stepsPerBar * barsPerSequence - this doesn't work because the object can't access itself unless you use *this* inside a function
    // in order for an object property to be accessible as the return value of a function you have to use get
}

export { sequencerSettings }