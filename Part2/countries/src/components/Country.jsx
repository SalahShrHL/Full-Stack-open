import DisplayCountry from "./DisplayCountry"

const Country = (props) => {

    const matchCountries= props.countries.filter(country => country.name.common.toLowerCase().includes(props.newSearch.toLowerCase()))
    if (props.newSearch === '') {
      return null 
    } else if(matchCountries.length>10){
      return(
        <div>
          Too many matches, specify another filter
        </div>
      )
    } else
    {
      if(matchCountries.length===1){
        return(
         <DisplayCountry country={matchCountries[0]}/>
        )
  
      }else{
        return(
          <div>
            {matchCountries
            .map(country => 
            <p key={country.name.common}>{country.name.common}
              <button onClick={()=>props.setSelectedCountry(country)}>show</button> 
            </p>)
            }
          </div>
        )
      }
  
  }
  
  }

  export default Country