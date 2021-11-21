import { Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="About"  style={{display:"flex", justifyContent:"center", padding:"20px", width:"100%"}}>
            <Paper  style={{textAlign:"center", padding:"20px"}}>
                <h1 style={{padding:"10px"}}>About CovidStats</h1>
                <div className="about-corona">
                    <p style={{textAlign:"justify",padding:"10px"}}>
                        Coronavirus disease (COVID-19) is an infectious disease caused<br/> 
                        by the SARS-CoV-2 virus. Most people who fall sick with COVID-19<br/>
                        will experience mild to moderate symptoms and recover without special<br/>
                        treatment. However, some will become seriously ill and require medical<br/>
                        attention.<br/>
                        <br/>
                        How it spreads?
                        The virus can spread from an infected person’s mouth or nose in small<br/>
                        liquid particles when they cough, sneeze, speak, sing or breathe.<br/> 
                        These particles range from larger respiratory droplets to smaller aerosols.<br/>
                        You can be infected by breathing in the virus if you are near someone who<br/> 
                        has COVID-19, or by touching a contaminated surface and then<br/>
                        your eyes, nose or mouth. The virus spreads more easily indoors<br/>
                        and in crowded settings.
                        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwirzan8uqj0AhW1lFYBHQFHDB4QFnoECHsQAQ&url=https%3A%2F%2Fwww.who.int%2Fhealth-topics%2Fcoronavirus&usg=AOvVaw3VDAlU6UyNqVdsdqVfwV2E" style={{textDecoration:"none"}}>&nbsp;Read more...</a>
                    </p>
                </div>
                <h1 style={{padding:"10px"}}>About API</h1>
                <p>Thanks to API</p>
                <a href="https://github.com/mathdroid/covid-19-api" style={{textDecoration:"none"}}>Visit api producer</a>

                <div>
                    <h1 style={{padding:"10px"}}>About Author</h1>
                    <p>Developed & Design by Christian Rapsing</p>
                </div>
            </Paper>
        </div>
    )
}

export default About
