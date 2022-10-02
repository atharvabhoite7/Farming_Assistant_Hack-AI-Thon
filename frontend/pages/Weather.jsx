import React from "react";
import WeatherForm from "../components/WeatherForm";
import Layout from "../components/Layout";

const Weather = () => {
    return (
        <div>
            <Layout>
                <WeatherForm />
            </Layout>
        </div>
    );
};

export default Weather;
