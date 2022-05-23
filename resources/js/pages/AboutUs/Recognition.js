import React from "react";
import { DlPdf, PagePath } from "../../components/SmallComps/SmallComps";
import "./AboutUs.css";
import Layout from "../../Layouts/Layout";
// import Flag1 from "../../assets/images/icons/flags/1.png";
// import Flag2 from "../../assets/images/icons/flags/2.png";
// import Flag3 from "../../assets/images/icons/flags/3.png";
// import Flag4 from "../../assets/images/icons/flags/4.png";
// import Flag5 from "../../assets/images/icons/flags/5.png";
import { Link, usePage } from "@inertiajs/inertia-react";


const Recognition = ({ page, seo }) => {
    const sharedData = usePage().props.localizations;
    const renderHTML = (rawHTML) => React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });

    const countries = [
        {
            flag: '/assets/images/icons/flags/1.png',
            name: "Georgia ",
            span: "- Non conventional vessels",
        },
        {
            flag: '/assets/images/icons/flags/2.png',
            name: "Sierra Leone",
        },
        {
            flag: '/assets/images/icons/flags/3.png',
            name: "Comoros",
        },
        {
            flag: '/assets/images/icons/flags/4.png',
            name: "Tanzania",
        },
        {
            flag: '/assets/images/icons/flags/5.png',
            name: "Moldova",
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="aboutPage wrapper padding_top">
                <div className="container">
                    <div className="font45 blue">
                        {renderHTML(__('client.aboutus_recognition_header', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                    </div>
                    <PagePath
                        location1={__('client.nav_home',sharedData)}
                        location2={__('client.nav_aboutus',sharedData)}
                        location3={__('client.nav_recognition',sharedData)}
                    />
                    <div className="content" style={{ marginBottom: "50px" }}>
                        {/* <p>
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
                        </p> */}

                            {renderHTML(__('client.aboutus_recognition_maint_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}


                    </div>
                    <h5>{__('client.nav_flags',sharedData)}</h5>
                    <div style={{ display: "block" }}>
                        {countries.map((country, index) => {
                            return (
                                <div className="country" key={index}>
                                    <img src={country.flag} />
                                    <h6>{country.name}</h6>
                                    {country.span ? <span>{country.span}</span> : ""}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Recognition;
