import { useState } from 'react'
import data from './data/data.json'
import Header from './components/header'
import './App.scss'

function App() {
  const[searchCountry, setCountry]= useState<string>("")

 const filterCountry=data.filter((coun)=>
  coun.name.toLowerCase().includes(searchCountry.toLocaleLowerCase())
 );
  return (
    <>

      <Header />
      <div className="entire">
        
        <input type="text" className='getting' value={searchCountry} onChange={(e)=>{setCountry(e.target.value)}} placeholder='search country' />
       
        <div className="container">
          {
            filterCountry && filterCountry.map((data, index) => {
              return (

                <div key={index} className='data'>
                  <a href="" className='showmore' target='_blank' key={index}>
                    <img src={data.flags.svg} alt="" width='100%' height='30%'/>
                    <h1 className="named">{data.name}</h1>
                    <p>population: {data.population}</p>
                    <p>Region: {data.region}</p>
                    <p>Capital: {data.capital}</p>
                    <p>{data.nativeName}</p>
                    <p>area:{data.area}</p>
                    </a>
                </div>
            
        )
        })
       }
      </div>
    </div >
    </>
  )
}

export default App
