import React from "react";
import "../AboutUs/AboutUs.css";
import Layout from "../../Layouts/Layout";
// import Img1 from "../../assets/images/bgs/2.png";
import { PagePath } from "../../components/SmallComps/SmallComps";
import "./Services.css";
import { Link, usePage } from "@inertiajs/inertia-react";


const Classification = ({ seo, images }) => {
    const sharedData = usePage().props.localizations;
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

    return (
        <Layout seo={seo}>
            <div className="servicesPage ">
                <div className=" aboutPage wrapper">
                    <img className="ships_img" src={images[0]} alt="" />
                    <div className="container">
                        <PagePath
                            location1={__('client.nav_home', sharedData)}
                            location2={__('client.nav_services', sharedData)}
                            location3={__('client.nav_clasification', sharedData)}
                        />
                        <div className="content">
                            {/* <p>
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
                            </p> */}

                            {/* {renderHTML(__('client.services_nav_clasification_main_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} */}
                            {renderHTML(__('client.services_clasification_main_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Classification;
