import React, { useState } from 'react'
import { PagePath, SendButton } from "../../components/SmallComps/SmallComps";
import "./Documents.css";
import Layout from "../../Layouts/Layout";
import { Inertia } from '@inertiajs/inertia'
import Swal from 'sweetalert2'
import {usePage} from "@inertiajs/inertia-react";

const Evaluation = ({ seo, success }) => {
    const sharedData = usePage().props.localizations;
    const renderHTML = (rawHTML) => React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const Swal = require('sweetalert2')

    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;

    const [values, setValues] = useState({
        company_name: "",
        answer_1: "",
        answer_2: "",
        answer_3: "",
        answer_4: "",
        answer_5: "",
        answer_6: "",
        answer_7: "",
        answer_8: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post(route('client.documentations.rateservices'), values)
    }

    const scale = [1, 2, 3, 4, 5];
    const satisfaction = ["Excellent", "Very Good", "Good", "Fair", "Poor"];
    if (success) {
        Swal.fire({
            title: 'success!',
            text: 'წარმატებით დაემატა',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }
    return (
        <Layout seo={seo}>
            <div className="documents teamPage careerPage evaluation">
                <div className="wrapper">
                    <div className="font45 blue">{renderHTML(__('client.evaluation_header', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}</div>
                    <PagePath
                        location1={__('client.nav_home',sharedData)}
                        location2={__('client.nav_documentation',sharedData)}
                        location3={__('client.nav_evaluation',sharedData)}
                    />
                    <div className="content">
                        <p className="op05 margin_bottom">
                            {renderHTML(__('client.evaluation_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                        </p>
                        <form onSubmit={handleSubmit}>
                            <input id='company_name' type="text" placeholder="Organization/Company name" onChange={handleChange} />
                            <input id='created_at' type="date" className="margin_bottom" value={today} />
                            <p>
                                On a scale of 1 to 5 where 1 represents "Extremely dissatisfied" and
                                5 represents "Extremely Satisfied," how would you rate your level of
                                overall satisfaction with Maritime Lloyd as a service supplier?
                            </p>
                            <div className="flex rating scale margin_bottom">
                                {scale.map((item, index) => {
                                    return (
                                        <div key={index} className="radio num">
                                            <label className="op05" htmlFor={`rate_1_${index}`}>
                                                {item}
                                            </label>
                                            <input type="radio" name="rate_1"
                                                // id={`rate_1_${index}`}
                                                required
                                                id='answer_1'
                                                value={`${++index}`}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <p>
                                Why do you say that? What specifically are you satisfied or
                                dissatisfied with Maritime Lloyd?
                            </p>
                            <input
                                id='answer_2'
                                type="text"
                                placeholder="Enter response here"
                                className="margin_bottom"
                                onChange={handleChange}
                            />
                            <p>
                                How likely are you to recommend Maritime Lloyd to your business
                                partners/other ship owners? Would you say the chances are …
                            </p>
                            <div className=" rating satis margin_bottom">
                                {satisfaction.map((item, index) => {
                                    return (
                                        <div key={index} className="radio num">
                                            <input type="radio" name="rate_2"
                                                //  id={`rate_2_${index}`}
                                                required
                                                id='answer_3'
                                                value={item}
                                                onChange={handleChange}
                                            />
                                            <label className="op05" htmlFor={`rate_2_${index}`}>
                                                {item}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                            <p>
                                How likely are you to repurchase services from Maritime Lloyd? Would
                                you say the chances are …
                            </p>
                            <div className=" rating satis margin_bottom">
                                {satisfaction.map((item, index) => {
                                    return (
                                        <div key={index} className="radio num">
                                            <input type="radio" name="rate_3"
                                                // id={`rate_3_${index}`}
                                                required
                                                id='answer_4'
                                                value={item}
                                                onChange={handleChange}
                                            />
                                            <label className="op05" htmlFor={`rate_3_${index}`}>
                                                {item}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                            <p>
                                How would you rate the overall quality of your relationship with
                                Maritime Lloyd, considering all of your experiences with them? Would
                                you say it is
                            </p>
                            <div className=" rating satis margin_bottom">
                                {satisfaction.map((item, index) => {
                                    return (
                                        <div key={index} className="radio num">
                                            <input type="radio" name="rate_4"
                                                // id={`rate_4_${index}`}
                                                required
                                                id='answer_5'
                                                value={item}
                                                onChange={handleChange}
                                            />
                                            <label className="op05" htmlFor={`rate_4_${index}`}>
                                                {item}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                            <p>
                                On a scale of 1 to 5 where 1 represents "Extremely dissatisfied" and
                                5 represents "Extremely Satisfied," how would you rate your level of
                                satisfaction with Maritime Lloyd in regards to customer service?
                            </p>
                            <div className="flex rating scale margin_bottom">
                                {scale.map((item, index) => {
                                    return (
                                        <div key={index} className="radio num">
                                            <label className="op05" htmlFor={`rate_5_${index}`}>
                                                {item}
                                            </label>
                                            <input type="radio" name="rate_5"
                                                // id={`rate_5_${index}`}
                                                required
                                                id='answer_6'
                                                value={++index}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <p>
                                On a scale of 1 to 5 where 1 represents "Extremely dissatisfied" and
                                5 represents "Extremely Satisfied," how would you rate your level of
                                satisfaction with Maritime Lloyd in regards to price?
                            </p>
                            <div className="flex rating scale margin_bottom">
                                {scale.map((item, index) => {
                                    return (
                                        <div key={index} className="radio num">
                                            <label className="op05" htmlFor={`rate_6_${index}`}>
                                                {item}
                                            </label>
                                            <input type="radio" name="rate_6"
                                                // id={`rate_6_${index}`}
                                                required
                                                id='answer_7'
                                                value={++index}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <p>
                                On a scale of 1 to 5 where 1 represents "Extremely dissatisfied" and
                                5 represents "Extremely Satisfied," how would you rate your level of
                                satisfaction with Maritime Lloyd in regards to value?
                            </p>
                            <div className="flex rating scale margin_bottom">
                                {scale.map((item, index) => {
                                    return (
                                        <div key={index} className="radio num">
                                            <label className="op05" htmlFor={`rate_7_${index}`}>
                                                {item}
                                            </label>
                                            <input type="radio" name="rate_7"
                                                // id={`rate_7_${index}`}
                                                required
                                                id='answer_8'
                                                value={++index}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="uppercase">
                                {__('client.quest_bottom_txt1',sharedData)}
                            </div>
                            <p className="op05 margin_bottom">
                                {__('client.quest_bottom_txt2',sharedData)}
                            </p>
                            <SendButton text={__('client.quest_send',sharedData)} />
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Evaluation;
