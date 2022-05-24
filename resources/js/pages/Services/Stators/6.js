import React from "react";
import { PagePath } from "../../../components/SmallComps/SmallComps";
import { StatorBoxes } from "../../../components/StatorBoxes/StatorBoxes";
import "../../AboutUs/AboutUs.css";
import Layout from "../../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";
import "../Services.css";

const Stator6 = ({ seo }) => {
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
                            {__("client.stator6_header", sharedData)}
                        </div>
                        <PagePath
                            location1={__("client.nav_home", sharedData)}
                            location2={__("client.nav_services", sharedData)}
                            location3={__("client.nav_stators", sharedData)}
                        />
                        <div className="content">
                            {/* <p>
                                The International Labour Organisation (ILO) adopted Maritime
                                Labour Convention, 2006 (MLC, 2006) to help ensure that all
                                seafarers, regardless of their nationality and the flag of the
                                ships they have decent working and living conditions.
                            </p>
                            <p>
                                The Convention consists of five main Titles: <br />
                                Title 1: Minimum requirements for seafarers to work on a ship.{" "}
                                <br />
                                Title 2: Conditions of employment. <br />
                                Title 3: Accommodation, recreational facilities, food and
                                catering. <br />
                                Title 4: Health protection, medical care, welfare and social
                                security protection. <br />
                                Title 5: Compliance and enforcement - on board complaint
                                procedures. <br />
                            </p>
                            <p>
                                The Convention is applicable to all ships of greater of 500 gross
                                tonnage. Different requirements may apply to vessels below 500
                                gross tonnage. Maritime Lloyd is fully authorized by flag
                                administrations to conduct MLC verifications and issue Maritime
                                Labour Certificates. We are also able to provide early reviews of
                                your DMLC Part II in order to facilitate the inspection process on
                                board.
                            </p> */}
                            <p>
                                {renderHTML(
                                    __(
                                        "client.stator6_main_text",
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

export default Stator6;
