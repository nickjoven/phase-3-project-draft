const NewSequenceForm = ({controlForm, sequenceObject}) => {
    return (
        <div className='new-sequence-form-container'>
            <form className='new-sequence-form'>
                <label>Save Sequence</label>
                <input name='title' value={sequenceObject.title} type='text' placeholder='title' onChange={controlForm} />
                <input name='image' value={sequenceObject.image} type='text' placeholder='image url' onChange={controlForm} />
            </form>

        </div>
    )
}

export default NewSequenceForm

// const emptySequence = {
//     title: null,
//     plays: 0,
//     image: '',
//     crusherValue: '',
//     limiterValue: '',
//     distortionValue: '',
//     stepInterval: '',
//     userId: null,
//     pattern: []
// }