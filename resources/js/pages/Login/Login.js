import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia'
// import Arrow from "../../assets/images/icons/other/arr.svg";
import "./Login.css";
import Layout from "../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";


const Login = ({ seo }) => {
    const sharedData = usePage().props.localizations;
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

    const {flash} = usePage().props;
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
                    <h5>
                        {/* პირადი კაბინეტი */}
                        {renderHTML(__('client.login_personal_cabinet', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}

                    </h5>
                    <p>
                        {/* კაბინეტში შესასვლელად მოითხოვე წვდომა ადმინისტრაციასთან */}
                        {renderHTML(__('client.login_to_enter_permissiont_ask_admin', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}

                    </p>
                    {flash ? <div className="danger">{flash}</div> : null}
                    <input name="email" type="text" onChange={handleChange} placeholder={__('client.login_user', sharedData)} />
                    <input name="password" type="password" onChange={handleChange} placeholder={__('client.login_password', sharedData)} />

                    <button onClick={handleSubmit}>
                        {/* ავტორიზაცია */}
                        {renderHTML(__('client.login_authorization', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                        <img src='/assets/images/icons/other/arr.svg' alt="" />
                    </button>
                </div>
            </div>
        </Layout >
    );
};

export default Login;
