import React, { useState } from 'react';
//import HoursPage from '../../hours.page';
import TeachersName from '../teachers-name/teachers-name.comp';
import TeachersHoursReport from '../teachers-hours-report/teachers-hours-report.comp';
import FormReport from '../formReport/formReport.comp';
import FormTeacher from '../formTeacher/formTeacher.comp';
import './hours-reports.style.css';

const HoursReports = (props) => {

    const [teacher, setTeacher] = useState('d1');
    const [group, setGroup] =  useState('');
    const [hours, setHours] =  useState('');
    const [date, setDate] =  useState('');

    const [name, setName] = useState(' ');
    const [cedula, setCedula] =  useState('');
    const [delf, setDelf] =  useState('');
    const [desc, setDesc] =  useState('');

const addReport =(event)=>{
    event.preventDefault();
    //console.log('Teacher Name ' + teacher);
    //console.log('Group ' + group);
    //console.log('hours ' + hours);
    //console.log('Date ' + date);

    const newReport = {
        id: group,
        group: group,
        hours: Number (hours),
        date: date,
    };
    props.onAddReports(newReport, teacher);
}

const addTeacher = (event) => {    
        event.preventDefault(); 
    
      const newTeacher = {name: name, 
        cedula : cedula, 
        delf : delf, 
        desc: desc, 
    };
    props.onAddTeacher(newTeacher, teacher);
    }

    return (
    <div className="hours-reports-container">
        
<br/><br/>
        

        <div>
    
        {props.reportsList.map((teacher, index)=>{
            return (
         
         < React.Fragment key={teacher.id}>
           
            <TeachersName 
            
            key = {teacher.cedula}
            teacherName = {teacher}
            />
                   group  | date  |  #hours 
            {teacher.teacherReport.map((report, indexReport)=>{

                return (
                <TeachersHoursReport 
                key = {report.id}
                report = {report}
                />


                );
            })}
                </React.Fragment>
            );
        })}
        </div>
    

    </div>




);

} 

export default HoursReports;