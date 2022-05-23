import React, { useState } from "react";
import { PagePath, SendButton } from "../../components/SmallComps/SmallComps";
import AppChecklist from "./AppChecklist";
import AppInputs from "./AppInputs";
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import Layout from "../../Layouts/Layout";
import Swal from 'sweetalert2'
// import mail from "../../assets/images/icons/contact/mail.svg";
import "./Documents.css";

const OwnerApplication = ({ seo, success, error }) => {
    const { errors } = usePage().props
    // if (success) {
    //     Swal.fire({
    //         title: 'წარმატებით დაემატა',
    //         text: '',
    //         icon: 'success',
    //         confirmButtonText: 'Cool'
    //     })
    //     setTimeout(() => {
    //         location.reload();
    //     }, 2000);
    // } else if (error) {
    //     Swal.fire({
    //         title: 'შეცდომა!',
    //         text: '',
    //         icon: 'fail',
    //         confirmButtonText: 'Cool'
    //     })
    //     location.reload()
    // }


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
            name: 'manual approval',
            checks: ["Approval"],
        },
    ];

    // let obj = {};
    // let a = document.querySelectorAll('.app_inputs input');
    // var value;
    // a.forEach((e) => {
    //     if (e.placeholder == "") {
    //         value = e.title
    //     } else {
    //         value = e.placeholder;
    //     }
    //     var str = value.replace(/\s+/g, '_').toLowerCase();
    //     obj[str] = "";
    // })

    const [values, setValues] = useState({
        name_of_ship: "",
        ex_names: "",
        imo_no: "",
        type: "",
        existing_flag: "",
        call_sign: "",
        grt: "",
        nrt: "",
        dwt: "",
        date_keel_laid: "",
        build: "",
        framing_system: "",
        builders: "",
        loa: "",
        lpp: "",
        breath: "",
        depth: "",
        main_engine_builders: "",
        type2: "",
        bhp: "",
        number_and_type_of_generators: "",
        cargogear: "",
        owning_company: "",
        managing_company: "",
        place_date: "",
        name_of_applicant: "",
        hull_machinery: "",
        cargo_gear: "",
        load_line: "",
        safety_constructor: "",
        safety_equipment: "",
        passenger_safety: "",
        safety_radio: "",
        marpol_annexi: "",
        marpol_annexii: "",
        marpol_annexiii: "",
        marpol_annexv: "",
        marpol_annex_vi: "",
        energy_efficiency: "",
        engine_iopc: "",
        fishing_vessel: "",
        tonnage_certificate: "",
        solid_bulk_cards: "",
        dangerous_goods: "",
        doc: "",
        smc: "",
        isps_on_board_verification: "",
        mlc_2006: "",
        ballast_water: "",
        antifouling_survey: "",
        exemption: "",
        cargo_ship_safety_under_500_grt: "",
        seaworthiness: "",
        hsc_dsc_safety: "",
        manual_approval: "",
    })

    // display today time
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    let radio = document.querySelectorAll('#radio_container');

    function GetElementInsideContainer(containerID, childID) {
        var elm = document.getElementById(childID);
        var parent = elm ? elm.parentNode : {};
        return (parent.id && parent.id === containerID) ? elm : {};
    }
    GetElementInsideContainer('app_checklist', 'radio_container')
    // let assa = radio[0].getElementsByClassName("checkbox")

    function handleSubmit(e) {
        e.preventDefault()
        // let form = document.forms["ownerapplication"];
        // let formInputs = form.elements;
        let validform = true;
        let a = document.querySelectorAll('.app_inputs input')
        let x = document.ownerapplication

        for (let j = 0; j < checklist.length; j++) {
            var options = x[checklist[j].name];
            for (let k = 0; k < options.length; k++) {
                let check = options.value;
                if (check == "") {
                    validform = false;
                    break;
                }
            }

        }

        for (let i = 0; i < a.length; i++) {
            if (a[i].value == "") {
                validform = false;
                break;
            }
        }
        // if (!validform || !valid) {
        if (!validform) {
            Swal.fire({
                title: 'შეცდომა',
                text: 'გთხოვთ შეავსოთ ყველა ველი',
                icon: 'fail',
                confirmButtonText: 'Cool'
            })
        }

        if (validform) {
            Swal.fire({
                title: 'წარმატებით დაემატა',
                text: '',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            Inertia.post(route('client.documentations.sendapplication'), values)
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
    }


    return (
        <Layout seo={seo}>
            <div className="documents teamPage careerPage">
                <div className="wrapper">
                    <div className="font45 blue">გემთმფლობელის აპლიკაცია</div>
                    <PagePath
                        location1="მთავარი"
                        location2="დოკუმენტაცია"
                        location3="გემთმფლობელის აპლიკაცია"
                    />
                    <p>
                        Dear Sirs, <br />
                        Please proceed with classification/statutory survey
                    </p>
                    <form name='ownerapplication' onSubmit={handleSubmit}>
                        <div className="flex main">
                            <div className="inputs">

                                <div className="underline uppercase head">FOR ALL SHIPS</div>
                                <div className="app_inputs">
                                    <input type="text" id='name_of_ship' name='name_of_ship' placeholder="name of ship" onChange={handleChange} />
                                    <input type="text" id='ex_names' name='ex_names' placeholder="ex names" onChange={handleChange} />
                                    <input type="number" id='imo_no' name='imo_no' placeholder="imo no" onChange={handleChange} />
                                    <input type="text" name='type' id='type' placeholder="type" onChange={handleChange} />
                                    <input type="text" placeholder="existing flag" name="existing_flag" id='existing_flag' onChange={handleChange} />
                                    <input type="text" placeholder="Call Sign" name="call_sign" id='call_sign' onChange={handleChange} />
                                    <div className="grid3">
                                        <input type="text" placeholder="grt" name="grt" id='grt' onChange={handleChange} />
                                        <input type="text" placeholder="nrt" name="nrt" id='nrt' onChange={handleChange} />
                                        <input type="text" placeholder="DWT" name="dwt" id='dwt' onChange={handleChange} />
                                    </div>
                                    <input type="text" placeholder="Date Keel Laid" name="date_keel_laid" id='date_keel_laid' onChange={handleChange} />
                                    <input type="text" placeholder="Build" name="build" id='build' onChange={handleChange} />
                                    <input type="text" placeholder="Framing System" name="framing_system" id='framing_system' onChange={handleChange} />
                                    <input type="text" placeholder="Builders" name="builders" id='builders' onChange={handleChange} />
                                    <div className="grid2">
                                        <input type="text" placeholder="LOA" name="loa" id='loa' onChange={handleChange} />
                                        <input type="text" placeholder="L.P.P" name="lpp" id='lpp' onChange={handleChange} />
                                    </div>
                                    <div className="grid2">
                                        <input type="text" placeholder="Breath" name="breath" id='breath' onChange={handleChange} />
                                        <input type="text" placeholder="Depth" name="depth" id='depth' onChange={handleChange} />
                                    </div>
                                    <input type="text" placeholder="Main Engine Builders" name="main_engine_builders" id='main_engine_builders' onChange={handleChange} />
                                    <div className="grid2">
                                        <input type="text" placeholder="Type" name="type2" id='type2' onChange={handleChange} />
                                        <input type="text" placeholder="B.H.P" name="bhp" id='bhp' onChange={handleChange} />
                                    </div>
                                    <input type="text" placeholder="Number And Type of Generators" name="number_and_type_of_generators" id='number_and_type_of_generators' onChange={handleChange} />
                                    <input type="text" placeholder="Cargo Gear" name='cargogear' id='cargogear' onChange={handleChange} />
                                    <input type="text" placeholder="Owning Company" name='owning_company' id='owning_company' onChange={handleChange} />
                                    <input type="text" placeholder="Managing Company" name='managing_company' id='managing_company' onChange={handleChange} />
                                    <input type="text" placeholder="Place and Date of Surveys" name='place_date' id='place_date' onChange={handleChange} />
                                    <input type="text" placeholder="Name of Applicant" name='name_of_applicant' id='name_of_applicant' onChange={handleChange} />
                                    <input type="date" value={today} />
                                </div>
                            </div>

                            <div className="checkboxes">
                                <div className="underline uppercase head">
                                    Surveys requested <span>Check whatever is applicable*</span>
                                </div>

                                <div className="app_checklist" id="app_checklist">
                                    {checklist.map((item, index) => {
                                        return (
                                            <div key={index} className="flex line" id='radio_container'>
                                                <div className="cat">{item.title}</div>
                                                {item.checks.map((check, i) => {
                                                    return (
                                                        <div className="checkbox" key={i}>
                                                            <label htmlFor={`checkbox_${index}_${i}`}>{check}</label>
                                                            <input
                                                                name={checklist[index].name}
                                                                onChange={handleChange}
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
                                <div className="bottom flex">
                                    <div className="check">
                                        <input type="checkbox" name="" id="terms_conditions" />
                                        <label htmlFor="terms_conditions">
                                            By Checking this Box I Accapt Terms and Conditions
                                        </label>
                                    </div>
                                    <SendButton text="Send Now" type='submit' />
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="required_docs">
                        Please send us with application form following Documents:
                        <ul>
                            <li>1. Latest Survey Status</li>
                            <li>2. Latest Ship Construction Certificate</li>
                            <li>3. Flag Registration Letter</li>
                        </ul>
                        <a href="#">
                            <img src='/assets/images/icons/contact/mail.svg' alt="" />
                            <span>stat@geolloyd.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </Layout >
    );
};

export default OwnerApplication;
