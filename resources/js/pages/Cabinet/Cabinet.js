import React from "react";
import { DlPdf } from "../../components/SmallComps/SmallComps";
import "../Documents/Documents.css";
import Layout from "../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";

const Cabinet = ({ seo }) => {
    const {user, docs} = usePage().props;
    const renderHTML = (rawHTML) => React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
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
                    <div className="title blue">{__('client.user_cabinet',sharedData)}</div>

                    <p className="container">
                        <div>{__('client.user_cabinet_welcome',sharedData)}</div> <br />
                        {renderHTML(__('client.user_cabinet_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                    </p>
                    <div className="blue">{__('client.circulars',sharedData)}</div>
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
