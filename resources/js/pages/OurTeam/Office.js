import React from "react";
import { PagePath } from "../../components/SmallComps/SmallComps";
// import Img1 from "../../assets/images/team/1.png";
// import Img2 from "../../assets/images/team/2.png";
// import Img3 from "../../assets/images/team/3.png";
// import Img4 from "../../assets/images/team/4.png";
import Layout from "../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";

import "./OurTeam.css";

const Office = ({ seo, staff }) => {
    const sharedData = usePage().props.localizations;
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

    // const members = [
    //     {
    //         img: '/assets/images/team/1.png',
    //         name: "სახელი გვარი",
    //         position: "პოზიცია",
    //     },
    //     {
    //         img: '/assets/images/team/1.png',
    //         name: "სახელი გვარი",
    //         position: "პოზიცია",
    //     },
    //     {
    //         img: '/assets/images/team/1.png',
    //         name: "სახელი გვარი",
    //         position: "პოზიცია",
    //     },
    //     {
    //         img: '/assets/images/team/1.png',
    //         name: "სახელი გვარი",
    //         position: "პოზიცია",
    //     },
    // ];
    return (
        <Layout seo={seo}>
            <div className="teamPage">
                <div className="wrapper">
                    <div className="font45 blue">ბათუმის სათაო ოფისი</div>
                    <PagePath
                        location1="მთავარი"
                        location2="ჩვენი გუნდი"
                        location3="ბათუმის სათაო ოფისი"
                    />
                    {/* <p>
                        Our team is comprised of leading industry experts with specialized
                        technical trainings and experience.  This allows us to provide
                        best-in-class value at an independent cost structure.
                    </p> */}
                    <p>
                        {renderHTML(__('client.ourteam_office_maint_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                    </p>
                    <div className="office_grid">
                        {staff.map((member, index) => {
                            return (
                                <div className="team_member" key={index}>
                                    <div className="img">
                                        <img src='/assets/images/team/1.png' alt="" />
                                    </div>
                                    <h4>{member.name}</h4>
                                    <p className="blue">{member.position}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Office;
