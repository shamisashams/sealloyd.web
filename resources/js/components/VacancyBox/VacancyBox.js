import React from "react";
// import doc from "../../assets/images/icons/team/doc.svg";
// import time from "../../assets/images/icons/team/time.svg";
// import date from "../../assets/images/icons/team/date.svg";
// import upload from "../../assets/images/icons/team/upload.svg";
// import share from "../../assets/images/icons/team/share.svg";
// import send from "../../assets/images/icons/team/send.svg";
// import { Link } from "react-router-dom";
import { Link, usePage, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import "./VacancyBox.css";
import { DlPdf } from "../SmallComps/SmallComps";

export const VacancyBox = (props) => {

    const sharedData = usePage().props.localizations;

    return (
        <div className="vacancy_box " data-aos="fade-up">
            <div className="head flex">
                <div className="flex">
                    <div className="doc flex centered">
                        <img src='/assets/images/icons/team/doc.svg' alt="" />
                    </div>
                    <div>
                        {props.title}
                        <p>{props.subtitle}</p>
                    </div>
                </div>
                <div className="time" style={{ color: "#798395" }}>
                    <img className="inline_img" src='/assets/images/icons/team/time.svg' alt="" />
                    {props.time}
                </div>
            </div>
            <div className="bottom flex">
                <div className="date flex">
                    <img className="inline_img" src='/assets/images/icons/team/date.svg' alt="" />
                    <p>{__('client.vacancy_published',sharedData)} {props.date}</p>
                </div>
                <Link href={props.link} className="details button">
                    {__('client.vacancy_detail_btn',sharedData)}
                </Link>
            </div>
        </div>
    );
};

export const ExtendedVB = (props) => {
    const sharedData = usePage().props.localizations;
    const { data, setData, post, progress } = useForm({
        doc: null,
        vacancy_id: props.vacancyId
    })
    function submit(e) {
        e.preventDefault()
        post(route('client.app-upload'))
    }
    return (
        <div className="vacancy_box extended" data-aos="fade-right">
            <div className="head flex">
                <div className="flex">
                    <div className="doc flex centered">
                        <img src='/assets/images/icons/team/doc.svg' alt="" />
                    </div>
                    <div>
                        {props.title}
                        <p>{props.subtitle}</p>
                    </div>
                </div>
                <div className="time" style={{ color: "#798395" }}>
                    <img className="inline_img" src='/assets/images/icons/team/time.svg' alt="" />
                    {props.time}
                </div>
            </div>
            <p>{__('client.job_description',sharedData)}</p>
            <p className="paragraph section">{props.paragraph}</p>
            <p>{__('client.job_skills',sharedData)}</p>
            <div className="skills section">
                {props.skills.map((skill, index) => {
                    return (
                        <div className="skill" key={index}>
                            {skill.title}
                        </div>
                    );
                })}
            </div>
            <p>{__('client.job_remuneration',sharedData)}</p>
            <div className="remuneration section">
                {/*{props.salary} ₾ <span>({props.salaryInfo})</span>*/}
                {props.remuneration}
            </div>
            <div className="section">

                <DlPdf model="Vacancy" name={props.pdfName} />
            </div>

            <form id="upload_resume_f">
                <input type="file" filename={data.doc} onChange={e => setData("doc", e.target.files[0])} />


            </form>

            <div className="section">
                <button onClick={submit} className="button grey">
                    <img className="inline_img" src='/assets/images/icons/team/upload.svg' alt="" />
                    {__('client.resume_upload',sharedData)} <span>({__('client.resume_upload_description',sharedData)})</span>
                </button>

                <button className="button">
                    <img className="inline_img" src='/assets/images/icons/team/send.svg' alt="" />
                    {__('client.send_resume',sharedData)}
                </button>
            </div>

            <div className="bottom flex">
                <div className="date flex">
                    <img className="inline_img" src='/assets/images/icons/team/date.svg' alt="" />
                    <p>{__('client.vacancy_published',sharedData)} {props.date}</p>
                </div>
                <div className="share flex">
                    <img className="inline_img" src='/assets/images/icons/team/share.svg' alt="" />
                    <p>{__('client.vacancy_share',sharedData)}</p>
                </div>
            </div>
        </div>
    );
};
