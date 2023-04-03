import React from 'react';
import "./programs.css";
import {programsData} from "../../data/programsData";
import RightArrow from "../../images/rightArrow.png"

function programs() {
  return (
    <div  className='Programs' id="programs">
      
    {/* Header */}

    <div className='programs-header'>
  <span> EXPLORE OUR</span>
  <span className='stroke-text'> PROGRAMS</span>
  <span> TO SHAPE YOU</span>


    </div>
     
     <div className="program-categories">
     {programsData.map((program)=>(
        <div className='category'>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div  className='join-now'>
            <span>
            Join Now
            </span>
             <img src={RightArrow} alt="" />
            </div>
            
        </div>
     ))}



     </div>














    </div>
  )
}

export default programs;