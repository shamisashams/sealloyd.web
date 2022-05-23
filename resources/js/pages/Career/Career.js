import React from "react";
import "../OurTeam/OurTeam.css";
import { PagePath } from "../../components/SmallComps/SmallComps";
import { VacancyBox } from "../../components/VacancyBox/VacancyBox";
import Layout from "../../Layouts/Layout";

import "./Career.css";
import {usePage} from "@inertiajs/inertia-react";

const Career = ({ seo }) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    const {vacancies} = usePage().props;
    console.log(vacancies)
    const _vacancies = [
        {
            title: "HR სპეციალისტი",
            subtitle: "ადამიანური რესურსების მართვა",
            time: "სრული განაკვეთი",
            date: "23/02/2020",
            link: "/career-detail1",
        },
        {
            title: "PR მენეჯერი",
            subtitle: "საზოგადოებასთან ურთიერთობის სამსახური",
            time: "ნახევარი განაკვეთი",
            date: "27/01/2016",
            link: "/career-detail1",
        },
        {
            title: "ბუღალტერი",
            subtitle: "ფინანსური სამსახური",
            time: "სრული განაკვეთი",
            date: "15/06/2021",
            link: "/career-detail1",
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="teamPage careerPage">
                <div className="wrapper">
                    <div className="font45 blue">{renderHTML(__('client.ourteam_career_header', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}</div>
                    <PagePath
                        location1={__('client.nav_home',sharedData)}
                        location2={__('client.nav_ourteam',sharedData)}
                        location3={__('client.nav_career',sharedData)}
                    />
                    <div className="career_grid">
                        {vacancies.map((box, index) => {
                            return (
                                <VacancyBox
                                    key={index}
                                    title={box.title}
                                    subtitle={box.sub_title}
                                    time={box.time}
                                    date={box.created_at}
                                    link={route('client.vacancy.show',box.slug)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Career;
