import React from 'react'
import Feed from './Feed'
import SideBar from './SideBar'
import './Content.css'

export default function Content({currentUser}) {

  
  return (
    <div className='content'>
        <div className='left-margin' />
        <Feed currentUser={currentUser} />
        <SideBar currentUser={currentUser} />
        <div className='right-margin' />
    </div>

  )
}
