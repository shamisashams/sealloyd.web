import React, { useState } from "react";
import { PagePath, SendButton } from "../../components/SmallComps/SmallComps";
import AppChecklist from "./AppChecklist";
import AppInputs from "./AppInputs";
import { Inertia } from '@inertiajs/inertia'
import Layout from "../../Layouts/Layout";
import Swal from 'sweetalert2'
import { Link, usePage, useForm } from "@inertiajs/inertia-react";

// import mail from "../../assets/images/icons/contact/mail.svg";
import "./Documents.css";

const OwnerApplication = ({ info, seo, success, error }) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
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
            title: __('client.ownerapp_question_hull_machinery', sharedData),
            name: "hull_machinery",
            checks: [__('client.app_option_special', sharedData), __('client.app_option_annual', sharedData), __('client.app_option_intermediate', sharedData), __('client.app_option_drydock', sharedData)],
        },
        {
            title: __('client.ownerapp_question_cargo_gear', sharedData),
            name: 'cargo_gear',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_annual', sharedData), __('client.app_option_intermediate', sharedData), __('client.app_option_occasional', sharedData)],
        },
        {
            title: __('client.ownerapp_question_road_line', sharedData),
            name: 'load_line',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_annual', sharedData)],
        },
        {
            title: __('client.ownerapp_question_safety_construction', sharedData),
            name: 'safety_constructor',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_annual', sharedData), __('client.app_option_intermediate', sharedData)],
        },
        {
            title: __('client.ownerapp_question_safety_equipment', sharedData),
            name: 'safety_equipment',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_annual', sharedData), __('client.app_option_periodical', sharedData)],
        },
        {
            title: __('client.ownerapp_question_passenger_safety', sharedData),
            name: 'passenger_safety',
            checks: [__('client.app_option_remewal', sharedData)],
        },
        {
            title: __('client.ownerapp_question_safety_radio', sharedData),
            name: 'safety_radio',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_periodical', sharedData)],
        },
        {
            title: __('client.ownerapp_question_marpolo_anex_i', sharedData),
            name: 'marpol_annexi',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_annual', sharedData), __('client.app_option_intermediate', sharedData)],
        },
        {
            title: __('client.ownerapp_question_marpolo_anex_ii', sharedData),
            name: 'marpol_annexii',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_annual', sharedData), __('client.app_option_intermediate', sharedData)],
        },
        {
            title: __('client.ownerapp_question_marpolo_anex_iii', sharedData),
            name: 'marpol_annexiii',
            checks: [__('client.app_option_initial', sharedData), __('client.app_option_remewal', sharedData)],
        },
        {
            title: __('client.ownerapp_question_marpolo_anex_v', sharedData),
            name: 'marpol_annexv',
            checks: [__('client.app_option_initial', sharedData), __('client.app_option_remewal', sharedData)],
        },
        {
            title: __('client.ownerapp_question_marpolo_anex_vi', sharedData),
            name: 'marpol_annex_vi',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_annual', sharedData)],
        },
        {
            title: __('client.ownerapp_question_energy_efficiency', sharedData),
            name: 'energy_efficiency',
            checks: [__('client.app_option_initial', sharedData), __('client.app_option_remewal', sharedData)],
        },
        {
            title: __('client.ownerapp_question_energy_iappc', sharedData),
            name: 'engine_iopc',
            checks: [__('client.app_option_initial', sharedData), __('client.app_option_remewal', sharedData)],
        },
        {
            title: __('client.ownerapp_question_fishing_vessel', sharedData),
            name: 'fishing_vessel',
            checks: [__('client.app_option_initial', sharedData), __('client.app_option_annual', sharedData), __('client.app_option_remewal', sharedData)],
        },
        {
            title: __('client.ownerapp_question_tonage_certificate', sharedData),
            name: 'tonnage_certificate',
            checks: [__('client.app_option_stydy', sharedData), __('client.app_option_reissuance', sharedData)],
        },
        {
            title: __('client.ownerapp_question_solid_bulk_cargoes', sharedData),
            name: 'solid_bulk_cards',
            checks: [__('client.app_option_a', sharedData), __('client.app_option_b', sharedData), __('client.app_option_c', sharedData)],
        },
        {
            title: __('client.ownerapp_question_dangerous_goods', sharedData),
            name: 'dangerous_goods',
            checks: [__('client.app_option_initial', sharedData), __('client.app_option_annual', sharedData)],
        },
        {
            title: __('client.ownerapp_question_doc', sharedData),
            name: 'doc',
            checks: [__('client.app_option_interim', sharedData), __('client.app_option_initial', sharedData), __('client.app_option_annual', sharedData), __('client.app_option_remewal', sharedData)],
        },
        {
            title: __('client.ownerapp_question_smc', sharedData),
            name: 'smc',
            checks: [__('client.app_option_interim', sharedData), __('client.app_option_initial', sharedData), __('client.app_option_intermediate', sharedData), __('client.app_option_renewal_additional', sharedData)],
        },
        {
            title: __('client.ownerapp_question_isps_on_board_verification', sharedData),
            name: 'isps_on_board_verification',
            checks: [__('client.app_option_interim', sharedData), __('client.app_option_initial', sharedData), __('client.app_option_intermediate', sharedData), __('client.app_option_renewal_additional', sharedData)],
        },
        {
            title: __('client.ownerapp_question_mlc_2006', sharedData),
            name: 'mlc_2006',
            checks: [__('client.app_option_interim', sharedData), __('client.app_option_initial', sharedData), __('client.app_option_intermediate', sharedData), __('client.app_option_remewal', sharedData)],
        },
        {
            title: __('client.ownerapp_question_ballast_water', sharedData),
            name: 'ballast_water',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_annual', sharedData), __('client.app_option_intermediate', sharedData)],
        },
        {
            title: __('client.ownerapp_question_antifouling_survey', sharedData),
            name: 'antifouling_survey',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_reissuance', sharedData)],
        },
        {
            title: __('client.ownerapp_question_exemption', sharedData),
            name: 'exemption',
            checks: [__('client.app_option_request', sharedData)],
        },
        {
            title: __('client.ownerapp_question_cargo_ship_safety_under_500_grt', sharedData),
            name: 'cargo_ship_safety_under_500_grt',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_annual', sharedData), __('client.app_option_intermediate', sharedData)],
        },
        {
            title: __('client.ownerapp_question_seaworthiness', sharedData),
            name: 'seaworthiness',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_annual', sharedData), __('client.app_option_intermediate', sharedData)],
        },
        {
            title: __('client.ownerapp_question_hsc_dsc_safety', sharedData),
            name: 'hsc_dsc_safety',
            checks: [__('client.app_option_remewal', sharedData), __('client.app_option_annual', sharedData), __('client.app_option_intermediate', sharedData)],
        },
        // {
        //     title: __('client.ownerapp_question_manual approval', sharedData),
        //     name: 'manual_approval',
        //     checks: [__('client.app_option_approval', sharedData)],
        // },
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


    const [formSubmitted, setFormSubmitted] = useState(false);
    // let checkbox_approval = false;
    function handleSubmit(e) {
        e.preventDefault()
        let validForm = true
        let validFormsubmit = true
        let form = document.ownerapplication
        for (const key in values) {
            if (form[key].value == "") {
                validForm = false
            }
        }
        if (!form.manual_approval.checked) {
            validFormsubmit = false
            setFormSubmitted(true);
        } else {
            setFormSubmitted(false);
        }
        if (!validForm) {
            Swal.fire({
                title: 'შეცდომა',
                text: 'გთხოვთ შეავსოთ ყველა ველი',
                icon: 'fail',
                confirmButtonText: 'გასაგებია'
            })
        } else if (validFormsubmit) {
            Inertia.post(route('client.documentations.sendapplication'), values)
            Swal.fire({
                title: 'წარმატებით დაემატა',
                text: '',
                icon: 'success',
                confirmButtonText: 'გასაგებია'
            })
            setTimeout(() => {
                location.reload()
            }, 1500);
        }
    }


    return (
        <Layout seo={seo}>
            <div className="documents teamPage careerPage">
                <div className="wrapper">
                    <div className="font45 blue">
                        {/* გემთმფლობელის აპლიკაცია */}
                        {__('client.ownerapp_header_main_text', sharedData)}
                    </div>
                    <PagePath
                        location1={__('client.nav_home', sharedData)}
                        location2={__('client.nav_documentation', sharedData)}
                        location3={__('client.nav_office', sharedData)}
                    />
                    <p>
                        {/* Dear Sirs, <br />
                        Please proceed with classification/statutory survey */}
                        {renderHTML(__('client.ownerapp_dear_sirs_please_proceed', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                    </p>
                    <form name='ownerapplication' onSubmit={handleSubmit}>
                        <div className="flex main">
                            <div className="inputs">

                                <div className="underline uppercase head">
                                    {/* FOR ALL SHIPS */}
                                    {__('client.ownerapp_for_all_ships', sharedData)}
                                </div>
                                <div className="app_inputs">
                                    <input type="text" id='name_of_ship' name='name_of_ship' placeholder={__('client.ownerapp_form_name_of_ship', sharedData)} onChange={handleChange} />
                                    <input type="text" id='ex_names' name='ex_names' placeholder={__('client.ownerapp_form_ex_names', sharedData)} onChange={handleChange} />
                                    <input type="number" id='imo_no' name='imo_no' placeholder={__('client.ownerapp_form_imo_no', sharedData)} onChange={handleChange} />
                                    <input type="text" name='type' id='type' placeholder={__('client.ownerapp_form_type', sharedData)} onChange={handleChange} />
                                    <input type="text" placeholder={__('client.ownerapp_form_exitig_flag', sharedData)} name="existing_flag" id='existing_flag' onChange={handleChange} />
                                    <input type="text" placeholder={__('client.ownerapp_form_call_sign', sharedData)} name="call_sign" id='call_sign' onChange={handleChange} />
                                    <div className="grid3">
                                        <input type="text" placeholder={__('client.ownerapp_form_grt', sharedData)} name="grt" id='grt' onChange={handleChange} />
                                        <input type="text" placeholder={__('client.ownerapp_form_nrt', sharedData)} name="nrt" id='nrt' onChange={handleChange} />
                                        <input type="text" placeholder={__('client.ownerapp_form_dwt', sharedData)} name="dwt" id='dwt' onChange={handleChange} />
                                    </div>
                                    <input type="text" placeholder={__('client.ownerapp_form_date_keel_laid', sharedData)} name="date_keel_laid" id='date_keel_laid' onChange={handleChange} />
                                    <input type="text" placeholder={__('client.ownerapp_form_build', sharedData)} name="build" id='build' onChange={handleChange} />
                                    <input type="text" placeholder={__('client.ownerapp_form_framing_system', sharedData)} name="framing_system" id='framing_system' onChange={handleChange} />
                                    <input type="text" placeholder={__('client.ownerapp_form_builders', sharedData)} name="builders" id='builders' onChange={handleChange} />
                                    <div className="grid2">
                                        <input type="text" placeholder={__('client.ownerapp_form_loa', sharedData)} name="loa" id='loa' onChange={handleChange} />
                                        <input type="text" placeholder={__('client.ownerapp_form_lpp', sharedData)} name="lpp" id='lpp' onChange={handleChange} />
                                    </div>
                                    <div className="grid2">
                                        <input type="text" placeholder={__('client.ownerapp_form_breath', sharedData)} name="breath" id='breath' onChange={handleChange} />
                                        <input type="text" placeholder={__('client.ownerapp_form_depth', sharedData)} name="depth" id='depth' onChange={handleChange} />
                                    </div>
                                    <input type="text" placeholder={__('client.ownerapp_form_main_engine_builders', sharedData)} name="main_engine_builders" id='main_engine_builders' onChange={handleChange} />
                                    <div className="grid2">
                                        <input type="text" placeholder={__('client.ownerapp_form_type', sharedData)} name="type2" id='type2' onChange={handleChange} />
                                        <input type="text" placeholder={__('client.ownerapp_form_bhp', sharedData)} name="bhp" id='bhp' onChange={handleChange} />
                                    </div>
                                    <input type="text" placeholder={__('client.ownerapp_form_number_and_type_of_generators', sharedData)} name="number_and_type_of_generators" id='number_and_type_of_generators' onChange={handleChange} />
                                    <input type="text" placeholder={__('client.ownerapp_form_cargogear', sharedData)} name='cargogear' id='cargogear' onChange={handleChange} />
                                    <input type="text" placeholder={__('client.ownerapp_form_owning_company', sharedData)} name='owning_company' id='owning_company' onChange={handleChange} />
                                    <input type="text" placeholder={__('client.ownerapp_form_managing_company', sharedData)} name='managing_company' id='managing_company' onChange={handleChange} />
                                    <input type="text" placeholder={__('client.ownerapp_form_place_date', sharedData)} name='place_date' id='place_date' onChange={handleChange} />
                                    <input type="text" placeholder={__('client.ownerapp_form_name_of_applicant', sharedData)} name='name_of_applicant' id='name_of_applicant' onChange={handleChange} />
                                    <input type="date" value={today} readOnly />
                                </div>
                            </div>

                            <div className="checkboxes">
                                <div className="underline uppercase head">
                                    {/* Surveys requested */}
                                    {__('client.ownerapp_surveys_requested', sharedData)}
                                    <span>
                                        {/* Check whatever is applicable* */}
                                        {__('client.ownerapp_check_whatever_is_applicable', sharedData)}
                                    </span>
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
                                        <input type="checkbox" name="manual_approval" id="manual_approval" onChange={handleChange} />
                                        <label htmlFor="terms_conditions">
                                            {/* By Checking this Box I Accapt Terms and Conditions */}
                                            {__('client.app_option_approval', sharedData)}
                                        </label>
                                        {formSubmitted &&
                                            <p className="alert-danger p-1 mt-1">accept this term</p>
                                        }
                                    </div>
                                    <SendButton text="Send Now" type='submit' />
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="required_docs">
                        {/* Please send us with application form following Documents:
                        <ul>
                            <li>1. Latest Survey Status</li>
                            <li>2. Latest Ship Construction Certificate</li>
                            <li>3. Flag Registration Letter</li>
                        </ul> */}

                        {renderHTML(__('client.app_after_form_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}


                        <a href="#">
                            <img src='/assets/images/icons/contact/mail.svg' alt="" />
                            <span>
                                {/* stat@geolloyd.com */}
                                {info.email.value ? info.email.value : ""}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </Layout >
    );
};
export default OwnerApplication;
