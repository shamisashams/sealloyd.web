import React from "react";
// import doc from "../../assets/images/icons/team/doc.svg";
// import time from "../../assets/images/icons/team/time.svg";
// import date from "../../assets/images/icons/team/date.svg";
// import upload from "../../assets/images/icons/team/upload.svg";
// import share from "../../assets/images/icons/team/share.svg";
// import send from "../../assets/images/icons/team/send.svg";
// import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import "./VacancyBox.css";
import { DlPdf } from "../SmallComps/SmallComps";

export const VacancyBox = (props) => {
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
                    <p>გამოქვეყნდა {props.date}</p>
                </div>
                <Link href={props.link} className="details button">
                    დეტალურად
                </Link>
            </div>
        </div>
    );
};

export const ExtendedVB = (props) => {
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
            <p>სამუშაოს აღწერა</p>
            <p className="paragraph section">{props.paragraph}</p>
            <p>სქილები და გამოცდილება</p>
            <div className="skills section">
                {props.skills.map((skill, index) => {
                    return (
                        <div className="skill" key={index}>
                            {skill.title}
                        </div>
                    );
                })}
            </div>
            <p>ანაზღაურება</p>
            <div className="remuneration section">
                {/*{props.salary} ₾ <span>({props.salaryInfo})</span>*/}
                {props.remuneration}
            </div>
            <div className="section">

                <DlPdf model="Vacancy" name={props.pdfName} />
            </div>
            <div className="section">
                <button className="button grey">
                    <img className="inline_img" src='/assets/images/icons/team/upload.svg' alt="" />
                    ატვირთე რეზიუმე <span>(Application Form, CV, Certificates)</span>
                </button>
                <button className="button">
                    <img className="inline_img" src='/assets/images/icons/team/send.svg' alt="" />
                    გაგზავნე განაცხადი
                </button>
            </div>

            <div className="bottom flex">
                <div className="date flex">
                    <img className="inline_img" src='/assets/images/icons/team/date.svg' alt="" />
                    <p>გამოქვეყნდა {props.date}</p>
                </div>
                <div className="share flex">
                    <img className="inline_img" src='/assets/images/icons/team/share.svg' alt="" />
                    <p>გაუზიარე მეგობარს</p>
                </div>
            </div>
        </div>
    );
};
