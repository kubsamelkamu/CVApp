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



    const handleFirstNameChange=(e)=>{
        setFirstName(e.target.value);
    }
    const handleMiddleNameChange=(e)=>{
        setMiddleName(e.target.value);
    }
    const handleLastNameChange=(e)=>{
        setLastName(e.target.value);
    }
    const handlePhoneNumberChange=(e)=>{
        setPhoneNumber(e.target.value);
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }

    const handleSubmit =() =>{
        setEdit(false);
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
            <h1>General Information</h1>
            <div>
                
            </div>
            {edit?(
                
                <>
                <label className={styles.label} htmlFor="profile-picture">Profile</label><input className={styles.input} type="file" id="profile-picture " accept="image/*"
                onChange={(e) => setProfile(e.target.files[0])} />
                
                {profile && <img  className={styles.profilePicture} 
                src={profile ? URL.createObjectURL(profile) : null} alt="Profile" />}
                
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="firstName">First-Name:</label>
                    <input className={styles.input} value={fistName} type="text" id="firstName" onClick={handleFirstNameChange}/>
                    <br />
                    <label className={styles.label} htmlFor="middleName">Middle-Name</label>
                    <input className={styles.input} value={middleName} type="text" id="middleName"  onChange={handleMiddleNameChange}/>
                    <br />
                    <label className={styles.label} htmlFor="lastName">Last Name:</label>
                    <input className={styles.input} value={lastName} type="text" id="lastName" onChange={handleLastNameChange}/>
                    <br />
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input className={styles.input} value={email} type="email" id="email" onChange={handleEmailChange}/>
                    <br />
                    <label className={styles.label} htmlFor="phoneNumber">Phone-Number</label>
                    <input className={styles.input} value={phoneNumber} type="tel" id="phoneNumber" onChange={handlePhoneNumberChange}/>
                </div>
                  <br />
                  <div className={styles.buttons}>
                      <button type="button" onClick={handleSubmit}>Submit</button>
                  </div>
                </>
            ):(
                <div className={styles.submittedInfo}>
                     {profile && <img src={profile} alt="Profile" className="profilePicture" />}
                    <p>First-Name {fistName}</p>
                    <p>Middle-Name {middleName}</p>
                    <p>Last-Name {lastName}</p>
                    <p>Email:{email}</p>
                    <p>Phone-Number:{phoneNumber}</p>

                    <div className={styles.buttons}>
                        <button type="button" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            )}
           

              
                      
        </div>
    );
}

// validate props 
GeneralInformation.propTypes ={
    onSubmit: PropTypes.func.isRequired,
}


export default GeneralInformation;