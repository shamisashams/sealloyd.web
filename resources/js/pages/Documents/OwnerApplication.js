import React from "react";
import { PagePath, SendButton } from "../../components/SmallComps/SmallComps";
import AppChecklist from "./AppChecklist";
import AppInputs from "./AppInputs";

import Layout from "../../Layouts/Layout";
// import mail from "../../assets/images/icons/contact/mail.svg";
import "./Documents.css";

const OwnerApplication = ({ seo }) => {
    return (
        <Layout seo={seo}>
            <div className="documents teamPage careerPage">
                <div className="wrapper">
                    <div className="font45 blue">გემთმფლობელის აპლიკაცია</div>
                    <PagePath
                        location1="მთავარი"
                        location2="დოკუმენტაცია"
                        location3="გემთმფლობელის აპლიკაცია"
                    />
                    <p>
                        Dear Sirs, <br />
                        Please proceed with classification/statutory survey
                    </p>
                    <div className="flex main">
                        <div className="inputs">
                            <div className="underline uppercase head">FOR ALL SHIPS</div>
                            <AppInputs />
                        </div>
                        <div className="checkboxes">
                            <div className="underline uppercase head">
                                Surveys requested <span>Check whatever is applicable*</span>
                            </div>
                            <AppChecklist />
                            <div className="bottom flex">
                                <div className="check">
                                    <input type="checkbox" name="" id="terms_conditions" />
                                    <label htmlFor="terms_conditions">
                                        By Checking this Box I Accapt Terms and Conditions
                                    </label>
                                </div>
                                <SendButton text="Send Now" />
                            </div>
                        </div>
                    </div>
                    <div className="required_docs">
                        Please send us with application form following Documents:
                        <ul>
                            <li>1. Latest Survey Status</li>
                            <li>2. Latest Ship Construction Certificate</li>
                            <li>3. Flag Registration Letter</li>
                        </ul>
                        <a href="#">
                            <img src='/assets/images/icons/contact/mail.svg' alt="" />
                            <span>stat@geolloyd.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OwnerApplication;
