import { useState } from "react";
import styles from './Style.module.css';


function EducationInfo(){
    const[schoolName,setSchoolName] = useState('');
    const[title,setTitle] = useState('');
    const[date,setDate] = useState('');
    const[edit,setEdit] = useState(true);
    

    const handleChangeSchool = (e)=>{
        setSchoolName(e.target.value);
    }
    const handleChangeTitle=(e)=>{
        setTitle(e.target.value);            
    }
    const handleChangeDate=(e)=>{
        setDate(e.target.value);
    }

    const handleSubmit=()=>{
        if (schoolName.length==0 || date.length ==0 || title.length == 0) {
            alert('please Fill the Form!!!');
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
                    <input className={styles.input} value={schoolName}  type="text" id="schoolName" onChange={handleChangeSchool} />
                    <br />
                    <label className={styles.label} htmlFor="title">Title of study</label>
                    <input className={styles.input} value={title}  type="text" id="title" onChange={handleChangeTitle} />
                    <br />
                    <label className={styles.label} htmlFor="date">Date of Study</label>
                    <input className={styles.input} value={date}  type="date" id="date" onChange={handleChangeDate} />
                    <br />
                    <div className={styles.buttons}>
                      <button type="button" onClick={handleSubmit}>Submit</button>
                    </div>
            </div>
            ):(
                <div className={styles.submittedInfo}>
                    <p>School-Name:{schoolName}</p>
                    <p>Title of Study:{title}</p>
                    <p>Date :{date}</p>

                    <div className={styles.buttons}>
                      <button type="button" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            )}
            
        </div>
    );

}
export default EducationInfo