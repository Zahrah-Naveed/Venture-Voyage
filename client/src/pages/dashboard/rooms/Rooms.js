import React from 'react'

const Rooms = ({setSelectedLink,link}) => {
    useEffect(()=>{
        setSelectedLink(link)
     },[])
  return (
    <div>Rooms</div>
  )
}

export default Rooms