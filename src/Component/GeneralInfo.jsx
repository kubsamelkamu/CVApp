import { useState } from "react";
import styles from './GeneralInfo.module.css';


function GeneralInformation(){
    const[profile,setProfile] = useState(null);
    const[fistName,setFirstName] = useState('');
    const[middleName,setMiddleName] =useState('');
    const[lastName,setLastName] = useState('');
    const[email,setEmail] = useState('');
    const[phoneNumber,setPhoneNumber] = useState('');

    const handleFirstNameChange=()=>{
        setFirstName(fistName);
    }
    const handleMiddleNameChange=()=>{
        setMiddleName(middleName);
    }
    const handleLastNameChange=()=>{
        setLastName(lastName);
    }
    const handlePhoneNumberChange=()=>{
        setPhoneNumber(phoneNumber);
    }
    const handleEmailChange=()=>{
        setEmail(email);
    }

    return(
        <div className={styles.generalInfoContainer}>
            <label htmlFor="profile-picture">Profile</label>
            <input type="file" id="profile-picture " accept="image/*" 
            onChange={(e)=>setProfile(e.target.files[0])}
            />
            {profile && <img  className={styles.profilePicture} 
            src={profile ? URL.createObjectURL(profile) : null} alt="Profile" />}

            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="firstName">First-Name:</label>
                <input className={styles.input} type="text" id="firstName" onChange={handleFirstNameChange}/>
                <label className={styles.label} htmlFor="middleName">Middle-Name</label>
                <input className={styles.input} type="text" id="middleName"  onChange={handleMiddleNameChange}/>
                <label className={styles.label} htmlFor="lastName">Last Name:</label>
                <input className={styles.input} type="text" id="lastName" onChange={handleLastNameChange}/>
                <label className={styles.label} htmlFor="email">Email:</label>
                <input className={styles.input} type="email" id="email" onChange={handleEmailChange}/>
                <label className={styles.label} htmlFor="phoneNumber">Phone-Number</label>
                <input className={styles.input} type="tel" id="phoneNumber" onChange={handlePhoneNumberChange}/>
            </div>
         
        </div>
    );
}

export default GeneralInformation;