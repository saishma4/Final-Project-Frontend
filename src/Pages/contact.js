import { margin } from "@mui/system";
import React,{useState} from "react";
import './registration.css'


const Contact = () => {
    const [data, setData] = useState({ username: "", message: "" })

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()// to prevent anything pending
            alert("Message Submitted Successfully")
    }

    return (
        <div
        style={{
          textAlign:'center',
          marginTop:'10%',
          height: '60vh',
          marginLeft:'20%',
          marginRight:'20%'
        }}>
        <div className='container'>
            <form >
                <h1>Contact Us</h1>
                <label>Name</label>
                <br />
                <input type="text" name="username" placeholder='Enter your name' value={data.username} onChange={changeHandler} />
                <br />
                <label>Message</label>
                <br />
                <input type="text" name="message" placeholder='Your message here..' value={data.message} onChange={changeHandler} />
                <br />
                <button onClick={submitHandler} id="submit">Submit</button>
            </form>
        </div>
        </div>
    );
}

export default Contact;