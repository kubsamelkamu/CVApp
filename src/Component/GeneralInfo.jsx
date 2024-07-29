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
            
        </div>
    )


}