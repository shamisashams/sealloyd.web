import React from "react";
import Layout from "../../Layouts/Layout";

const AppChecklist = ({ seo }) => {
    const checklist = [
        {
            title: "HULL & MACHINERY",
            checks: ["Special", "Annual", "Intermediate", "Dry dock/Tailshaft"],
        },
        {
            title: "CARGO GEAR",
            checks: ["Renewal", "Annual", "Intermediate", "Occasional survey"],
        },
        {
            title: "LOAD LINE",
            checks: ["Renewal", "Annual"],
        },
        {
            title: "SAFETY CONSTRUCTION",
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "SAFETY EQUIPMENT",
            checks: ["Renewal", "Annual", "Periodical"],
        },
        {
            title: "PASSENGER SAFETY",
            checks: ["Renewal"],
        },
        {
            title: "SAFETY RADIO",
            checks: ["Renewal", "Periodical"],
        },
        {
            title: "MARPOL ANNEX I",
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "MARPOL ANNEX II",
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "MARPOL ANNEX III (SEW)",
            checks: ["Initial", "Renewal"],
        },
        {
            title: "MARPOL ANNEX V (GAR)",
            checks: ["Initial", "Renewal"],
        },
        {
            title: "MARPOL ANNEX VI",
            checks: ["Renewal", "Annual"],
        },
        {
            title: "ENERGY EFFICIENCY",
            checks: ["Initial", "Renewal"],
        },
        {
            title: "ENGINE IAPPC",
            checks: ["Initial", "Renewal"],
        },
        {
            title: "FISHING VESSEL",
            checks: ["Initial", "Annual", "Renewal"],
        },
        {
            title: "TONNAGE CERTIFICATE",
            checks: ["Study", "Re-issuance"],
        },
        {
            title: "SOLID BULK CARGOES",
            checks: ["A", "B", "C"],
        },
        {
            title: "DANGEROUS GOODS",
            checks: ["Initial", "Annual"],
        },
        {
            title: "DOC",
            checks: ["Interim", "Initial", "Annual", "Renewal"],
        },
        {
            title: "SMC",
            checks: ["Interim", "Initial", "Intermediate", "Renewal/Additional"],
        },
        {
            title: "ISPS ON BOARD VERIFICATION",
            checks: ["Interim", "Initial", "Intermediate", "Renewal/Additional"],
        },
        {
            title: "MLC 2006",
            checks: ["Interim", "Initial", "Intermediate", "Renewal"],
        },
        {
            title: "BALLAST WATER",
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "ANTIFOULING SURVEY",
            checks: ["Renewal", "Re-issuance"],
        },
        {
            title: "EXEMPTION",
            checks: ["Request"],
        },
        {
            title: "CARGO SHIP SAFETY UNDER 500 GRT ",
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "SEAWORTHINESS",
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "HSC/DSC SAFETY",
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "MANUAL APPROVAL (SPECIFY)",
            checks: ["Approval"],
        },
    ];
    return (
        // <Layout seo={seo}>
        <div className="app_checklist">
            {checklist.map((item, index) => {
                return (
                    <div key={index} className="flex line">
                        <div className="cat">{item.title}</div>
                        {item.checks.map((check, i) => {
                            return (
                                <div className="checkbox" key={i}>
                                    <label htmlFor={`checkbox_${index}_${i}`}>{check}</label>
                                    <input
                                        name={`checkbox_${index}`}
                                        type="radio"
                                        id={`checkbox_${index}_${i}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
        // </Layout>
    );
};

export default AppChecklist;
