import React from 'react'
import Feed from './Feed'
import SideBar from './SideBar'
import './Content.css'

export default function Content() {





    
  return (
    <div className='content'>
        <div className='left-margin' />
        <Feed />
        <SideBar />
        <div className='right-margin' />
    </div>

  )
}
