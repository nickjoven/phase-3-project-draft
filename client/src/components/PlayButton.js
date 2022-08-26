import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import './PlayButton.css'

const PlayButton = ({ playing, onClick }) => {

return (
<div className='home-button' onClick={onClick}>{playing? <img src="/icons8-play-50.png" /> : <img src="/icons8-pause-50.png" />}
</div>
  
)
}

export default PlayButton
