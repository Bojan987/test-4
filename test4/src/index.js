import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Flags } from './components/Flags';
import { Select } from './components/Select';
import './index.css';
import  {getRegionInfos,getAllInfos} from './services.js'

const App = ()=>{

const [region,setRegion] = useState('Europe')
const [allInfo,setAllInfo] = useState([])
const [countriesByRegion,setCountriesByRegion] = useState([])

useEffect(()=>{

  getRegionInfos(region).then(res=>{
    console.log(res)
    setCountriesByRegion(res.data)
  })

},[region])



useEffect(()=>{
  getAllInfos().then(res=>{
    // console.log(res.data)
    setAllInfo(res.data)
  })
},[])

useEffect(()=>{
  setAllInfo(countriesByRegion)
},[countriesByRegion])

  return <div> 
          {/* <p>Hello</p>   */}
          <Select setRegion={setRegion}/>
          <Flags allInfo={allInfo} region={region}/>

        </div>


}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


