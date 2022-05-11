import React from "react";
import { PagePath } from "../../../components/SmallComps/SmallComps";
import { StatorBoxes } from "../../../components/StatorBoxes/StatorBoxes";
import Layout from "../../../Layouts/Layout";
import "../../AboutUs/AboutUs.css";

const Stator2 = ({ seo }) => {
    return (
        <Layout seo={seo}>
            <div className="servicesPage">
                <div className="aboutPage wrapper statorPage">
                    <div className="container">
                        <div className="font45 blue">Marpol</div>
                        <PagePath
                            location1="მთავარი"
                            location2="სერვისი"
                            location3="სტატუტორი"
                        />
                        <div className="content">
                            <p>
                                Convention includes a set of regulations aimed at preventing
                                pollution of the sea from ships. MARPOL 73/78 includes six
                                different annexes outlined below:
                            </p>
                            <p>
                                1. Regulations for the Prevention of Pollution by Oil from Ships
                                (IOPP) <br />
                                2. Regulations for the Prevention of Pollution by Noxious Liquid
                                Substances in Bulk <br />
                                3. Regulations for the Prevention of Pollution by Harmful
                                Substances Carried by Sea in <br />
                                Packaged Form, or in Freight Containers, Portable Tanks or Road
                                and Rail Tank Wagons <br />
                                4. Regulations for the Prevention of Pollution by Sewage from
                                Ships (SEW) <br />
                                5. Regulations from the Prevention of Pollution by Garbage from
                                Ships (GAR) <br />
                                6. Regulations for the Prevention of Pollution of Air from Ships
                                (IAPP) <br />
                            </p>
                            <p>
                                MARITIME LLOYD is authorized to issue the following statutory
                                certificates:
                            </p>
                            <p>
                                1. International Oil Pollution Prevention Certificate <br />
                                2. International Certificate of Fitness for the Carriage of
                                Dangerous Chemicals in Bulk <br />
                                3. Certificate of Fitness for the Carriage of Dangerous Chemicals
                                in Bulk <br />
                                4. International Pollution Prevention Certificate for the Carriage
                                of Noxious Liquid Substances in BulK <br />
                                5. International Sewage Pollution Prevention Certificate <br />
                                6. International Air Pollution Prevention Certificate <br />
                                7. Engine International Air Pollution Prevention Certificate{" "}
                                <br />
                                8. International Energy Efficiency Certificate <br />
                            </p>
                        </div>
                    </div>
                    <StatorBoxes />
                </div>
            </div>
        </Layout>
    );
};

export default Stator2;
