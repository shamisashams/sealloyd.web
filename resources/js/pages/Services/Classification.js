import React from "react";
import "../AboutUs/AboutUs.css";
import Layout from "../../Layouts/Layout";
// import Img1 from "../../assets/images/bgs/2.png";
import { PagePath } from "../../components/SmallComps/SmallComps";
import "./Services.css";

const Classification = ({ seo }) => {
    return (
        <Layout seo={seo}>
            <div className="servicesPage ">
                <div className=" aboutPage wrapper">
                    <img className="ships_img" src='/assets/images/bgs/2.png' alt="" />
                    <div className="container">
                        <PagePath
                            location1="მთავარი"
                            location2="სერვისი"
                            location3="გემების კლასიფიკაცია"
                        />
                        <div className="content">
                            <p>
                                - he International Convention for the Safety of Life at Sea
                                (SOLAS) was adopted by the International Conference on Safety of
                                Life at Sea on November 1, 1974 and entered into force on May 25,
                                1980. SOLAS has been modified twice by means of Protocols in 1978
                                and 1988. SOLAS is the most important of all international
                                treaties concerning the safety of merchant ships.
                            </p>
                            <p>
                                - he International Convention for the Safety of Life at Sea
                                (SOLAS) was adopted by the International Conference on Safety of
                                Life at Sea on November 1, 1974 and entered into force on May 25,
                                1980. SOLAS has been modified twice by means of Protocols in 1978
                                and 1988. SOLAS is the most important of all international
                                treaties concerning the safety of merchant ships.
                            </p>
                            <p>
                                - he International Convention for the Safety of Life at Sea
                                (SOLAS) was adopted by the International Conference on Safety of
                                Life at Sea on November 1, 1974 and entered into force on May 25,
                                1980. SOLAS has been modified twice by means of Protocols in 1978
                                and 1988. SOLAS is the most important of all international
                                treaties concerning the safety of merchant ships.
                            </p>
                            <p>
                                - he International Convention for the Safety of Life at Sea
                                (SOLAS) was adopted by the International Conference on Safety of
                                Life at Sea on November 1, 1974 and entered into force on May 25,
                                1980. SOLAS has been modified twice by means of Protocols in 1978
                                and 1988. SOLAS is the most important of all international
                                treaties concerning the safety of merchant ships.
                            </p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Classification;
