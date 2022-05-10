import React from "react";
import "../OurTeam/OurTeam.css";
import { PagePath } from "../../components/SmallComps/SmallComps";
import { VacancyBox } from "../../components/VacancyBox/VacancyBox";
import "./Career.css";

const Career = () => {
  const vacancies = [
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
    <div className="teamPage careerPage">
      <div className="wrapper">
        <div className="font45 blue">კარიერა</div>
        <PagePath
          location1="მთავარი"
          location2="ჩვენი გუნდი"
          location3="კარიერა"
        />
        <div className="career_grid">
          {vacancies.map((box, index) => {
            return (
              <VacancyBox
                key={index}
                title={box.title}
                subtitle={box.subtitle}
                time={box.time}
                date={box.date}
                link={box.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Career;
