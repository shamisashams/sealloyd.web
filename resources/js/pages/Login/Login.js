import React from "react";
// import Arrow from "../../assets/images/icons/other/arr.svg";
import "./Login.css";
import Layout from "../../Layouts/Layout";

const Login = ({ seo }) => {

    return (
        <Layout src={seo} >
            <div className="loginPage">
                <div className="login_box">
                    <h5>პირადი კაბინეტი</h5>
                    <p>კაბინეტში შესასვლელად მოითხოვე წვდომა ადმინისტრაციასთან</p>
                    <input type="text" placeholder="მომხმარებელი" />
                    <input type="password" placeholder="პაროლი" />
                    <button>
                        ავტორიზაცია
                        <img src='/assets/images/icons/other/arr.svg' alt="" />
                    </button>
                </div>
            </div>
        </Layout >
    );
};

export default Login;
