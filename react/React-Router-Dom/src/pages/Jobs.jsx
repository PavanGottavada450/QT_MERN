import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Jobs() {

    const jobsData = useLoaderData();

  return (
    <div>
        {jobsData.map((job) => {
            return <Link> 
                <h4>{job.title}</h4>
                <p>{job.location}</p>
            </Link>
        })}
    </div>
  )
}

export default Jobs

export const jobsLoader = async ()=> {
    const res = await fetch("http://localhost:1212/jobs");
    return res.json();
}