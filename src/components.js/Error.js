import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h1>
                Page not found!
            </h1>
            <p>
                <Link to="/" style={{textDecoration:"none", color:"#000"}}>Go to Home</Link> 
            </p>
        </div>
    )
}

export default Error
