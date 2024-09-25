import Weather from './Weather'

const DisplayCountry=({country})=>(
    <div>
          <h1>{country.name.common}</h1>
          <p>capital {country.capital[0]}</p>
          <p>area {country.area}</p>
          <h2>languages</h2>
          <ul>
            {Object.values(country.languages).map((language, index) => 
              <li key={index}>{language}</li>
            )}
          </ul>
          <img src={country.flags.png} alt="flag" ></img>
            <Weather capital={country.capital[0]}/>
          
    </div>
  
  )

export default DisplayCountry   