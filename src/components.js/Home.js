import React from 'react'
import Countries from './Countries'
import TotalConfirmedCountries from './TotalConfirmedCountries'

const Home = ({setSearchResult,searchResult,totalCases,totalConfirmedCountries,getData,page,pagination,filterSearch,setSearchCountry,searchCountry}) => {
    return (
        
        <div className="Home" style={{padding:"40px"}}>
            <h1 style={{textAlign:"center"}}>COVID-19 STATS</h1>
            {
                totalCases ? (
                    <Countries
                        totalCases={totalCases}
                    />
                    
                ):(
                    <h1  style={{textAlign:"center"}}>No records!</h1>
                )
            }
            {
                totalConfirmedCountries.length ? (
                    <TotalConfirmedCountries
                        totalConfirmedCountries={totalConfirmedCountries}
                        getData={getData}
                        filterSearch={filterSearch}
                        pagination={pagination}
                        page={page}
                        filterSearch={filterSearch}
                        searchResult={searchResult}
                        setSearchResult={setSearchResult}
                        setSearchCountry={setSearchCountry}
                    />
                ):(
                    <p style={{textAlign:"center", padding:10}}>Please wait a while, loading countries...</p>
                )
            }
        </div>
    )
}

export default Home
