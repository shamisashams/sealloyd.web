import React from "react";
import { PagePath } from "../../../components/SmallComps/SmallComps";
import { StatorBoxes } from "../../../components/StatorBoxes/StatorBoxes";
import Layout from "../../../Layouts/Layout";
import "../../AboutUs/AboutUs.css";
import { Link, usePage } from "@inertiajs/inertia-react";
import "../Services.css";

const Stator3 = ({ seo }) => {
    const sharedData = usePage().props.localizations;
    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    return (
        <Layout seo={seo}>
            <div className="servicesPage">
                <div className="aboutPage wrapper statorPage">
                    <div className="container">
                        <div className="font45 blue">
                            {__("client.stator3_header", sharedData)}
                        </div>
                        <PagePath
                            location1={__("client.nav_home", sharedData)}
                            location2={__("client.nav_services", sharedData)}
                            location3={__("client.nav_stators", sharedData)}
                        />
                        <div className="content">
                            {/* <p>
                                was adopted by the IMO through Resolution A.741 (18) on the 4th of
                                November 1993. The ISM Code has been enforced for all types of
                                ships of 500 gross tonnage. The aim of ISM Code is to provide
                                international standards for the safe management and operation of
                                ships and pollution prevention.
                            </p>
                            <p>
                                Maritime Lloyd can provide highly qualified auditors to certify
                                Company and Ship for compliance with the ISM Code. According to
                                the ISM Code, a Document of Compliance (DoC) is issued to
                                Companies in case of management system satisfies requirements of
                                ISM Code. Correspondingly, a Safety Management Certificate (SMC)
                                is issued to a ship which prove that, its shipboard management
                                operates in accordance with the approved Safety Management System.
                            </p> */}
                            <p>
                                {renderHTML(
                                    __(
                                        "client.stator3_main_text",
                                        sharedData
                                    ).replace(/(?:\r\n|\r|\n)/g, "<br>")
                                )}
                            </p>
                        </div>
                    </div>
                    <StatorBoxes />
                </div>
            </div>
        </Layout>
    );
};

export default Stator3;
