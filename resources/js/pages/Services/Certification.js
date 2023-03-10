import React from "react";
import { PagePath } from "../../components/SmallComps/SmallComps";
import Layout from "../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";
import "./Services.css";

// import Img1 from "../../assets/images/ports/4.png";
import "../AboutUs/AboutUs.css";
const Certification = ({ seo, images }) => {
    const sharedData = usePage().props.localizations;
    const renderHTML = (rawHTML) =>
        React.createElement("p", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });

    return (
        <Layout seo={seo}>
            <div className="aboutPage wrapper padding_top">
                <div className="container">
                    <div className="font45 blue">
                        {/* {renderHTML(
                            __(
                                "client.services_certification_header",
                                sharedData
                            ).replace(/(?:\r\n|\r|\n)/g, "<br>")
                        )} */}
                        {renderHTML(__('client.services_certificationheader', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}

                    </div>
                    <PagePath
                        location1={__("client.nav_home", sharedData)}
                        location2={__("client.nav_services", sharedData)}
                        location3={__("client.nav_certifications", sharedData)}
                    />
                    <img src={images[0]} alt="" />
                    <div className="content">
                        {/* <p>
                            ლორემ იპსუმ ქვეყნიური თვითიდენტიფიკაციისა მესამის რიტუალური
                            გაუშტერდათ, მიწუნებს სასახლეებზე მრავლობით. გაუშტერდათ განიცდიდი
                            მებრძოლები, ზეციური რეტროსპექტივას დეტალების გაგაკეთებინებს წწერა,
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
                        <p>
                            მიგიღძვია გგურულს დეტალებზე გაიღვიძებს შესახედაობისანი მოშორებულნი.
                            დედასავით გაიფაჩუნა მითითებით შეიბრალებდა, უდარდელობის უზრდელობენ
                            კისკისებდა, გაჯობოს კომკავშირულ მთავრობამა ეთქვათ ოცნებაში
                            ცნობისმოყვარეობის. დეტალებზე დაწესებულებებში სტურუა შეჰყმუის სიცილს
                            გაატანეს საჭმელები ორთქმავალი ანგელოზი წამყვანები ოთარ დედასავით
                            აუძგერა გქონდეს. იცოცხლოს ფლოტსა იმგვარი, ჭარბევად მოღალატურად,
                            განიკითხავთ ცნობისმოყვარეობის მითითებით პრეზიდენტობას საჭმელები.
                            მონაცვლეობა შეუმჩნეველი ერთხანს საქციელს იმგვარი უდარდელობის
                            დამიძახოს ოცნებაში გგურულს. სათათრემდინ დდაასუფთავე მომისმინე
                            წამოგცდება ფლოტსა გქონდეს შესახედაობისანი.
                        </p>
                        <p>
                            გგურულს დიდგულად მთავრობამა გაწურულმა ემსგავსება სიბრტყეებად,
                            მიგიღძვია წამოსულიყვნენ ოცნებაში ავალა ჩილიკა. თავმჯდომარემ შეჰყმუის
                            ცნობისმოყვარეობის უსამართლობაში, შეიბრალებდა მოსწყურდა წიგნიქექია
                            ბაასი, შეუმჩნეველი, გგურულს პატივით ერთხანს ფრინველის. მიგიღძვია
                            დაეტაკა მითქვამს, იყურებოდნენ გქონდეს გგურულს დაწესებულებებში.
                            ისედაც კომკავშირულ დდაასუფთავე სიცილს გულშია დიდგულად შევატყვე
                            უზრდელობენ ეთქვათ მოსწყურდა ღმუილი მოშორებულნი მითითებით დამიძახოს
                            აღიარებ.
                        </p>
                        <p>
                            პპოლიტიკურად ადვოკატობას დამიხედე, გაცემა შევიგინებდი სალმან
                            იქადაგებს დაქცეულ მეზღვაურები მამაზედ ჰობსი უძვირფასესად, დასთმობდა
                            მოგცენ. ბრძანებაა მოუჭირა ამაღლდებიან ადვოკატობას შეფასებული ღიაა.
                            დამიხედე ამოტივტივდებაო მარტოკა ღიჯინი მათთაგან, მოუჭირა იუბილარს
                            იქადაგებს ემატებიან ბურჟუები გულგახეთქილნი.
                        </p> */}

                        {/* {renderHTML(
                            __(
                                "client.services_certification_main_text",
                                sharedData
                            ).replace(/(?:\r\n|\r|\n)/g, "<br>")
                        )} */}
                        {renderHTML(__('client.services_certification_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Certification;
