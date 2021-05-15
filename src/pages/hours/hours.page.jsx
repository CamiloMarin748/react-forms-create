import React,{useState} from 'react';
import FilterableHoursReports from './components/filterable-hours-reports/filterable-hours-report.comp';
import SearchBar from './components/search-bar/search-bar.comp';

const HoursPage = () => {

    let reportsList = [
        {
            id :"d1",
            name : 'Juan',
            cedula : '01',
            delf: 'A1',
            desc : 'nivel 1',

            teacherReport: [
                {
                    id: "d1r1",
                    group: "UNAL 1",
                    date: "02/03/2021",
                    hours: 2, 
                },
                {
                    id: "d1r2",
                    group: "UNAL 2",
                    date: "03/03/2021",
                    hours: 3,
                },
                {
                    id: "d1r3",
                    group: "UNAL 3",
                    date: "04/03/2021",
                    hours: 4,
                }
            ]
        },

        {
            id : "d2",
            name: 'Ana',
            cedula : '02',
            delf: 'A2',
            desc : 'nivel 2',
            teacherReport: [
                {
                    id:"d2r1",
                    group: "UCaldas 1",
                    date: "02/03/2021",
                    hours: 2, 
                },
                {
                    id:"d2r2",
                    group: "UCaldas 2",
                    date: "03/03/2021",
                    hours: 3,
                },
                {
                    id:"d2r3",
                    group: "UCaldas 3",
                    date: "04/03/2021",
                    hours: 4,
                }
            ]
        }
    ];
    const [reports, setReports] = useState(reportsList);
   const [teachers, setTeachers] = useState(reportsList);
// hace falta una lista de teachers ????
// crear onAddReports ={(newReportObj, teacher)=>{ ....

    return (

        <>
        <SearchBar/>

          <FilterableHoursReports 
           reportsList={reports}
        
           onAddReports ={(newReportObj, teacher)=>{
                                                 // console.log(teacher);
                                               //console.log(newReportObj);
                                                //console.log('hola desde');
                                                //console.log(reports);
                                                //console.log('reports length '+reports.length);
            //reglas
            //1. crear nuevo arreglo 
            const newReport = [];
            
            for (let i=0; i<reports.length; i++){
                if(reports[i].id !== teacher){
                   newReport.push(reports[i]);
                }
                else {
                    newReport.push(
                        {
                        ...reports[i],
                       teacherReport:[...reports[i].teacherReport, newReportObj]
                    }
                    );
                } //end else
            } //end for
            //2. cambiar el arreglo a trav'es de la funcion set 
           setReports(newReport);
           // console.log(newReport);
           //setReports(reports);
           //console.log(reports);
            }
        }
            
        onAddTeachers ={(newReportObj, teacher)=>{
            const newReport = [];

    //1. crear nuevo arreglo 

    for (let i=0; i<reports.length; i++){
    if(reports[i].cedula !== teacher.cedula){
            newReport.push(reports[i]);
            }
            else {
            newReport.push(
            {
            ...reports[i],
            teacherReport:[...reports[i].teacherReport, newReportObj]
            }
            );
            } //end else
            } //end for
            //2. cambiar el arreglo a trav'es de la funcion set 
            setTeachers(newReport);
            console.log(newReport );
            //setReports(reports);
            //console.log(reports);

           }}


            />
        </>
        );
}

export default HoursPage;



