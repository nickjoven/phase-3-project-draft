import React, {useState, useEffect} from 'react'
import users from '../data/users'
import './Feed.css'


// create user profile  
//display image for the {user} //
// click the follow button 
// split screene for the FEED that will include Latest sequences from people you know
// under image, it will show followers 

const Feed = ({currentUser}) => {

  const { id, username, email, image, location } = currentUser

    return (
         <div className='feed'>
      <div className="clearfix">
        <div className="row">
            <div className="col-md-4 animated fadeIn">
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={image ? image : 'https://cdn.dribbble.com/users/300756/screenshots/2063926/media/56799ac93b5c7d59aad7c24ff55aa311.gif'}
                      className="card-img-top"
                      alt={username}
                    />
                  </div>
                  <h5 className="card-title">
                    {username}
                  </h5>
                  <p className="card-text">
                    {location}
                    <br />
                    <span className="phone">420 Followers</span>
                  </p>
                  <button
                    className="btn btn-light btn-block w-50 mx-auto"
                  >  Follow
                  </button>
                </div>
              </div>
            </div>
        </div>
        <section>
            <div className='recent-upload'>
                Recently Uploaded
            </div>
        </section>
        

      </div> 
    </div>
    )
}

export default Feed