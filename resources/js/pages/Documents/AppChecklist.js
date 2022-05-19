import React from "react";
import Layout from "../../Layouts/Layout";

const AppChecklist = ({ seo }) => {
    const checklist = [
        {
            title: "HULL & MACHINERY",
            name: "hull_machinery",
            checks: ["Special", "Annual", "Intermediate", "Dry dock/Tailshaft"],
        },
        {
            title: "CARGO GEAR",
            name: 'cargo_gear',
            checks: ["Renewal", "Annual", "Intermediate", "Occasional survey"],
        },
        {
            title: "LOAD LINE",
            name: 'load_line',
            checks: ["Renewal", "Annual"],
        },
        {
            title: "SAFETY CONSTRUCTION",
            name: 'safety_constructor',
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "SAFETY EQUIPMENT",
            name: 'safety_equipment',
            checks: ["Renewal", "Annual", "Periodical"],
        },
        {
            title: "PASSENGER SAFETY",
            name: 'passenger_safety',
            checks: ["Renewal"],
        },
        {
            title: "SAFETY RADIO",
            name: 'safety_radio',
            checks: ["Renewal", "Periodical"],
        },
        {
            title: "MARPOL ANNEX I",
            name: 'marpol_annexi',
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "MARPOL ANNEX II",
            name: 'marpol_annexii',
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "MARPOL ANNEX III (SEW)",
            name: 'marpol_annexiii',
            checks: ["Initial", "Renewal"],
        },
        {
            title: "MARPOL ANNEX V (GAR)",
            name: 'marpol_annexv',
            checks: ["Initial", "Renewal"],
        },
        {
            title: "MARPOL ANNEX VI",
            name: 'marpol_annex_vi',
            checks: ["Renewal", "Annual"],
        },
        {
            title: "ENERGY EFFICIENCY",
            name: 'energy_efficiency',
            checks: ["Initial", "Renewal"],
        },
        {
            title: "ENGINE IAPPC",
            name: 'engine_iopc',
            checks: ["Initial", "Renewal"],
        },
        {
            title: "FISHING VESSEL",
            name: 'fishing_vessel',
            checks: ["Initial", "Annual", "Renewal"],
        },
        {
            title: "TONNAGE CERTIFICATE",
            name: 'tonnage_certificate',
            checks: ["Study", "Re-issuance"],
        },
        {
            title: "SOLID BULK CARGOES",
            name: 'solid_bulk_cards',
            checks: ["A", "B", "C"],
        },
        {
            title: "DANGEROUS GOODS",
            name: 'dangerous_goods',
            checks: ["Initial", "Annual"],
        },
        {
            title: "DOC",
            name: 'doc',
            checks: ["Interim", "Initial", "Annual", "Renewal"],
        },
        {
            title: "SMC",
            name: 'smc',
            checks: ["Interim", "Initial", "Intermediate", "Renewal/Additional"],
        },
        {
            title: "ISPS ON BOARD VERIFICATION",
            name: 'isps_on_board_verification',
            checks: ["Interim", "Initial", "Intermediate", "Renewal/Additional"],
        },
        {
            title: "MLC 2006",
            name: 'mlc_2006',
            checks: ["Interim", "Initial", "Intermediate", "Renewal"],
        },
        {
            title: "BALLAST WATER",
            name: 'ballast_water',
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "ANTIFOULING SURVEY",
            name: 'antifouling_survey',
            checks: ["Renewal", "Re-issuance"],
        },
        {
            title: "EXEMPTION",
            name: 'exemption',
            checks: ["Request"],
        },
        {
            title: "CARGO SHIP SAFETY UNDER 500 GRT ",
            name: 'cargo_ship_safety_under_500_grt',
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "SEAWORTHINESS",
            name: 'seaworthiness',
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "HSC/DSC SAFETY",
            name: 'hsc_dsc_safety',
            checks: ["Renewal", "Annual", "Intermediate"],
        },
        {
            title: "MANUAL APPROVAL (SPECIFY)",
            name: 'manual_approval',
            checks: ["Approval"],
        },
    ];
    return (

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
                                        name={checklist[index].name}
                                        // type="radio"
                                        // id={checklist[index].name}
                                        onChange={handleChange}
                                        // name={`checkbox_${index}`}
                                        type="radio"
                                        id={checklist[index].name}
                                        value={checklist[index].checks[i]}
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>

    );
};

export default AppChecklist;
