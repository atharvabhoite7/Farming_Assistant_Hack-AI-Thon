import React from "react";
import DiseaseForm from "../components/DiseaseForm";
import Layout from "../components/Layout";

const Disease = () => {
    return (
        <div>
            <Layout title="Disease" content="Find if a crop is diseased or not">
                <DiseaseForm />
            </Layout>
        </div>
    );
};

export default Disease;
