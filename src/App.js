import React from "react";
import "./app.css";
import { useState } from "react";

const App = ()=>{

    const [input, setInput] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
        contact: '',
    })
    const [error, setError] = useState('');

    const handler = (e) =>{
        setInput({...input,[e.target.name]: e.target.value});
    }
    const formHandler = (e) =>{
        e.preventDefault();
        setError(formValidation(input));
        console.log(setError(formValidation(input)))
    }

    const formValidation = (parameter) =>{
        const errors = {};
        if(parameter.firstname === ""){
            errors.firstname = "Firstname is Mandatory";
        } else if(parameter.firstname.length < 3){
            errors.firstname = "Firstname is too Short";
        } 

        if(parameter.lastname === ""){
            errors.lastname = "Lastname is Mandatory";
        } else if(parameter.lastname.length < 3){
            errors.lastname = "Lastname is too Short";
        } 

        if(parameter.email === ""){
            errors.email = "E-mail is Mandatory";
        }

        if(parameter.password === ""){
            errors.password = "Password is Mandatory"
        } else if(parameter.password.length < 5){
            errors.password = "Password Length is too Short";
        } else if(parameter.password.length !== parameter.confirmpassword.length){
            errors.password = "Password Doesn't Match";
        }

        if(parameter.confirmpassword === ""){
            errors.confirmpassword = "Confirm-Password is Mandatory"
        } else if(parameter.confirmpassword.length < 5){
            errors.confirmpassword = "Confirm-Password Length is too Short";
        } else if(parameter.password.length !== parameter.confirmpassword.length){
            errors.confirmpassword = "Password Doesn't Match";
        }

        if(parameter.contact === ""){
            errors.contact = "Contact is Mandatory";
        } else if(parameter.contact.length < 10){
            errors.contact = "Contact must be 10 Digit";
        } else if(parameter.contact.length > 10){
            errors.contact = "Contact must be 10 Digit";
        }


        return errors;
    }



        return(
            <>
                <div className="main-container">
                    <form onSubmit={formHandler}>
                        <h1>Registration Here!</h1>
                            <div>
                                <input type="text" placeholder="FirstName" name="firstname" value={input.firstname} onChange={handler}/>
                                <p>{error.firstname}</p>
                            </div>
                            <div>
                                <input type="text" placeholder="LastName" name="lastname" value={input.lastname} onChange={handler}/>
                                <p>{error.lastname}</p>
                            </div>
                            <div>
                                <input type="text" placeholder="E-mail" name="email" value={input.email} onChange={handler}/>
                                <p>{error.email}</p>
                            </div>
                            <div>
                                <input type="text" placeholder="Password" name="password" value={input.password} onChange={handler}/>
                                <p>{error.password}</p>
                            </div>
                            <div>
                                <input type="text" placeholder="Confirm Password" name="confirmpassword" value={input.confirmpassword} onChange={handler}/>
                                <p>{error.confirmpassword}</p>
                            </div>
                            <div>
                                <input type="text" placeholder="Contact" name="contact" value={input.contact} onChange={handler}/>
                                <p>{error.contact}</p>
                            </div>
                            <button>Register</button>
                    </form>
                </div>
            </>
        );
};

export default App;



// import React, { useState } from "react";
// import bike from "../images/bike.png";
// import "../component/form.css"

// const Form = () =>{

//     const [input , setInput] = useState({
//         firstname: '',
//         lastname: '',
//         email: '',
//         password: '',
//         confirmpassword: '',
//         contact: ''
//     });
//     const [error, setError] = useState({});

//     const handler = (e) =>{
//         setInput({...input, [e.target.name]: e.target.value});
//     }

//     const submitHandler = (e) =>{
//         e.preventDefault();
//         setError(validation(input));
//     }

//     const validation = (para) =>{
//         const errors = {};
//         if(para.firstname === ""){
//             errors.firstname = "Firstname is Mandatory";
//         } else if(para.firstname.length < 3){
//             errors.firstname = "Firstname is too Short";
//         } 

//         if(para.lastname === ""){
//             errors.lastname = "Lastname is Mandatory";
//         } else if(para.lastname.length < 3){
//             errors.lastname = "Lastname is too Short";
//         } 

//         if(para.email === ""){
//             errors.email = "E-mail is Mandatory";
//         }

//         if(para.password === ""){
//             errors.password = "Password is Mandatory"
//         } else if(para.password.length < 5){
//             errors.password = "Password Length is too Short";
//         } else if(para.password.length !== para.confirmpassword.length){
//             errors.password = "Password Doesn't Match";
//         }

//         if(para.confirmpassword === ""){
//             errors.confirmpassword = "Confirm-Password is Mandatory"
//         } else if(para.confirmpassword.length < 5){
//             errors.confirmpassword = "Confirm-Password Length is too Short";
//         } else if(para.password.length !== para.confirmpassword.length){
//             errors.confirmpassword = "Password Doesn't Match";
//         }

//         if(para.contact === ""){
//             errors.contact = "Contact is Mandatory";
//         } else if(para.contact.length < 10){
//             errors.contact = "Contact must be 10 Digit";
//         } else if(para.contact.length > 10){
//             errors.contact = "Contact must be 10 Digit";
//         }


//         return errors;
//     }


//     return(
//         <>
//             <div className="main-container">
//                 <div className="another-container">
//                     {/* <img src={bike} className="bike-img"/> */}
//                 </div>
//                 <div className="form-container">
//                     <h3>Register For Upcomming Model</h3>
//                     <form className="form" onSubmit={submitHandler}>
//                         <input type="text" placeholder="Firstname" name="firstname" value={input.firstname || ''} onChange={handler}/>
//                         <p className="para">{error.firstname}</p>

//                         <input type="text" placeholder="Lastname" name="lastname" value={input.lastname || ''} onChange={handler}/>
//                         <p className="para">{error.lastname}</p>

//                         <input type="email" placeholder="E-mail" name="email" value={input.email || ''} onChange={handler}/>
//                         <p className="para">{error.email}</p>

//                         <input type="password" placeholder="Password" name="password" value={input.password || ''} onChange={handler}/><br />
//                         <p className="para">{error.password}</p>

//                         <input type="password" placeholder="Confirm-Password" name="confirmpassword" value={input.confirmpassword || ''} onChange={handler}/><br />
//                         <p className="para">{error.confirmpassword}</p>

//                         <input type="text" placeholder="Contact" name="contact" value={input.contact} onChange={handler}/><br />
//                         <p className="para">{error.contact}</p>

//                         <button type="submit">SignUp</button>
//                         <p className="member">already a member? <span className="login">SignIn</span></p>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Form;
