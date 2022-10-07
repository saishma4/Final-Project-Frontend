import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './registration.css';
import axios from 'axios';
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";

const Register = () => {
    const navigate = useNavigate()   
    return (
        <Formik
        initialValues={{
          username: "",
          password: "",
          email:"",
          confirmpassword:"",
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
          .min(4,"Username can't be less than 6 characters")
            .max(255)
            .required("Username is required"),
            email:Yup.string()
            .email("Must be an email address")
            .required("Email is required"),
          password: Yup.string().min(8,"Password can't be less than 8 characters").max(255).required("Password is required"),
          confirmpassword: Yup.string().required("this field is required").when("password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "Both password need to be the same"
            ),
          }),
        })}
        
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          await axios.post("http://localhost:8080/api/auth/registration", values).then(
            (response) => {
                console.log(response);
                alert("user Added Successfully");
                if (response.status==200) {
                    console.log("navigating");
                    navigate('/login');
                }
            }, (error) => {
                console.log(error);
                alert("Operation failed");
            }
        );
          setSubmitting(false);
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        })=> (
        <div className='register-container'>
            <form onSubmit={handleSubmit} >
                <h2>Create Your Account</h2>
            <label htmlFor="loginUser">User Name</label>
            <br />
            <TextField size="small"
              type="text"
              name="username"
              placeholder="Enter username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.username && errors.username)}
              fullWidth
              helperText={touched.username && errors.username}
            />
            <br />
            <label htmlFor="loginUser">Email</label>
            <br />
            <TextField size="small"
              type="email"
              name="email"
              placeholder="Enter email address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
            />
            <br />
            <label htmlFor="loginPassword">Password</label>
            <br />
            <TextField size="small"
              type="password"
              name="password"
              placeholder="Enter password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
            />
            <br />
            <label htmlFor="loginPassword">Confirm Password</label>
            <br />
            <TextField size="small"
              type="password"
              name="confirmpassword"
              placeholder="Enter password"
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.confirmpassword && errors.confirmpassword)}
              fullWidth
              helperText={touched.confirmpassword && errors.confirmpassword}
            />
            <br />
            <Button style={{marginTop:"10px"}}
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Register
            </Button>
                <br />
                <p>Already Have an Account <Link to="/login" >Login</Link></p>
            </form>
        </div >
              )}
              </Formik>
    );
}
export default Register;