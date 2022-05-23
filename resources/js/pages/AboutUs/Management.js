import React from "react";
import { DlPdf, PagePath } from "../../components/SmallComps/SmallComps";
import Layout from "../../Layouts/Layout";
import "./AboutUs.css";
import { Link, usePage } from "@inertiajs/inertia-react";


const Management = ({ seo, docs }) => {

    const sharedData = usePage().props.localizations;
    const renderHTML = (rawHTML) => React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });

    console.log(docs)
    return (
        <Layout seo={seo}>
            <div className="aboutPage wrapper padding_top">
                <div className="container">
                    <div className="font45 blue">
                        {renderHTML(__('client.aboutus_managment_header', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                    </div>
                    <PagePath
                        location1={__('client.nav_home',sharedData)}
                        location2={__('client.nav_aboutus',sharedData)}
                        location3={__('client.nav_managment',sharedData)}
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

                            {renderHTML(__('client.aboutus_managment_main_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}


                    </div>
                    <div className="blue" style={{ marginBottom: "20px" }}>
                        {__('client.aboutus_managment_docs', sharedData)}
                    </div>
                    {docs.map((doc , index) => {
                        return <DlPdf model="Page" name={doc} />
                    })}

                </div>
            </div>
        </Layout>
    );
};

export default Management;
