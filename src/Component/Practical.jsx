import { useState } from "react";
import styles from './Style.module.css';

function PracticalInfo(){
    const[company,setCompany] = useState('');
    const[position,setPosition]=useState('');
    const[responsibilities,setResponsibilities] = useState('');
    const[dateFrom,setDateFrom]=useState('');
    const[dateTo,setDateTo]=useState('');
    const[edit,setEdit]=useState('');

    const handleChangeCompany = (e) =>{
        setCompany(e.target.value);
    }
    const handleChangePosition=(e)=>{
        setPosition(e.target.value);
    }
    const handleChangeResponsiblity=(e)=>{
        setResponsibilities(e.target.value);
    }
    const handleChangeStartDate=(e)=>{
        setDateFrom(e.target.value);
    }
    const handleChangeEndDate=(e)=>{
        setDateTo(e.target.value);
    }





    return(
        <div className={styles.container}>
            <h1>Practical Expreince</h1>
            {edit?(
                <div className={styles.inputContainer}>
                    <label htmlFor="Company">Company Name</label>
                    <input type="text" id="company" />
                    <br />
                    <label htmlFor="position">Position-Title</label>
                    <input type="text" id="position" />
                    <br />
                    <label htmlFor="responsibilities">Responsiblity</label>
                    <textarea type="text" id="responsibilities" />
                    <br />
                    <label htmlFor="start-Date">Start-Date</label>
                    <input type="text" id="start-Date" />
                    <br />
                    <label htmlFor="endDate">End-Date</label>
                    <input type="text" id="endDate" />
                     <br />
                    <div className={styles.buttons}>
                        <button type="button" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            ):(
                <div className={styles.submittedInfo}>
                    <p>Company:{company}</p>
                    <p>position title:{position}</p>
                    <p>Responsiblities:{responsibilities}</p>
                    <p>Start Date:{dateFrom}</p>
                    <p>End Date:{dateTo}</p>
                    <div className={styles.buttons}>
                      <button type="button" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            )}

        </div>
    )

}