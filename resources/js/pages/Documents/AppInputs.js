import React from "react";
import Layout from "../../Layouts/Layout";

const AppInputs = ({ seo }) => {
    return (
        <Layout seo={seo}>
            <div className="app_inputs">
                <input type="text" placeholder="Name of ship" />
                <input type="text" placeholder="Ex Names" />
                <input type="number" placeholder="IMO No" />
                <input type="text" placeholder="Type" />
                <input type="text" placeholder="Existing Flag" />
                <input type="text" placeholder="Call Sign" />
                <div className="grid3">
                    <input type="text" placeholder="GRT" />
                    <input type="text" placeholder="NRT" />
                    <input type="text" placeholder="DWT" />
                </div>
                <input type="text" placeholder="Date Keel Laid" />
                <input type="text" placeholder="Build" />
                <input type="text" placeholder="Framing System" />
                <input type="text" placeholder="Builders" />
                <div className="grid2">
                    <input type="text" placeholder="LOA" />
                    <input type="text" placeholder="L.P.P" />
                </div>
                <div className="grid2">
                    <input type="text" placeholder="Breath" />
                    <input type="text" placeholder="Depth" />
                </div>
                <input type="text" placeholder="Main Engine Builders" />
                <div className="grid2">
                    <input type="text" placeholder="Type" />
                    <input type="text" placeholder="B.H.P" />
                </div>
                <input type="text" placeholder="Number And Type of Generators" />
                <input type="text" placeholder="Cargo Gear (Derricks/Cranes - SWL)" />
                <input type="text" placeholder="Owning Company" />
                <input type="text" placeholder="Managing Company" />
                <input type="text" placeholder="Place and Date of Surveys" />
                <input type="text" placeholder="Name of Applicant" />
                <input type="date" placeholder="" />
            </div>
        </Layout>
    );
};

export default AppInputs;
