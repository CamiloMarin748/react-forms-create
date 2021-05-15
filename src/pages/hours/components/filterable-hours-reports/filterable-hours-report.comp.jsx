import React from 'react';
import HoursReports from '../hours-reports/hours-reports.comp';
import FormReport from '../formReport/formReport.comp';
import FormTeacher from '../formTeacher/formTeacher.comp';

//import SearchBar from '../search-bar/search-bar.comp';


import './filterable-hours-report.style.css';


const FilterableHoursReports = (props) => {



    return (
        <div className= "filterable-hours-report-container">  
                  

         <HoursReports reportsList={props.reportsList}
         onAddReports={props.onAddReports}
         />
         <div className="container">
         <div className="item item-1">
             
        <FormReport reportsList={props.reportsList}
         onAddReports={props.onAddReports}
         /></div>

        <div className="item item-2"> 
        
        <FormTeacher reportsList={props.reportsList}
        onAddTeachers={props.onAddTeachers}
        /><text > </text>  <br/>
</div>

        
         </div>
        </div>
        

    );
}

export default FilterableHoursReports;