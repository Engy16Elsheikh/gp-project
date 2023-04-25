import React from "react";
import './Ask.css';
const Ask=()=>{
    return(
      <>
        <h2 className="h-ask">Ask Your Question</h2>
        <p>Free Consultation</p>
        <p>our Doctors here for your help and answering your question</p>
        <input type="text" placeholder="Leave Your Question"></input> 
        <input className="signup-btn" type="submit" value="submit"></input>
      </>
    )
}
export default Ask