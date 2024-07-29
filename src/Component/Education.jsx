import { useState } from "react";
import styles from './Style.module.css';


function EducationInfo(){
    const[schoolName,setSchoolName] = useState('');
    const[title,setTitle] = useState('');
    const[date,setDate] = useState('');
    const[edit,setEdit] = useState(true);
    const[educationList,setEducationList] = useState([]);

    const handleAddEducation=()=>{
        if (schoolName && title && date){
            const newEducationList = {schoolName,title,date};
            setEducationList(...educationList,newEducationList);
            setSchoolName('');
            setDate('');
            setTitle('');
        }
    }

    const handleSubmit=()=>{
        if (schoolName.length==0 || date.length ==0 || title.length == 0) {
            return;
        }
        setEdit(false);
    }

    const handleEdit =()=>{
        setEdit(true);
    }

    return(
        <div className={styles.container}>
            <h1>Education Expreince</h1>
            {edit?(
                <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="schoolName">School-Name</label>
                <input className={styles.input} value={schoolName}  type="text" id="schoolName" onChange={(e)=>e.target.value} />
                <label className={styles.label} htmlFor="title">Title of study</label>
                <input className={styles.input} value={title}  type="text" id="title" onChange={(e)=>e.target.value} />
                <label className={styles.label} htmlFor="date">Date of Study</label>
                <input className={styles.input} value={date}  type="date" id="date" onChange={(e)=>e.target.value} />
            </div>
            )}
            
        </div>
    )

}