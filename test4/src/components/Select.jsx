import React from 'react'
// import { useState } from 'react'

export const Select =({setRegion})=>{
    const region = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
   const handleRegionChange = (e)=>{
        console.log(e.target.value)
        const {value} = e.target
        setRegion(value)
   }
    return (
            <div>
                <select onChange={handleRegionChange}>
                   <option selected="true" disabled>Izaberi region</option> 
    {region.map(el=><option key={el} value={el}>{el}</option>)}
                </select>
            </div>
    )
} 