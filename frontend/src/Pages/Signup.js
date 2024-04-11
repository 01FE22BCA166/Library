// import React, { useContext, useState } from 'react'
// import axios from 'axios'
// import { AuthContext } from '../Context/AuthContext.js'
// import Switch from '@material-ui/core/Switch';

// function Signup() {
//     const [isStudent, setIsStudent] = useState(true)
//     const [admissionId, setAdmissionId] = useState()
//     const [employeeId,setEmployeeId] = useState()
//     const [password, setPassword] = useState()
//     const [error, setError] = useState("")
//     const { dispatch } = useContext(AuthContext)

//     const API_URL = process.env.REACT_APP_API_URL
    
//     const loginCall = async (userCredential, dispatch) => {
//         dispatch({ type: "LOGIN_START" });
//         try {
//             const res = await axios.post(API_URL+"api/auth/signin", userCredential);
//             dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//         }
//         catch (err) {
//             dispatch({ type: "LOGIN_FAILURE", payload: err })
//             setError("Wrong Password Or Username")
//         }
//     }

//     const handleForm = (e) => {
//         e.preventDefault()
//         isStudent
//         ? loginCall({ admissionId, password }, dispatch)
//         : loginCall({ employeeId,password }, dispatch)
//     }

//     return (
//         <div className='signin-container'>
//             <div className="signin-card">
//                 <form onSubmit={handleForm}>
//                     <h2 className="signin-title"> Log in</h2>
//                     <p className="line"></p>
//                     <div className="persontype-question">
//                         <p>Are you a Staff member ?</p>
//                         <Switch
//                             onChange={() => setIsStudent(!isStudent)}
//                             color="primary"
//                         />
//                     </div>
//                     <div className="error-message"><p>{error}</p></div>
//                     <div className="signin-fields">
//                         <label htmlFor={isStudent?"admissionId":"employeeId"}> <b>{isStudent?"Admission ID":"Employee ID"}</b></label>
//                         <input className='signin-textbox' type="text" placeholder={isStudent?"Enter Admission ID":"Enter Employee ID"} name={isStudent?"admissionId":"employeeId"} required onChange={(e) => { isStudent?setAdmissionId(e.target.value):setEmployeeId(e.target.value) }}/>
//                         <label htmlFor="password"><b>Password</b></label>
//                         <input className='signin-textbox' type="password" minLength='6' placeholder="Enter Password" name="psw" required onChange={(e) => { setPassword(e.target.value) }} />
//                         </div>
//                     <button className="signin-button">Log In</button>
//                     <a className="forget-pass" href="#home">Forgot password?</a>
//                 </form>
//                 <div className='signup-option'>
//                     <p className="signup-question">Don't have an account? Contact Librarian</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Signup




// import React, { useState } from 'react';

const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform signup functionality here, such as sending data to a backend server
//     console.log('Email:', email);
//     console.log('Username:', username);
//     console.log('Password:', password);
//     // You can add API calls or validation logic here
//   };

  return (
    <div>
      <h2>Signup</h2>
      {/* <form onSubmit={handleSubmit}>
        <label>Email Address:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
       
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
       
        <label>Create Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
       
        <button type="submit">Signup</button>
      </form> */}
    </div>
  );
};

export default Signup;