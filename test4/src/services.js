import axios from 'axios'

export  const getRegionInfos = (region)=>{
    return axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
}

export  const getAllInfos = ()=>{
    return axios.get('https://restcountries.eu/rest/v2/all')
}