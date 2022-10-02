import React from "react";
import { useState } from "react";
import axios from "axios";

const WeatherForm = () => {
    const [formData, setFormData] = useState({
        tempr: 0,
        air_pressure: 0,
        wind_speed: 0,
        wind_direction: 0,
        relative_humidity: 0,
    });

    const [output, setOutput] = useState(null);

    const handleChange = (event) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);

        axios
            .post("http://127.0.0.1:5000/weather-predict", {
                tempr: Number(formData.tempr),
                air_pressure: Number(formData.air_pressure),
                wind_speed: Number(formData.wind_speed),
                wind_direction: Number(formData.wind_direction),
                relative_humidity: Number(formData.relative_humidity),
            })
            .then(function (response) {
                setOutput(response.data.data);
                console.log(output);
            })
            .catch(function (error) {
                console.log(error);
            });
        setFormData({
            tempr: 0,
            air_pressure: 0,
            wind_speed: 0,
            wind_direction: 0,
            relative_humidity: 0,
        });
    };

    return (
        <div className="container mx-auto mt-5">
            <form onSubmit={handleSubmit} class="w-full max-w-lg mx-auto">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name"
                        >
                            Temperature
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="tempr"
                            name="tempr"
                            type="number"
                            value={formData.tempr}
                            onChange={handleChange}
                            placeholder="Temperature"
                            required
                        />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name"
                        >
                            Air Pressure
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="air_pressure"
                            name="air_pressure"
                            value={formData.air_pressure}
                            onChange={handleChange}
                            type="number"
                            placeholder="Air Pressure"
                            required
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name"
                        >
                            Wind Speed
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="wind_speed"
                            name="wind_speed"
                            value={formData.wind_speed}
                            onChange={handleChange}
                            type="number"
                            placeholder="Wind Speed"
                            required
                        />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name"
                        >
                            Wind Direction
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="wind_direction"
                            name="wind_direction"
                            value={formData.wind_direction}
                            onChange={handleChange}
                            type="number"
                            placeholder="Wind Direction"
                            required
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-2/2 px-3 mb-6 md:mb-0">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name"
                        >
                            Relative Humidity
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="relative_humidity"
                            name="relative_humidity"
                            value={formData.relative_humidity}
                            onChange={handleChange}
                            type="number"
                            placeholder="Relative Humidity"
                            required
                        />
                    </div>
                </div>
                {/* <button type="submit">SUBMIT</button> */}
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full "
                    type="submit"
                >
                    SUBMIT
                </button>
                {output && (
                    <div
                        className="mt-5 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                        role="alert"
                    >
                        <span class="font-medium">Predicted temperature: </span>
                        {output}
                    </div>
                )}
            </form>
        </div>
    );
};

export default WeatherForm;
