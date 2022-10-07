import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";
import "./registration.css";
import "./login.css";
import axios from "axios";
import { Link} from "react-router-dom";

const Login = () => {
  const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string()
        .min(4,"Username can't be less than 6 characters")
          .max(255)
          .required("Username is required"),
        password: Yup.string().min(8,"Password can't be less than 8 characters").max(255).required("Password is required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        await axios.post("http://localhost:8080/api/auth/login", values).then(
          (response) => {
            console.log(response);
            if (response.status === 200) {
              console.log("navigating");
              setCookie("accessToken", response.data.accessToken, 1);
              window.location.href = "/";
            }
          },
          () => {
            alert("Invalid username/password" );
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
      }) => (
        <div className="register-container">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
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
            <Button style={{marginTop:"10px"}}
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Login
            </Button>
            <div className="forgotpassword" onClick={()=>{alert("Please E-mail admindollza@gmail.com for password change");}}>Forgot Password?</div>
            <br />
                <p>Need an Account <Link to="/registration" >Register</Link></p>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default Login;
