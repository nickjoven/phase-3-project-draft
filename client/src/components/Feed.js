import React, {useState} from 'react'
import users from '../data/users'
import './Feed.css'


// create user profile  
//display image for the {user} //
// click the follow button 
// split screene for the FEED that will include Latest sequences from people you know
// under image, it will show followers 

const Feed = ({}) => {

    return (
         <div className='feed'>
      <div className="clearfix">
        <div className="row">
            <div className="col-md-4 animated fadeIn">
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src='https://f4.bcbits.com/img/a4040590719_10.jpg'
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    Nicholas Joven
                  </h5>
                  <p className="card-text">
                    New York City 
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