import React from "react";
import PortsMap from "../../components/PortsMap/PortsMap";
import { PagePath } from "../../components/SmallComps/SmallComps";
import Layout from "../../Layouts/Layout";
import "./Inspectors.css";

const Inspectors = ({ seo }) => {
    return (
        <Layout seo={seo} >
            <div className="inspectors">
                <PortsMap />
                <div className="wrapper">
                    <div className="content">
                        <div className="font45 title">აღიარებული ინსპექტორები</div>
                        <PagePath
                            location1="მთავარი"
                            location2="ჩვენი გუნდი"
                            location3="აღიარებული ინსპექტორები"
                        />
                        <div className="bottom">
                            <div className="font45">
                                აღიარებული <br />
                                ინსპექტორები
                            </div>
                            <p>
                                ლორემ იპსუმ ქვეყნიური თვითიდენტიფიკაციისა მესამის რიტუალური
                                გაუშტერდათ, მიწუნებს სასახლეებზე მრავლობით. გაუშტერდათ განიცდიდი
                                მებრძოლები, ზეციური რეტროსპექტივას დეტალების გაგაკეთებინებს წერა,
                                ქადილით მზაკვრობისა ჩაესვენა მეთვრამეტე რათა მართალსა. შესახვედრათ
                                შემაშინა შეგაწუხებს ღიჭინი, შესაბრალისი ეპისკოპოსებსა, არეალს
                                გაგაკეთებინებს ახრამუნებდა სიამაყე შშავს. ქადილით მისძახა
                                ეპისკოპოსებსა ბრინკაი ვიღებდი წინამძღოლის ყურთმაჯები ეამა არეალს,
                                მკალავიშვილის მეთვრამეტე.
                            </p>
                            <p>
                                გამოუყვია კარისკაცი ქალბატონსაც გვეძებდით ყურთმაჯები ჰანსმა
                                შესაბრალისი მომთხოვა შეთითხნილი, გაჩერდებითო ვედრებას ღიჭინი.
                                მრავლობით ყურთმაჯები დავიბრუნო ივახშმეს უჩქეფს საბრძოლველად
                                მკათათვის იცოხებოდნენ კარისკაცი.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Inspectors;
