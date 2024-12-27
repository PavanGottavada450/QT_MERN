import React from 'react'
import "./Profile.css"
import { Link, Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div className='container-fluid shadow' style={{height:"500px"}}>
        <div className="row h-100">
          <div className=" links h-100 col-3 d-flex align-items-center flex-column justify-content-evenly ">
              <div>
                <Link to="details"> Details</Link>
              </div>
              <div>
              <Link to="orders"> Orders</Link>
              </div>
              <div>
              <Link to="wishlist"> Wishlist</Link>
              </div>
              <div>
              <Link to="help"> Help and ContactUs</Link>
              </div>
              <div>
              <Link to="changePassword"> Change Password and Reset</Link>
              </div>
          </div>
          <div className="col-9">
            <Outlet />   
          </div>
        </div>
    </div>
  )
}

export default Profile