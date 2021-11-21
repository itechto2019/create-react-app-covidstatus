import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';


const CountryLink = ({confirmedCasesCountries}) => {
    const {id} = useParams();
    const region = confirmedCasesCountries.find(data => (data.uid).toString() === id)

    return (
        <div className="CountryLink" style={{display:"flex", justifyContent:"center"}}>
            {
                region && (
                    <Paper>
                        <Link style={{ textDecoration: "none", color: "#000" }} to={!`/Country/${id}` ? '/Error' : `/Country/${id}`}>
                            <h1 className="country-result-title">
                                {region.countryRegion}
                            </h1>
                        </Link>
                        <div className="results">
                            <p><b>Location: </b>{region.combinedKey}</p>
                            {region.provinceState === null ? '' : <p><b>Provice State: </b>{region.provinceState}</p>}
                            <p><b>Confirmed: </b>{region.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            <p><b>Deaths: </b>{region.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            {region.recovered === null ? <p><b>Confirmed: </b>Unknown</p> : <p><b>Confirmed: </b>{region.recovered}</p>}
                        </div>                            
                    </Paper>
                )                
            }
        </div>
    )
}

export default CountryLink
