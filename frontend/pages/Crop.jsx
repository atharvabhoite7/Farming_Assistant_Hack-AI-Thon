import React from "react";
import CropForm from "../components/CropForm";
import Layout from "../components/Layout";

const Crop = () => {
    return (
        <Layout
            title="Crop"
            content="Find crop suitable to particular conditions"
        >
            <CropForm />
        </Layout>
    );
};

export default Crop;
