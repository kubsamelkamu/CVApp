import { useState } from "react";
import styles from './GeneralInfo.module.css';
import PropTypes from 'prop-types';

function GeneralInformation({onSubmit}){
    const[profile,setProfile] = useState(null);
    const[fistName,setFirstName] = useState('');
    const[middleName,setMiddleName] =useState('');
    const[lastName,setLastName] = useState('');
    const[email,setEmail] = useState('');
    const[phoneNumber,setPhoneNumber] = useState('');
    const[edit,setEdit] = useState(true);



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
    
    const handleSubmit =() =>{
        onSubmit({
            profile,
            fistName,
            middleName,
            lastName,
            email,
            phoneNumber
        })
    }

    const handleEdit = () =>{
        setEdit(true);
    }

    return(
        <div className={styles.generalInfoContainer}>
            <label className={styles.label} htmlFor="profile-picture">Profile</label>
            <input className={styles.input}  type="file" id="profile-picture " accept="image/*" 
            onChange={(e)=>setProfile(e.target.files[0])}
            />
            {profile && <img  className={styles.profilePicture} 
            src={profile ? URL.createObjectURL(profile) : null} alt="Profile" />}

            <div className={styles.inputContainer}>
                <label className={styles.label} htmlFor="firstName">First-Name:</label>
                <input className={styles.input} type="text" id="firstName" onChange={handleFirstNameChange}/>
                <br />
                <label className={styles.label} htmlFor="middleName">Middle-Name</label>
                <input className={styles.input} type="text" id="middleName"  onChange={handleMiddleNameChange}/>
                <br />
                <label className={styles.label} htmlFor="lastName">Last Name:</label>
                <input className={styles.input} type="text" id="lastName" onChange={handleLastNameChange}/>
                <br />
                <label className={styles.label} htmlFor="email">Email:</label>
                <input className={styles.input} type="email" id="email" onChange={handleEmailChange}/>
                <br />
                <label className={styles.label} htmlFor="phoneNumber">Phone-Number</label>
                <input className={styles.input} type="tel" id="phoneNumber" onChange={handlePhoneNumberChange}/>
            </div>
                <br />
                <div className={styles.buttons}>
                    <button type="button">Submit</button>
                    <button type="button">Edit</button>
                </div>
                      
        </div>
    );
}

// validate props 
GeneralInformation.propTypes ={
    onSubmit: PropTypes.func.isRequired,
}


export default GeneralInformation;