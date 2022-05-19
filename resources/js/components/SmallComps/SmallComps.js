import React from "react";
import "./SmallComps.css";
// import pdfIcon from "../../assets/images/icons/other/pdf.png";
// import dl from "../../assets/images/icons/other/dl.png";
// import send from "../../assets/images/icons/team/send.svg";

export const PagePath = (props) => {
    return (
        <div className="page_path flex">
            <span className="op07">{props.location1}</span>
            <svg
                className="op07"
                xmlns="http://www.w3.org/2000/svg"
                width="7.749"
                height="13.553"
                viewBox="0 0 7.749 13.553"
            >
                <path
                    id="Icon_ionic-ios-arrow-forward"
                    data-name="Icon ionic-ios-arrow-forward"
                    d="M16.66,12.971,11.531,7.846a.964.964,0,0,1,0-1.368.977.977,0,0,1,1.372,0l5.811,5.807a.967.967,0,0,1,.028,1.336l-5.835,5.847A.969.969,0,1,1,11.535,18.1Z"
                    transform="translate(-11.246 -6.196)"
                />
            </svg>
            <span className="op07">{props.location2}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7.749"
                height="13.553"
                viewBox="0 0 7.749 13.553"
            >
                <path
                    id="Icon_ionic-ios-arrow-forward"
                    data-name="Icon ionic-ios-arrow-forward"
                    d="M16.66,12.971,11.531,7.846a.964.964,0,0,1,0-1.368.977.977,0,0,1,1.372,0l5.811,5.807a.967.967,0,0,1,.028,1.336l-5.835,5.847A.969.969,0,1,1,11.535,18.1Z"
                    transform="translate(-11.246 -6.196)"
                />
            </svg>
            <span>{props.location3}</span>
        </div>
    );
};

export const DlPdf = ({ name }) => {
    return (
        <a href={'/storage/Customer/' + name.fileable_id + '/files/' + name.title} className="flex dl_pdf">
            <img src='/assets/images/icons/other/pdf.png' alt="" />
            <div>
                <p>{name.title}</p>
                <span>
                    <img src='/assets/images/icons/other/dl.png' alt="" />
                    გადმოწერა
                </span>
            </div>
        </a>
    );
};

export const SendButton = ({ onClick, text, type }) => {
    return (
        <button className="send_button" onClick={onClick} type={type}>
            <img src='/assets/images/icons/team/send.svg' alt="" />
            {text}
        </button>
    );
};
