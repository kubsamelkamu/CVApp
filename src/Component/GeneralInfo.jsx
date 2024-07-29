const { useState } = require("react");

function GeneralInformation(){
    const[profile,setProfile] = useState(null);
    const[fistName,setFirstName] = useState('');
    const[middleName,setMiddleName] =useState('');
    const[lastName,setLastName] = useState('');
    const[email,setEmail] = useState('');
    const[phoneNumber,setPhoneNumber] = useState('');


    return(
        <div className="general-info">
            <label htmlFor="profile-picture">Profile</label>
            <input type="filr" id="profile-picture" 
            onChange={(e)=>setProfile(e.target.files[0])}
            />
            <img src={profile ? URL.createObjectURL(profile) : null} alt="Profile" />
            <label htmlFor="firstName">First-Name:</label>
            <input type="text" id="firstName" 
            onChange={(fistName)=>setFirstName(fistName.target.value)}/>
            <label htmlFor="middleName">Middle-Name</label>
            <input type="text" id="middleName" 
            onChange={(middleName)=>setMiddleName(middleName.target.value)}/>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" 
            onChange={(lastName)=>setLastName(lastName.target.value)}/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" 
            onChange={(email)=>setEmail(email.target.value)}/>
            <label htmlFor="phoneNumber">Phone-Number</label>
            <input type="tel" id="phoneNumber" 
            onChange={(phoneNumber)=>setPhoneNumber(phoneNumber.target.value)}/>
        </div>
    )


}