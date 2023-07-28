import React from "react";

let Card=(props)=>{
    return(

        <>
   <div className="nature">

   <a href={props.vidlink} target="_blank" rel="noreferrer" >
    <img src={props.vidimg} alt="video" />
</a>
<div className="channel-info">
    <div className="channel-img">
        <img src={props.channelimg} alt="channel-img"/>
    </div>
    <div/>

<div className="channel-details">
    <h2
     className="channel-title">{props.title}</h2>
    <p className="channel-name">{props.channelname}</p>
    {props.views && <p><span>{props.views}</span>&middot;</p>} {/* Render views if 'views' is available */}
    {props.time && <p><span> {props.time}</span></p>} {/* Render time if 'time' is available */}
</div>

</div>
</div>

        
        </>

    )
}

export default Card;
