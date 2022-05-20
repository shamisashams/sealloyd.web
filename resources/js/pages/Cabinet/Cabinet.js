import React from "react";
import { DlPdf } from "../../components/SmallComps/SmallComps";
import "../Documents/Documents.css";
import Layout from "../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";

const Cabinet = ({ seo }) => {
    const {user, docs} = usePage().props;
    console.log(docs)
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
        <Layout seo={seo}>
            <div className="documents teamPage careerPage">
                <div className="wrapper">
                    <div className="title blue">პირადი კაბინეტი</div>

                    <p className="container">
                        <div>მოგესალმებით!</div> <br />
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
                        {docs.map((doc, index) => {
                            return <DlPdf key={index} model="Customer" name={doc} />;
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Cabinet;
