import React from "react";
import { PagePath } from "../../../components/SmallComps/SmallComps";
import { StatorBoxes } from "../../../components/StatorBoxes/StatorBoxes";
import Layout from "../../../Layouts/Layout";
import "../../AboutUs/AboutUs.css";

const Stator4 = ({ seo }) => {
    return (
        <Layout seo={seo}>
            <div className="servicesPage">
                <div className="aboutPage wrapper statorPage">
                    <div className="container">
                        <div className="font45 blue">Ballast Water management</div>
                        <PagePath
                            location1="მთავარი"
                            location2="სერვისი"
                            location3="სტატუტორი"
                        />
                        <div className="content">
                            <p>
                                The Ballast Water Management Convention have an impact right
                                across the shipping industry, affecting a wide variety of people,
                                and presenting different challenges and pressures. The BWMC, 2004
                                came into force on September 8, 2017.
                            </p>
                            <p>
                                The BWM Convention apply to all ships except: <br />
                                • ships not designed or constructed to carry ballast water <br />•
                                ships operating exclusively in waters under the jurisdiction of a
                                Party, unless the party determines that the discharge of ballast
                                water from such ships would impair or damage their environment{" "}
                                <br />
                                • warships, naval auxiliary or other ships owned or operated by a
                                Party <br />• ships with permanent ballast water not subject to
                                discharge. <br />
                            </p>
                            <p>
                                All ships above 400 GT must carry on board: <br />• “Ballast Water
                                Management Plan” approved by the Administration, <br />
                                • “Ballast Water Record Book” for the recording of each operation
                                concerning ballast water management; <br />
                                • an “International Ballast Water Management Certificate” with a
                                five-year validity and subject to annual, intermediate and renewal
                                surveys. <br />
                            </p>
                        </div>
                    </div>
                    <StatorBoxes />
                </div>
            </div>
        </Layout>
    );
};

export default Stator4;
