import React from 'react';
import { Paper } from '@mui/material';
import { useHistory } from 'react-router';


const Country = ({getCountryStatus}) => {
    const goBack = useHistory();
    return (
        <div>
            {
                getCountryStatus &&  (
                    <Paper key={!getCountryStatus.uid ? goBack.push('/Error') : getCountryStatus.uid} elevation={20}>
                        <h1 className="country-result-title">
                            {!getCountryStatus.countryRegion ? goBack.push('/Error'):getCountryStatus.countryRegion}
                        </h1>
                        <div className="results">
                            <p><b>Location: </b>{getCountryStatus.combinedKey}</p>
                            {getCountryStatus.provinceState === null ? '' : <p><b>Provice State: </b>{getCountryStatus.provinceState}</p>}
                            <p><b>Confirmed: </b>{!getCountryStatus.confirmed ? goBack.push('/Error') : getCountryStatus.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            <p><b>Deaths: </b>{!getCountryStatus.deaths ? goBack.push('/Error') : getCountryStatus.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            {getCountryStatus.recovered === null ? <p><b>Confirmed: </b>Unknown</p> : <p><b>Confirmed: </b>{getCountryStatus.recovered}</p>}
                        </div>                            
                    </Paper>
                )
            }
        </div>
    )
}

export default Country
