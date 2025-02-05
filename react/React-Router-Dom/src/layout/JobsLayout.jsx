import React from 'react'
import { Outlet } from 'react-router-dom'

function JobsLayout() {
  return (
    <div>
        <h2>Job Openings</h2>
        <p>List of current job opening in out company</p>
        <Outlet/>
    </div>
  )
}

export default JobsLayout