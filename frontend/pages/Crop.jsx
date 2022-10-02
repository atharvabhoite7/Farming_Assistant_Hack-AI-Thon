import React from "react";
import CropForm from "../components/CropForm";
import Layout from "../components/Layout";

const Crop = () => {
    return (
        <Layout
            title="Crop"
            content="Find crop suitable to particular conditions"
        >
            <h2 className="text-2xl font-semibold text-center mt-1">
                Find a Suitable Crop
            </h2>
            <CropForm />
        </Layout>
    );
};

export default Crop;
