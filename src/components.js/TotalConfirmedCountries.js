import React from 'react'
import { Link } from 'react-router-dom';
import { Paper, TextField, Button } from '@mui/material';

const TotalConfirmedCountries = ({setSearchCountry,totalConfirmedCountries,page,pagination,getData,filterSearch}) => {
    return (
        //<Link style={{textDecoration:"none",color:"#000"}} to={`/Country/${confirmedCasesCountries.countryRegion}`}>{confirmedCasesCountries.countryRegion}, {confirmedCasesCountries.iso2}</Link>
        <div style={{display:"flex", marginTop:20}}>
            
            <div className="countries-confirmed">
                <div className="pagination" style={{display:"flex", width:"100%", padding:"10px",justifyContent:"flex-end"}}>
                    <form style={{display:"flex"}} onSubmit={(e)=>e.preventDefault()}>
                        <TextField 
                            style={{margin:"5px"}}
                            variant="outlined"
                            type="search"
                            label="search"
                            onChange={(e)=>setSearchCountry(e.target.value)}
                        />                            

                        <Button type="submit"
                        style={{margin:"5px"}}
                        >Search</Button>
                    </form>
                    
                </div>
                {
                    totalConfirmedCountries.slice(page,21+page).map(confirmedCasesCountries=>(
                        <Paper key={confirmedCasesCountries.uid} elevation={20}>
                            <Link style={{ textDecoration: "none", color: "#000" }} to={`/Country/${confirmedCasesCountries.uid}`}  onClick={()=>getData(confirmedCasesCountries)}>
                                <h1 className="country-result-title">
                                    {confirmedCasesCountries.countryRegion}
                                </h1>
                            </Link>
                            <div className="results">
                                <p><b>Location: </b>{confirmedCasesCountries.combinedKey}</p>
                                {confirmedCasesCountries.provinceState === null ? '' : <p><b>Provice State: </b>{confirmedCasesCountries.provinceState}</p>}
                                <p><b>Confirmed: </b>{confirmedCasesCountries.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                <p><b>Deaths: </b>{confirmedCasesCountries.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                {confirmedCasesCountries.recovered === null ? <p><b>Confirmed: </b>Unknown</p> : <p><b>Confirmed: </b>{confirmedCasesCountries.recovered}</p>}
                            </div>   
                        </Paper>
                    )
                )}
                <div style={{display:"flex", width:"100%"}}>
                    <ul style={{display:"flex", alignItems:"center",width:"100%", listStyle:"none",justifyContent:"flex-end"}}>
                        <li style={{padding:"10px"}}><Link to="/" style={{padding:"10px", textDecoration:"none", color:"#000", backgroundColor:"#EEEEEE", borderRadius:"10px"}} onClick={()=>pagination(page < 21 ? null: page - 21)}>Prev</Link></li>
                        <li style={{padding:"10px"}}><Link to="/" style={{padding:"10px", textDecoration:"none", color:"#000", backgroundColor:"#EEEEEE", borderRadius:"10px"}} onClick={()=>pagination(page + 21)}>Next</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default TotalConfirmedCountries
