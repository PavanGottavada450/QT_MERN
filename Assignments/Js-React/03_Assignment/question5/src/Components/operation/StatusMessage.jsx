import React from 'react'
import "./StatusMessage.css"

function StatusMessage({status}) {
  return (
    <div>
      {status === "success" ? (
        <div className='div1'>Operation Successful</div>
      ) : status === "error" ? (
        <div className='div2'>Operation Failed</div>
      ) : (
        <div className='div3'>"Pending..."</div>
      )}
    </div>
  )
}

export default StatusMessage