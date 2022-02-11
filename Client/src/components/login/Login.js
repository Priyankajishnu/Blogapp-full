import React, { useState ,useEffect} from 'react';
import './Login.css';
import NavMain from '../navbar/NavMain';
import validation from './validation';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login(props) {

	let navigate = useNavigate();
	let [login, SetLogin] = useState([]);
    
	// storing Form field values
    const[formValues,setFormValues] = useState({email:"",password:""})

	//manage the form error values
	const[formErrorValues,setFormErrorValues] = useState({})

	//flag for form submission status
	const[isSubmit,setIsSubmit] = useState(false)

	// manage field change
	    const handleChange= (event)=>{
        	// console.log(event.target.value);
			const{name,value} = event.target;  //destructuring
			setFormValues({...formValues,[name]:value}) 
			console.log(formValues);
    }

	// // manage form refresh
	// const handleSubmit = (event)=>{
	// 	event.preventDefault();
	// // 	setFormErrorValues(validation(formValues));
	//     setIsSubmit(true) ;
	// }

	// useEffect(() => {
    //     loginData();
    // }, []);

    // function loginData() {
    //     axios.get("http://localhost:3001/api/login")
    //         .then((response) => {
    //             console.log("in logindata",response.data);
    //             SetLogin(login = response.data);
    //         }
    //         )
    // }
    function authenticate() {

    //     console.log("in authenticate")
    //     let flag1=0
    //     let flag2=0
    //     let admin=0
    // login.map((x, key) => (
    //     (x.username===formValues.username && x.password===formValues.password)?flag1=1:flag2=0
    // ))
    // login.map((x, key) => (
    //     ("Admin"===formValues.username && "12345"===formValues.password)?admin=1:flag2=0
    // ))
    // if (admin===1)
    // {navigate("../", { replace: true })
    //     props.setlogin(2)
    // }
    // else if (flag1===1)
    // {
        navigate("../", { replace: true })
    //     props.setlogin(1)
    // }
    
    // else
    // alert("Invalid Username or Password")
    }

    const clicked = (event) => {
        navigate("../signup", { replace: true })
    }

 

	// useEffect(()=>{
	// 	if(Object.keys(formErrorValues).length===0 && isSubmit ){
	// 		alert("Login is successful");
		
	// 	} 
	// })
	// },[formErrorValues]); 

	// function loginData() {
    //     axios.get("http://localhost:3005/api/login")
    //         .then((response) => {
    //             console.log("in logindata",response.data);
    //             SetLogin(login = response.data);
    //         }
    //         )
    // }

	// const clicked = (event) => {
    //     navigate("../", { replace: true })
    // }
 
  return(
	 
    <div>
		 
		<div className="main">  	
			{/* <input type="checkbox" id="chk" aria-hidden="true" /> */}
			{/* terenary condition to redirect to login page */}
			{/* {Object.keys(formErrorValues).length===0 && isSubmit ? (<NavMain />) : (<pre className='pretext'>{JSON.stringify(formValues, undefined,2)}</pre>)} */}
        
        {/* Signup */}
			<div className="signup">
				<form onSubmit={clicked}>
					<label className='label' >LOGIN</label>
          <br></br><br></br>
					
          <input className='field' type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange} />
          <br></br>
          {/* <p className="error">{formErrorValues.email}</p> */}
					<br></br>
          <input className='field' type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
          <br></br>
          {/* <p className="error">{formErrorValues.password}</p> */}
					<br></br>
          <button  onClick={authenticate} className='button'>Login</button>
				</form>
			</div>
      </div>
    </div>
  )
  }

export default Login;
