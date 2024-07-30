import { useState } from "react";
import styles from './Style.module.css';

function PracticalInfo(){
    const[company,setCompany] = useState('');
    const[position,setPosition]=useState('');
    const[responsibilities,setResponsibilities] = useState('');
    const[dateFrom,setDateFrom]=useState('');
    const[dateTo,setDateTo]=useState('');
    const[edit,setEdit]=useState('');


    return(
        <div className={container}>

        </div>
    )

}