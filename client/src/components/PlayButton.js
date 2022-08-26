import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import './PlayButton.css'

const PlayButton = ({ playing, onClick }) => {

return (
    <div className='home-button'><img onClick={onClick} src={!playing ? "/icons8-play-50.png" : "/icons8-pause-50.png"}/>
</div>
  
)
}

export default PlayButton
