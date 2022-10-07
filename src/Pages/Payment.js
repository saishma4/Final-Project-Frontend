import React, { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import './registration.css';
import axios from 'axios';
import getCookie from "../Components/utils";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";

const Payment = () => {
    const navigate = useNavigate()
    return (
        <div>
            {getCookie("accessToken") &&
                <Formik
                    initialValues={{
                        mobileNum: "",
                        cardNum: "",
                        expiryDate: "",
                        cvv: "",
                        cardHolderName: ""
                    }}
                    validationSchema={Yup.object().shape({
                        mobileNum: Yup.string()
                            .min(10, "mobile number can't be less than 10 numbers")
                            .max(10)
                            .required("Mobile number  is required"),
                        cardNum:  Yup.string()
                            .min(16, "card number can't be less than 16 numbers")
                            .required("card number is required"),
                        expiryDate: Yup.string()
                            .required("This is a required field"),
                        cvv: Yup.string()
                            .min(3, "cvv can't be less than 3 numbers")
                            .max(3, "cvv can't be more than 3 numbers")
                            .required("cvv is required"),
                        cardHolderName: Yup.string()
                            .min(6, "Username can't be less than 6 characters")
                            .max(255)
                            .required("card holder name is required"),
                    })}
            onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                await axios.post("http://localhost:8080/api/auth/payment", values).then(
                    (response) => {
                        console.log(response);
                        alert("Congratulations! Order Placed Sucessfully, Shop More");
                        if (response.status == 200) {
                            console.log("navigating");
                            navigate('/dolls');
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
            }) => (
                <div className='register-container'>
                    <form onSubmit={handleSubmit} >
                        <h2>Order</h2>
                        <label htmlFor="loginUser">Mobile Number</label>
                        <br />
                        <TextField size="small"
                            type="text"
                            name="mobileNum"
                            placeholder="enter your number"
                            value={values.mobileNum}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.mobileNum && errors.mobileNum)}
                            fullWidth
                            helperText={touched.mobileNum && errors.mobileNum}
                        />
                        <p>Pay using Credit or Debit card</p>
                        <br />
                        <label htmlFor="loginUser">Card Number</label>
                        <br />
                        <TextField size="small"
                            type="text"
                            name="cardNum"
                            placeholder="Enter card number"
                            value={values.cardNum}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.cardNum && errors.cardNum)}
                            fullWidth
                            helperText={touched.cardNum && errors.cardNum}
                        />
                        <br />
                        <label htmlFor="loginUser">Expiry Date</label>
                        <br />
                        <TextField size="small"
                            type="text"
                            name="expiryDate"
                            placeholder="Enter date"
                            value={values.expiryDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.expiryDate && errors.expiryDate)}
                            fullWidth
                            helperText={touched.expiryDate && errors.expiryDate}
                        />
                        <br />
                        <label htmlFor="loginUser">CVV</label>
                        <br />
                        <TextField size="small"
                            type="text"
                            name="cvv"
                            placeholder="Enter cvv"
                            value={values.cvv}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.cvv && errors.cvv)}
                            fullWidth
                            helperText={touched.cvv && errors.cvv}
                        />
                        <br />
                        <label htmlFor="loginUser">Card Holder Name</label>
                        <br />
                        <TextField size="small"
                            type="text"
                            name="cardHolderName"
                            placeholder="Enter name"
                            value={values.cardHolderName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={Boolean(touched.cardHolderName && errors.cardHolderName)}
                            fullWidth
                            helperText={touched.cardHolderName && errors.cardHolderName}
                        />
                        <br />
                        <Button style={{ marginTop: "10px" }}
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                        >
                            Pay
                        </Button>
                    </form>
                </div >
            )}
     </Formik>
     }
     {
    !(getCookie("accessToken")) &&
    navigate('/')}
    </div >
    );
}
export default Payment;