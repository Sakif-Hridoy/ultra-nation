import React from 'react';

const Country = (props) => {
    // console.log(props.country,props.addCountry)
    const addCountry = props.addCountry;
    const flagStyle = {height:'50px'}
    return (
        <div>
            <h3>This is: {props.country.name}</h3>
            <img style={flagStyle} src={props.country.flag} alt=""/>
            <h4>Capital: {props.country.capital}</h4>
            <h5>Population:{props.country.population}</h5>
            <button onClick={()=>addCountry(props.country)}>Add Country</button>
            <br/>
            

        </div>
    );
};

export default Country;