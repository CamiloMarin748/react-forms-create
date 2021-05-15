import React, { useState } from 'react';
//import HoursPage from '../../hours.page';
import TeachersName from '../teachers-name/teachers-name.comp';
import TeachersHoursReport from '../teachers-hours-report/teachers-hours-report.comp';

import './formsTeacher.style.css';

const FormTeacher = (props) => {

    const [teacher, setTeacher] = useState('d1');
    const [name, setName] = useState('');
    const [cedula, setCedula] =  useState('');
    const [delf, setDelf] =  useState('');
    const [desc, setDesc] =  useState('');

const addTeacher =(event)=>{
    event.preventDefault();
    //console.log('Teacher Name ' + name);
    //console.log('Cedula ' + cedula);
    //console.log('Certificación DELF ' + delf);
    //console.log('Escalafón ' + date);

    const newTeacher = {
        name: name,
        cedula: cedula,
        delf:  delf,
        desc: desc,
    };
    props.onAddTeachers(newTeacher, cedula);
}


return (    
    <div className="forms-teacher-container">
<text > Ingrese un docente</text>  <br/>
<br/>
<div className="report-teacher-form">
<form >
     <table>
         <tbody>

        <tr>
            <td>Ingrese el nombre del teacher</td>
        </tr>

        <tr>
            <td>
        <input type="text" className="form input" 
        value={name}
        onChange={(event)=>{
            setName(event.target.value);
        }}
        />
              </td>
        </tr>


        <tr>
            <td>Cedula</td>
        </tr>
        <tr>
            <td><input type="text" className="form input"  
         value={cedula} 
         onChange ={(event)=>{
             setCedula(event.target.value);
             }}
         />
            </td>
        </tr>

        <tr>
            <td>Nivel DELF alcanzado</td>
        </tr>
        <tr>
            <td><input type="number" className="form input"
          value={delf} 
          onChange ={(event)=>{
              setDelf(event.target.value);
              }}
          /></td>
        </tr>

        <tr>
            <td>Ingrese el escalafon del docente</td>
        </tr>
        <tr>
            <td><input type="date" className="form input"
            value={desc}
            onChange = {(event)=>{
                setDesc(event.target.value);
            }}

            /></td>
        </tr>

        <tr>
            <td>
                <button
                    onClick={addTeacher}
                >Add teacher</button>
            </td>
        </tr>
        </tbody>
     </table>              
</form>
          </div>
    </div>

);

} 

export default FormTeacher;