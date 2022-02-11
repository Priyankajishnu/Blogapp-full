import React, { useState ,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Signup.css';
import validation from './validation';

function Signup(props) {
	let navigate = useNavigate();
    // storing Form field values
    const[formValues,setFormValues] = useState({name:"",email:"",password:""})

	//manage the form error values
	const[formErrorValues,setFormErrorValues] = useState({})

	//flag for form submission status
	const[isSubmit,setIsSubmit] = useState(false)

	// manage field change
	    const handleChange= (event)=>{
        	// console.log(event.target.value);
			const{name,value} = event.target;  //destructuring
			setFormValues({...formValues,[name]:value}) 
			// console.log(formValues);
    }

	// manage form refresh
	const handleSubmit = (event)=>{
		event.preventDefault();
		setFormErrorValues(validation(formValues));
	    setIsSubmit(true) ;
	}

	useEffect(()=>{
		if(Object.keys(formErrorValues).length===0 && isSubmit ){
			alert("Signup is successful");
			navigate("../login", { replace: true })
			// addUsers();
		}
	},[formErrorValues]); 

	// const addUsers = () => {
    //     console.log(formValues)
    //     axios.post("http://localhost:3005/api/signup", formValues).then(
    //         (res) => {
    //             alert("Successfully Created Account!!!Now you can login using registered username and password.")
    //             navigate("../login", { replace: true })
    //             console.log("in axios post" + res.data)

    //         }
    //     )
    // }
		

  return(
    <div>
		
		<div className="main">  	
			{/* <input type="checkbox" id="chk" aria-hidden="true" /> */}
			{/* terenary condition to redirect to login page */}
			{/* {Object.keys(formErrorValues).length===0 && isSubmit ? (<Login />) : (<pre className='pretext'>{JSON.stringify(formValues, undefined,2)}</pre>)} */}
        {/* Signup */}
			<div className="signup">
				<form onSubmit={handleSubmit}>
					<label className='label' >SIGNUP</label>
          <br></br><br></br>
					<input className='field' type="text" name="name" placeholder="User name" required="" value={formValues.username} onChange={handleChange} />
          
          <p className="error">{formErrorValues.name}</p>
				  <br></br>
          <input className='field' type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange} />
          
          <p className="error">{formErrorValues.email}</p>
					<br></br>
          <input className='field' type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
          
          <p className="error">{formErrorValues.password}</p>
					<br></br>
          <button className='button'>SignUp</button>
				</form>
			</div>
      </div>
    </div>
  )
  }

export default Signup;






