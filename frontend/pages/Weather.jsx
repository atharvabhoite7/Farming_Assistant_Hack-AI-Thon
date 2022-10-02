import React from "react";
import WeatherForm from "../components/WeatherForm";
import Layout from "../components/Layout";

const Weather = () => {
    return (
        <div>
            <Layout title="Weather" content="Find the temperature of next day">
                <WeatherForm />
            </Layout>
        </div>
    );
};

export default Weather;
