import React from 'react'

export const Flags = ({allInfo,region})=>{

    const flagArr= allInfo.map(el=>el.flag )
    // console.log(flagArr);
    return (

            <div>
                
                {flagArr.map(el=><img src={el} alt='' className='zastave'></img>)}
            </div>
    )
}