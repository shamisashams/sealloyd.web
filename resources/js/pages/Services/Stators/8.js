import React from "react";
import { PagePath } from "../../../components/SmallComps/SmallComps";
import { StatorBoxes } from "../../../components/StatorBoxes/StatorBoxes";
import "../../AboutUs/AboutUs.css";
import Layout from "../../../Layouts/Layout";

const Stator8 = ({ seo }) => {
    return (
        <Layout seo={seo}>
            <div className="servicesPage">
                <div className="aboutPage wrapper statorPage">
                    <div className="container">
                        <div className="font45 blue">HazMat</div>
                        <PagePath
                            location1="მთავარი"
                            location2="სერვისი"
                            location3="სტატუტორი"
                        />
                        <div className="content">
                            <p>
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
