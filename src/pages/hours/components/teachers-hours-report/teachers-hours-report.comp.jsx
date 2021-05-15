import React from 'react';

import './teachers-hours-report.style.css';


const TeachersHoursReport = (props) => { 

   // console.log('estosssss son los datos del reporte'
    //+ 'group' + props.report.group + ' date' + props.report.date + ' hours' + props.report.numHours);

    return (
    <div className="teachers-hours-report-container">
         <div></div>
         {
             props.report.hours ==0
             ?
             <span className= 'report-without-hours' >{props.report.group} </span>
             :
             <span>{' '} {props.report.group}</span>

         }

             |
                <span>{props.report.date}</span> |
                 <span>{props.report.hours}</span>

    </div>
    );
}

export default TeachersHoursReport;