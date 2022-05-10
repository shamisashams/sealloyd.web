import React from "react";
import { ExtendedVB } from "../../../components/VacancyBox/VacancyBox";
import "../Career.css";
import { VacancyBox } from "../../../components/VacancyBox/VacancyBox";
import { PagePath } from "../../../components/SmallComps/SmallComps";

const CareerDetail1 = () => {
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
  return (
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
            title="HR სპეციალისტი"
            subtitle="ადამიანური რესურსების მართვა"
            time="სრული განაკვეთი"
            paragraph="ლორემ იპსუმ ქვეყნიური თვითიდენტიფიკაციისა მესამის რიტუალური გაუშტერდათ, მიწუნებს სასახლეებზე მრავლობით. გაუშტერდათ განიცდიდი მებრძოლები, ზეციური რეტროსპექტივას დეტალების გაგაკეთებინებს წერა, ქადილით მზაკვრობისა ჩაესვენა მეთვრამეტე რათა მართალსა. "
            skills={skillList}
            salary="1500 - 2200"
            salaryInfo="დამოკიდებულია კანდიდატის შესაძლებლობებზე"
            date=" 23/02/2020"
            pdfName="Application Form for Surveyors"
          />
          <div className="other_vacancies">
            <h4>სხვა ვაკანსიები</h4>
            {otherVacancies.map((box, index) => {
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
    </div>
  );
};

export default CareerDetail1;
