import React from "react";
import DiseaseForm from "../components/DiseaseForm";
import Layout from "../components/Layout";

const Disease = () => {
    return (
        <div>
            <Layout>
                <h1 className="text-4xl font-semibold text-center mt-3">
                    Predict the Crop Disease
                </h1>
                <h3 className="text-2xl text-center mt-3">
                    Submit a valid image of your crop
                </h3>
                <DiseaseForm />
            </Layout>
        </div>
    );
};

export default Disease;
