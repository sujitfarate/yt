import React, { useContext } from 'react'
import LeftNave from './LeftNave'
import { context } from '../context/contextApi'
import Videocard from "./Videocard"

const Feed = () => {
  const {loading,searchResults}=useContext(context)
  console.log("searchResults",searchResults)
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>

     <LeftNave/>
     <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 '>

{!loading&&(searchResults&&searchResults?.map((item)=>{
  if(item.type!=="video") return false
  return (<Videocard key={item?.video?.videoId} video={item?.video}/>)
}))}
</div>

     </div>
    </div>
  )
}

export default Feed