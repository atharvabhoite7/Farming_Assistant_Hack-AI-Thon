import React from "react";
// import DiseaseForm from "../components/WeatherForm";
import Layout from "../components/Layout";
import WeatherForm from '../components/WeatherForm'

const Disease = () => {
    return (
        <div>
            <Layout>{/* <DiseaseForm /> */}</Layout>
            <WeatherForm />
        </div>
    );
};

export default Disease;
