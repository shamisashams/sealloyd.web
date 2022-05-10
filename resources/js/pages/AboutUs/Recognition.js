import React from "react";
import { DlPdf, PagePath } from "../../components/SmallComps/SmallComps";
import "./AboutUs.css";
// import Flag1 from "../../assets/images/icons/flags/1.png";
// import Flag2 from "../../assets/images/icons/flags/2.png";
// import Flag3 from "../../assets/images/icons/flags/3.png";
// import Flag4 from "../../assets/images/icons/flags/4.png";
// import Flag5 from "../../assets/images/icons/flags/5.png";

const Recognition = () => {
    const countries = [
        {
            flag: Flag1,
            name: "Georgia ",
            span: "- Non conventional vessels",
        },
        {
            flag: Flag2,
            name: "Sierra Leone",
        },
        {
            flag: Flag3,
            name: "Comoros",
        },
        {
            flag: Flag4,
            name: "Tanzania",
        },
        {
            flag: Flag5,
            name: "Moldova",
        },
    ];
    return (
        <div className="aboutPage wrapper padding_top">
            <div className="container">
                <div className="font45 blue">
                    რაიმე ტექსტი დროშების <br />
                    აღიარების შესახებ
                </div>
                <PagePath
                    location1="მთავარი"
                    location2="ჩვენ შესახებ"
                    location3="დროშის აღიარებები"
                />
                <div className="content" style={{ marginBottom: "50px" }}>
                    <p>
                        ლორემ იპსუმ ქვეყნიური თვითიდენტიფიკაციისა მესამის რიტუალური,
                        მიწუნებს სასახლეებზე მრავლობით. განიცდიდი მებრძოლები, ზეციური
                        რეტროსპექტივას დეტალების გაგაკეთებინებს წწერა, ქადილით მზაკვრობისა
                        ჩაესვენა მეთვრამეტე რათა მართალსა. შესახვედრათ შემაშინა შეგაწუხებს
                        ღიჭინი, შესაბრალისი ეპისკოპოსებსა, არეალს გაგაკეთებინებს ახრამუნებდა
                        სიამაყე შშავს. ქადილით მისძახა ეპისკოპოსებსა ბრინკაი ვიღებდი
                        წინამძღოლის ყურთმაჯები ეამა არეალს, მკალავიშვილის მეთვრამეტე.
                    </p>
                    <p>
                        გამოუყვია კარისკაცი ქალბატონსაც გვეძებდით ყურთმაჯები ჰანსმა
                        შესაბრალისი მომთხოვა შეთითხნილი, გაჩერდებითო ვედრებას ღიჭინი.
                        მრავლობით ყურთმაჯები დავიბრუნო ივახშმეს უჩქეფს საბრძოლველად
                        მკათათვის იცოხებოდნენ კარისკაცი.
                    </p>
                </div>
                <h5>დროშები</h5>
                <div style={{ display: "block" }}>
                    {countries.map((country, index) => {
                        return (
                            <div className="country" key={index}>
                                <img src='/assets/images/ports/1.png' alt="" />
                                <h6>{country.name}</h6>
                                {country.span ? <span>{country.span}</span> : ""}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Recognition;
