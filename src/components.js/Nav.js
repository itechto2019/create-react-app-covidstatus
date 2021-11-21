import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
const Nav = ({fetchTotalCases}) => {
    const restrict = useHistory();

  const back = ()=>{
    restrict.push('/'); 
  }
    return (
        <nav className="nav"
            style={{display:"flex"}}
        >
            <div className="PageLink">
                <Link className="homeLink" to="/">CovidStat</Link>
            </div>
            <div className="navbar-collapse">
                <ul className="navbar">
                    <li className="nav-item" >
                        <Link to="/" className="nav-link" onClick={()=>fetchTotalCases()}>Home</Link>
                    </li>                    
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
