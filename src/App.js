import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';
import animal from './Data/data.json';


function App() {
  
  const[countries, setCountries] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(()=>{
    console.log(animal)
  })
  useEffect(()=> {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res=>res.json())
      .then(data=>setCountries(data))
  }, [])

  const addCountry = (country)=>{
    const newCart = [...cart,country];
    setCart(newCart);
  }
  return (
    
    <div className="App">
      <h2>Total Countries:{countries.length}</h2>
      <h3>Country Added:{cart.length}</h3>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country=> <Country country={country} addCountry={addCountry}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
