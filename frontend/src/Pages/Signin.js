import React, { useContext, useState } from 'react'
import './Signin.css'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContext.js'
import Switch from '@material-ui/core/Switch';

function Signin() {
    const [isStudent, setIsStudent] = useState(true)
    const [admissionId, setAdmissionId] = useState()
    const [employeeId,setEmployeeId] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("")
    const { dispatch } = useContext(AuthContext)

    const API_URL = process.env.REACT_APP_API_URL
    
    const loginCall = async (userCredential, dispatch) => {
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post(API_URL+"api/auth/signin", userCredential);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        }
        catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err })
            setError("Wrong Password Or Username")
        }
    }

    const handleForm = (e) => {
        e.preventDefault()
        isStudent
        ? loginCall({ admissionId, password }, dispatch)
        : loginCall({ employeeId,password }, dispatch)
    }

    return (
        <div className='signin-container'>
            <div className="signin-card">
                <form onSubmit={handleForm}>
                    <h2 className="signin-title"> Log in</h2>
                    <p className="line"></p>
                    {/* <div className="persontype-question">
                        <p>Are you a Staff member ?</p>
                        <Switch
                            onChange={() => setIsStudent(!isStudent)}
                            color="primary"
                        />
                    </div> */}
                    <div className="error-message"><p>{error}</p></div>
                    <div className="signin-fields">
                        <label htmlFor={isStudent?"admissionId":"employeeId"}> <b>{isStudent?"Admission ID":"Employee ID"}</b></label>
                        <input className='signin-textbox' type="text" placeholder={isStudent?"Enter Admission ID":"Enter Employee ID"} name={isStudent?"admissionId":"employeeId"} required onChange={(e) => { isStudent?setAdmissionId(e.target.value):setEmployeeId(e.target.value) }}/>
                        <label htmlFor="password"><b>Password</b></label>
                        <input className='signin-textbox' type="password" minLength='6' placeholder="Enter Password" name="psw" required onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                    <button className="signin-button">Log In</button>
                    <a className="forget-pass" href="#home">Forgot password?</a>
                </form>
                <div className='signup-option'>
                    <p className="signup-question">Don't have an account? Contact Librarian</p>
                </div>
            </div>
        </div>
    )
}

export default Signin


// import { useState } from "react";
// import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// import PropTypes from "prop-types";
// import Iconify from "../../../components/iconify";

// // ----------------------------------------------------------------------

// const Signin = ({loginUser}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <>
//       <Stack spacing={3} sx={{mb: 2}}>
//         <TextField name="email" label="Email address" value={email} required onChange={
//           (event) => {
//             setEmail(event.target.value);
//           }
//         }/>

//         <TextField
//           name="password"
//           required
//           label="Password"
//           value={password}
//           type={showPassword ? 'text' : 'password'}
//           onChange={(event) => setPassword(event.target.value)}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Stack>

//       {/* <Typography variant="body2" sx={{mb: 5, mt: 3}} textAlign="center" */}
//       {/* > */}
//       {/*  Don’t have an account? {''} */}
//       {/*  <Link variant="subtitle2">Get started</Link> */}
//       {/* </Typography> */}

//       <LoadingButton sx={{mt: 4}} fullWidth size="large" type="submit" variant="contained"
//                      onClick={() => loginUser(email, password)}>
//         Login
//       </LoadingButton>
//     </>
//   );
// }

// Signin.propTypes = {
//   loginUser: PropTypes.func,
// };

// export default Signin