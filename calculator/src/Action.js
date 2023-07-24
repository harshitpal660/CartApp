import React from "react";

const Action=(props)=>{
    return(
        <div id="actionBox">
            <button onClick={()=>props.add2()} className="button">Add2!</button>
            <button onClick={()=>props.double()} className="button">Double!</button>
            <button onClick={()=>props.square()} className="button">Square!</button>
            <button onClick={()=>props.dividedby2()} className="button">Dividedby2!</button>
            <button onClick={()=>props.subtract2()} className="button">Subtract2!</button>
        </div>
    );
}

export default Action;