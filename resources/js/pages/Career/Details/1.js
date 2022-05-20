import React from "react";
import { ExtendedVB } from "../../../components/VacancyBox/VacancyBox";
import "../Career.css";
import { VacancyBox } from "../../../components/VacancyBox/VacancyBox";
import { PagePath } from "../../../components/SmallComps/SmallComps";
import Layout from "../../../Layouts/Layout";
import {usePage} from "@inertiajs/inertia-react";

const CareerDetail1 = ({seo}) => {

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    const {vacancies , vacancy} = usePage().props;

  const otherVacancies = [
    {
      title: "HR სპეციალისტი",
      subtitle: "ადამიანური რესურსების მართვა",
      time: "სრული განაკვეთი",
      date: "23/02/2020",
      link: "/",
    },
    {
      title: "PR მენეჯერი",
      subtitle: "საზოგადოებასთან ურთიერთობის სამსახური",
      time: "ნახევარი განაკვეთი",
      date: "27/01/2016",
      link: "/",
    },
    {
      title: "ბუღალტერი",
      subtitle: "ფინანსური სამსახური",
      time: "სრული განაკვეთი",
      date: "15/06/2021",
      link: "/",
    },
  ];
  const skillList = [
    "მოტივაცია",
    "პუნქტუალურობა",
    "2 წლიანი გამოცდილება",
    "პასუხისმგებლობის მაღალი გრძნობა",
    "განვითარების სურვილი",
    "ინგლისური B2",
  ];

  const skills = vacancy.skills

  return (
      <Layout seo={seo}>
          <div className="teamPage careerPage">
              <div className="wrapper">
                  <div className="font45 blue">კარიერა</div>
                  <PagePath
                      location1="მთავარი"
                      location2="ჩვენი გუნდი"
                      location3="კარიერა"
                  />
                  <div className="career_grid details">
                      <ExtendedVB
                          title={vacancy.title}
                          subtitle={vacancy.sub_title}
                          time={vacancy.time}
                          paragraph={vacancy.description}
                          skills={skills}
                          salary="1500 - 2200"
                          salaryInfo="დამოკიდებულია კანდიდატის შესაძლებლობებზე"
                          remuneration={vacancy.remuneration}
                          date={vacancy.created_at}
                          pdfName={vacancy.docs[0]}
                          vacancyId={vacancy.id}
                      />
                      <div className="other_vacancies">
                          <h4>სხვა ვაკანსიები</h4>
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
          </div>
      </Layout>

  );
};

export default CareerDetail1;
