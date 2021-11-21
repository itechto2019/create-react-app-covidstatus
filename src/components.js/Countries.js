import { Paper, Card } from '@mui/material'
import React from 'react'

const Countries = ({totalCases}) => {
    function totalCasesConfirmed() {
        return totalCases.confirmed.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function totalCasesDeaths() {
        return totalCases.deaths.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div className="Countries" style={{display:"flex",justifyContent:"center"}}>
            {
                totalCases && (
                    <div><img src={totalCases.image} width="100%" alt="Loading image" /></div>
                )
                
            }
            {
                totalCases && (
                    <Paper className="country-result" elevation={10}>
                            <h1 className="country-result-title">GLOBAL CASES</h1>
                            <div className="results">
                                <p><b>Cases:</b> {totalCasesConfirmed()}</p>
                                <p><b>Deaths:</b> {totalCasesDeaths()}</p>
                                <p><b>Recovered:</b> {totalCases.recovered.value == 0 ? 'Unknown': totalCases.recovered.value}</p>
                                <p><b>Last update: </b>{totalCases.lastUpdate}</p>
                            </div>                   
                    </Paper>                
                )
            }
        </div>
    )
}

export default Countries
