import React from "react";
import WeatherForm from "../components/WeatherForm";
import Layout from "../components/Layout";

const Weather = () => {
    return (
        <div>
            <Layout title="Weather" content="Find the temperature of next day">
                <h1 className="text-3xl font-semibold text-center mt-3">
                    Predict the Temperature
                </h1>
                <h3 className="text-xl text-center mt-1">
                    Enter the following parameters
                </h3>
                <WeatherForm />
            </Layout>
        </div>
    );
};

export default Weather;
