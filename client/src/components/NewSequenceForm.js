import './NewSequence.css'
const NewSequenceForm = ({controlForm, sequenceObject}) => {
    return (
        <div className='new-sequence-form-container'>
            <form className='new-sequence-form'>
                <input name='title' className='input-sequence' value={sequenceObject.title} type='text' placeholder='title' onChange={controlForm} />
                <input className='input-img' name='image' value={sequenceObject.image} type='text' placeholder='image url' onChange={controlForm} />
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