import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <div>
            <h1 style={{textAlign:'center'}}>Oops! You seem to be lost.</h1>
            <p style={{textAlign:'center'}}>Here are some helpful links:</p>
            <Link to='/' style={{margin:'48%'}}>Home</Link>
        </div>
    </div>
  )
}

export default NotFound