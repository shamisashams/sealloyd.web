import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia'
// import Arrow from "../../assets/images/icons/other/arr.svg";
import "./Login.css";
import Layout from "../../Layouts/Layout";

const Login = ({ seo }) => {

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        //e.preventDefault()
        Inertia.post(route('client.auth'), values)
    }

    return (
        <Layout src={seo} >
            <div className="loginPage">
                <div className="login_box">
                    <h5>პირადი კაბინეტი</h5>
                    <p>კაბინეტში შესასვლელად მოითხოვე წვდომა ადმინისტრაციასთან</p>
                    <input name="email" type="text" onChange={handleChange} placeholder="მომხმარებელი" />
                    <input name="password" type="password" onChange={handleChange} placeholder="პაროლი" />
                    <button onClick={handleSubmit}>
                        ავტორიზაცია
                        <img src='/assets/images/icons/other/arr.svg' alt="" />
                    </button>
                </div>
            </div>
        </Layout >
    );
};

export default Login;
