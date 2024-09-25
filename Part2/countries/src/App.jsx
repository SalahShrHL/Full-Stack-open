import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Country from './components/Country'
import DisplayCountry from './components/DisplayCountry'



const App = () => {

  const [newSearch, setNewSearch] = useState('')
  const[countries, setCountries]= useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)


  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(response => {
        const countries = response.data
        setCountries(countries)
    })
  
  }
  ,[])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    setSelectedCountry(null) 
  } 


  return (
    <div>
          
    <div> 
      <Search newSearch={newSearch} handleSearchChange={handleSearchChange}/>
    </div>

    {selectedCountry ? <DisplayCountry country={selectedCountry}/> : <Country countries={countries} newSearch={newSearch} setSelectedCountry={setSelectedCountry}/>}
       

    </div>
  )
}

export default App;

