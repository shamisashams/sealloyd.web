import React from "react";
import { DlPdf, PagePath } from "../../components/SmallComps/SmallComps";
import Layout from "../../Layouts/Layout";
import "./AboutUs.css";
import { Link, usePage } from "@inertiajs/inertia-react";


const Management = ({ seo }) => {

    const sharedData = usePage().props.localizations;
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

    return (
        <Layout seo={seo}>
            <div className="aboutPage wrapper padding_top">
                <div className="container">
                    <div className="font45 blue">
                        რაიმე ტექსტი კომპანიის <br /> მიზნების შესახებ
                    </div>
                    <PagePath
                        location1="მთავარი"
                        location2="ჩვენ შესახებ"
                        location3="ხარისხის მენეჯმენტის სისტემა"
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
                        <p>
                            {renderHTML(__('client.aboutus_managment_main_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}

                        </p>
                    </div>
                    <div className="blue" style={{ marginBottom: "20px" }}>
                        დოკუმენტაცია
                    </div>
                    <DlPdf name="დოკუმენტის დასახელება" />
                </div>
            </div>
        </Layout>
    );
};

export default Management;
