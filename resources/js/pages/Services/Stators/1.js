import React from "react";
import { PagePath } from "../../../components/SmallComps/SmallComps";
import { StatorBoxes } from "../../../components/StatorBoxes/StatorBoxes";
import Layout from "../../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";
import "../Services.css";
import "../../AboutUs/AboutUs.css";

const Stator1 = ({ page, seo }) => {
    const sharedData = usePage().props.localizations;
    const renderHTML = (rawHTML) =>
        React.createElement("p", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });

    return (
        <Layout seo={seo}>
            <div className="servicesPage">
                <div className="aboutPage wrapper statorPage">
                    <div className="container">
                        <div className="font45 blue">
                            {__("client.stator1_header", sharedData)}
                        </div>
                        <PagePath
                            location1={__("client.nav_home", sharedData)}
                            location2={__("client.nav_services", sharedData)}
                            location3={__("client.nav_stators", sharedData)}
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
                                Maritime Lloyd is authorized to issue the following certificates
                                for all ships:
                            </p>
                            <p>
                                1. Passenger Ship Safety Certificate <br />
                                2. Cargo Ship Safety Construction Certificate <br />
                                3. Cargo Ship Safety Equipment Certificate <br />
                                4. Cargo Ship Safety Radio Certificate <br />
                                5. Cargo Ship Safety Certificate <br />
                                6. Exemption Certificate
                            </p> */}

                            {/* {renderHTML(
                                __(
                                    "client.stator1_main_text",
                                    sharedData
                                ).replace(/(?:\r\n|\r|\n)/g, "<br>")
                            )} */}
                            {renderHTML(__('client.stator1_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                        </div>
                    </div>
                    <StatorBoxes />
                </div>
            </div>
        </Layout>
    );
};

export default Stator1;
