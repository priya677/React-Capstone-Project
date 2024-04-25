import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
export default function RegisterForm() {
    const [formValues, setFormValues] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        Registerbox: false,
    })
    const [errors,setErrors]=useState ({
            name: null,
            username: null,
            email: null,
            mobile: null,
            Registerbox: null,
    })
    const navigate = useNavigate()
    const handleSubmit=()=>{
        let isError= false;
        if(!formValues.name.trim().length){
            setErrors((prev)=>{
                return {...prev,name:"name is required"};
            }); 
            isError= true;
        }else {
            setErrors((prev)=>{
                return {...prev,name:null};
            }); 
        }

        if(!formValues.username.trim().length){
            setErrors((prev)=>{
                return {...prev,username:"userName is required"};
            }); 
            isError=true;
        }else {
            setErrors((prev)=>{
                return {...prev,username:null};
            }); 
        }

        if(!formValues.email.trim().length){
            setErrors((prev)=>{
                return {...prev,email:"email is required"};
            }); 
            isError=true;
        }else {
            setErrors((prev)=>{
                return {...prev,email:null};
            }); 
        }
         if(!formValues.mobile.trim().length){
            setErrors((prev)=>{
                return {...prev,mobile:"number is required"};
            }); 
            isError=true;
        }else {
            setErrors((prev)=>{
                return {...prev,mobile:null};
            }); 
        }
        if(formValues.Registerbox===false){
            setErrors((prev)=>{
                return {...prev,Registerbox:"please check the box"};
            });
            isError=true;
        }else{
            setErrors((prev)=>{
                return {...prev,Registerbox:null};
            })
        }
        if(isError){
            return ;
        }
        else {
            window.localStorage.setItem("userInfo",json.stringify(formValues));
            navigate("/info")
        }
    };
    return (
        <div style={{display:"flex", 
        justifyContent:"center",
        alignItems:"center",
        gap:"8px",
        flexDirection:"column"
        }}
        >
            <input 
            value={formValues.name} 
            onChange={(e) => {
                setFormValues((prev) => {
                    return { ...prev, name: e.target.value };
                })
            }} type="text" placeholder="Name" />
            <p>{errors.name}</p>
            <br />
            <input value={formValues.username} onChange={(e) => {
                setFormValues((prev) => {
                    return { ...prev, username: e.target.value }
                })
            }} type="text" placeholder="Username" />
             <p>{errors.username}</p>
            <br />
            <input value={formValues.email} onChange={(e) => {
                setFormValues((prev) => {
                    return { ...prev, email: e.target.value }
                })
            }} type="text" placeholder="Email" />
             <p>{errors.email}</p>
            <br />
            <input value={formValues.mobile} onChange={(e) => {
                setFormValues((prev) => {
                    return { ...prev, mobile: e.target.value }
                })
            }} type="text" placeholder="Mobile" />
             <p>{errors.mobile}</p>
            <br />
            <label htmlFor="registerbox">
                <input
                    checked={formValues.Registerbox}
                    id="registerbox"
                    type="checkbox"
                    name="registerbox"
                    onChange={(e) => {
                        setFormValues((prev) => {
                            return { ...prev, Registerbox: e.target.checked };
                        });
                    }}
                />
                Share my register data with super app data
            </label>
            <p>{errors.Registerbox}</p>
            <button onClick={handleSubmit} style={{border:"none",padding:"6px",background:"green"}}>
  Sign up
</button>

        </div>
    );
}