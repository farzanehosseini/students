import React,{useState} from 'react';
import Button from '../components/UI/button/button';
import './style/editStudent.css';
import{withRouter} from 'react-router-dom';

const EditStudent = (props)=>{
   const {id,name,classNumber,phoneNumber,email} = props.location.state;
   const[student_name,setName] = useState(name);
   const[student_class,setNumber] = useState(classNumber);
   const[student_phone_number,setPhoneNumber] = useState(phoneNumber);
   const[student_email,setEmail] = useState(email);
   const [message,setMessage]= useState('');
    const editStudent = ()=>{
        
        fetch('http://192.168.147.1/student/updateStudent.php',{
            method:'POST',
            headers:{
                'Accept' :'applicaion/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                student_id:id,
                student_name:student_name,
                student_class:student_class,
                student_phone_number:student_phone_number,
                student_email:student_email
            })
            
        }).then((response)=>response.json())
            .then((responseJson)=>{
                if(responseJson==='succefull'){
                    props.history.replace('/')
                }
                else{
                    setMessage(responseJson)
                }
            }).catch((error)=>{
                setMessage(error)
            })
    }
    return(
        <div className="NewPost">
                <h1>ویرایش دانش آموز</h1>
                <h2>{message}</h2>
                <label>نام و نام خانوادگی</label>
                <input type="text" value={student_name} onChange={(event)=>setName(event.target.value)}  />
                <label>کلاس</label>
                <input type="number"  value={student_class} onChange={(event)=>setNumber(event.target.value)} />
                <label>شماره تلفن</label>
                <input type="number" value={student_phone_number} onChange={(event)=>setPhoneNumber(event.target.value)}  />
                <label>ایمیل</label>
                <input type="email" value={student_email} onChange={(event)=>setEmail(event.target.value)} />
                <Button clicked={editStudent} btnType="danger">ویرایش اطلاعات</Button>
        </div>
    )
}
export default withRouter(EditStudent);