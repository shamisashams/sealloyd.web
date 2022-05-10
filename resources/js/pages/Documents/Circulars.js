import React from "react";
import { PagePath } from "../../components/SmallComps/SmallComps";
import { DlPdf } from "../../components/SmallComps/SmallComps";
import "./Documents.css";

const Circulars = () => {
  const docList = [
    "დოკუმენტის გრძელი დასახელება რომე...",
    "დოკუმენტის დასახელება",
    "დოკუმენტის დასახელება",
    "დოკუმენტის გრძელი დასახელება რომე...",
    "დოკუმენტის გრძელი დასახელება რომე...",
    "დოკუმენტის დასახელება",
    "დოკუმენტის დასახელება",
    "დოკუმენტის გრძელი დასახელება რომე...",
  ];
  return (
    <div className="documents teamPage careerPage">
      <div className="wrapper">
        <div className="font45 blue">ცირკულარები</div>
        <PagePath
          location1="მთავარი"
          location2="დოკუმენტაცია"
          location3="ცირკულარები"
        />
        <p className="container">
          ლორემ იპსუმ ქვეყნიური თვითიდენტიფიკაციისა მესამის რიტუალური
          გაუშტერდათ, მიწუნებს სასახლეებზე მრავლობით. გაუშტერდათ განიცდიდი
          მებრძოლები, ზეციური რეტროსპექტივას დეტალების გაგაკეთებინებს წერა,
          ქადილით მზაკვრობისა ჩაესვენა მეთვრამეტე რათა მართალსა. შესახვედრათ
          შემაშინა შეგაწუხებს ღიჭინი, შესაბრალისი ეპისკოპოსებსა, არეალს
          გაგაკეთებინებს ახრამუნებდა სიამაყე შშავს. ქადილით მისძახა
          ეპისკოპოსებსა ბრინკაი ვიღებდი წინამძღოლის ყურთმაჯები ეამა არეალს,
          მკალავიშვილის მეთვრამეტე.
        </p>
        <div className="blue">ცირკულარები</div>
        <div className="doc_grid">
          {docList.map((doc, index) => {
            return <DlPdf key={index} name={doc} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Circulars;
