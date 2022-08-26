import React from 'react'
import './DropdownMenu.css'
import users from '../data/users'

const DropdownMenu= () => {


return (

<div>
    <div class="dropdown">
  <input type="checkbox" id="dropdown" /> 

  <label class="dropdown__face" for="dropdown">
    <div class="dropdown__text"></div>

    <div class="dropdown__arrow"></div>
  </label>

  <ul class="dropdown__items">
    <li>Logout</li>
    <li></li>
    <li>😽</li>
    <li>😎</li>
    <li>🤗</li>
  </ul>
</div>

<svg>
  <filter id="goo">
    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
    <feBlend in="SourceGraphic" in2="goo" />
  </filter>
</svg>
</div>

)

}


export default DropdownMenu