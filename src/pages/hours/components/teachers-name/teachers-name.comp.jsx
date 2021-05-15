import React from 'react';

import './teachers-name.style.css';


const TeachersName = (props) =>{
    
    
    
   // console.log('este esss el nombre ' + props.teacherName)


    return (

<div className="teachers-name-container">
<div> </div>

    {props.teacherName.name}_|_
    {props.teacherName.cedula}_|_
    {props.teacherName.delf}_|_
    {props.teacherName.desc}
</div>

    ); 
    
}

export default TeachersName;