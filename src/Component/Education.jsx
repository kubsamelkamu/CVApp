import { useState } from "react";

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

}