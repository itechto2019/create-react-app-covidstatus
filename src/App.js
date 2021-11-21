import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components.js/Nav';
import Home from './components.js/Home';
import About from './components.js/About';
import Country from './components.js/Country';
import Error from './components.js/Error';
import api from './api/server';
import './index.css'
import { useHistory } from 'react-router';

const App = () => {
  const [totalCases, setTotalCases] = useState();
  const [totalConfirmedCountries, setTotalConfirmedCountries] = useState([]);
  const [getCountryStatus, SetCountryStatus] = useState([]);
  const [searchCountry, setSearchCountry] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(0)

  const fetchTotalCases = async () => {
    try {
      const response = await api.get();
      setTotalCases(response.data); 
    } catch (error) {
      console.log(error)
    }
  }
  const fetchTotalConfirmedCountries = async () => {
    try {
      const response = await api.get('/confirmed');
      setTotalConfirmedCountries(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTotalCases();
    fetchTotalConfirmedCountries();
  }, [])
  function pagination(pagenum){
    if(page < 0){
      setPage(0)
    }else{
      setPage(pagenum);
    }
  }
  const pushBack = useHistory();

  const getData = (data) => {
    if(!data){
      pushBack.push('/')
    }else{
      SetCountryStatus(data);
    }
  }

  const filterSearch = async ()=>{
    setSearchResult(searchCountry)
    console.log(searchCountry)
    if(searchCountry !== ""){
      const search = totalConfirmedCountries.filter((find) => {
        return Object.values(find)
        .join('')
        .toLowerCase()
        .includes(searchCountry);
    });
      setSearchResult(search);

    }else{
      setSearchResult(totalConfirmedCountries);
    }
  }


  return (
    <div className="App">
      <Nav
        fetchTotalCases={fetchTotalCases}
      />
      <Switch>
        <Route exact path="/">
          <Home
            totalCases={totalCases}
            totalConfirmedCountries={totalConfirmedCountries}
            getData={getData}
            filterSearch={filterSearch}
            loaded={loaded}
            setLoaded={setLoaded}
            pagination={pagination}
            searchResult={searchResult}
            page={page}
            setPage={setPage}
            setSearchResult={setSearchResult}
            setSearchCountry={setSearchCountry}
          />
        </Route>
        <Route exact path="/About" component={About}>
          <About />
        </Route>
        <Route exact path='/Country/:country' component={Country}>
          <Country
            getCountryStatus={getCountryStatus}
          />
        </Route>
        <Route path="*" component={Error}>
          <Error />
        </Route>
      </Switch>
    </div>
  )
}

export default App
