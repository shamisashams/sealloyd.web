import React from "react";
import { PagePath } from "../../components/SmallComps/SmallComps";
import { DlPdf } from "../../components/SmallComps/SmallComps";
import "./Documents.css";
import Layout from "../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";


const Circulars = ({ seo }) => {
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
    const sharedData = usePage().props.localizations;
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    return (
        <Layout seo={seo}>
            <div className="documents teamPage careerPage">
                <div className="wrapper">
                    <div className="font45 blue">ცირკულარები</div>
                    <PagePath
                        location1="მთავარი"
                        location2="დოკუმენტაცია"
                        location3="ცირკულარები"
                    />
                    {/* <p className="container">
                        ლორემ იპსუმ ქვეყნიური თვითიდენტიფიკაციისა მესამის რიტუალური
                        გაუშტერდათ, მიწუნებს სასახლეებზე მრავლობით. გაუშტერდათ განიცდიდი
                        მებრძოლები, ზეციური რეტროსპექტივას დეტალების გაგაკეთებინებს წერა,
                        ქადილით მზაკვრობისა ჩაესვენა მეთვრამეტე რათა მართალსა. შესახვედრათ
                        შემაშინა შეგაწუხებს ღიჭინი, შესაბრალისი ეპისკოპოსებსა, არეალს
                        გაგაკეთებინებს ახრამუნებდა სიამაყე შშავს. ქადილით მისძახა
                        ეპისკოპოსებსა ბრინკაი ვიღებდი წინამძღოლის ყურთმაჯები ეამა არეალს,
                        მკალავიშვილის მეთვრამეტე.
                    </p> */}
                    <p className='container'>
                        {renderHTML(__('client.documentation.circulars_main_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}

                    </p>
                    <div className="blue">ცირკულარები</div>
                    <div className="doc_grid">
                        {docList.map((doc, index) => {
                            return <DlPdf key={index} name={doc} />;
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Circulars;
