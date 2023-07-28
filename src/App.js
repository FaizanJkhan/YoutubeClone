import React from 'react'
import Navbar from './Navbar';
import Card from './Card';
import {Data} from './Data'

let App=()=>{
return(
  <>
    <Navbar></Navbar>
    <div className='main'>
   {
    Data.map((el)=>{
      return<Card
      key={el.id}
      vidlink={el.vidlink}
      vidimg={el.vidimg}
      channelimg={el.channelimg}
      title={el.title}
      channelname={el.channelname}
      views={el.views}
      time={el.time}

      />
    })
   }

  </div>
  </>


)}

export default App;