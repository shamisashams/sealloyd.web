import React from "react";
import { PagePath } from "../../../components/SmallComps/SmallComps";
import { StatorBoxes } from "../../../components/StatorBoxes/StatorBoxes";
import "../../AboutUs/AboutUs.css";
import Layout from "../../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";
import "../Services.css";

const Stator8 = ({ seo }) => {
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
                            {__("client.stator8_header", sharedData)}
                        </div>
                        <PagePath
                            location1={__("client.nav_home", sharedData)}
                            location2={__("client.nav_services", sharedData)}
                            location3={__("client.nav_stators", sharedData)}
                        />
                        <div className="content">
                            {/* <p>
                                The EU Ship Recycling Regulation came into force on 31 December
                                2020 and effects any in-service ship of 500 GT or over calling at
                                any EU* port or anchorage (regardless of flag). It requires that
                                vessels hold a valid and certified Inventory Hazardous Materials
                                (IHM) on board.
                            </p>
                            <p>
                                IHM is a structured system to control hazardous materials onboard
                                ships and achieve compliance with both (EU SRR) and the Hong Kong
                                Convention (HKC) for the Safe and Environmentally Sound Recycling
                                of Ships.
                            </p> */}
                            <p>
                                {/* {renderHTML(
                                    __(
                                        "client.stator8_main_text",
                                        sharedData
                                    ).replace(/(?:\r\n|\r|\n)/g, "<br>")
                                )} */}
                                {renderHTML(__('client.stator8_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}

                            </p>
                        </div>
                    </div>
                    <StatorBoxes />
                </div>
            </div>
        </Layout>
    );
};

export default Stator8;
