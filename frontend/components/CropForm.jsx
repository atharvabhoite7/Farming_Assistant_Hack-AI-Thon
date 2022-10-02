import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";

const CropForm = () => {
    const [formData, setFormData] = useState({
        N: 0,
        P: 0,
        K: 0,
        Temp: 0,
        Hum: 0,
        PH: 0,
        Rainfall: 0,
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
        let data = null;

        axios
            .post("http://127.0.0.1:5000/crop-predict", {
                N: Number(formData.N),
                P: Number(formData.P),
                K: Number(formData.K),
                Temp: Number(formData.Temp),
                Hum: Number(formData.Hum),
                PH: Number(formData.PH),
                Rainfall: Number(formData.Rainfall),
            })
            .then(function (response) {
                data = response.data;
                console.log(data);
                setOutput(data);
                console.log(output);
            })
            .catch(function (error) {
                console.log(error);
            });
        setFormData({
            N: 0,
            P: 0,
            K: 0,
            Temp: 0,
            Hum: 0,
            PH: 0,
            Rainfall: 0,
        });
    };
    return (
        <div>
            <div className="flex items-center justify-center mt-10">
                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name"
                            >
                                Temperature
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-none-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="Temp"
                                type="number"
                                placeholder="temperature"
                                name="Temp"
                                required
                                min="-10"
                                max="50"
                                onChange={handleChange}
                                value={formData.Temp}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-last-name"
                            >
                                Humidity
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="Hum"
                                placeholder="Humidity"
                                required
                                min="0"
                                max="100"
                                onChange={handleChange}
                                value={formData.Hum}
                                name="Hum"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name"
                            >
                                PH
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-none-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="PH"
                                type="number"
                                placeholder="PH"
                                name="PH"
                                required
                                min="0"
                                max="100"
                                onChange={handleChange}
                                value={formData.PH}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-last-name"
                            >
                                Nitrogen
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="N"
                                type="number"
                                placeholder="Nitrogen"
                                name="N"
                                required
                                min="0"
                                max="100"
                                onChange={handleChange}
                                value={formData.N}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name"
                            >
                                Potassium
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-none-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="K"
                                type="number"
                                placeholder="Potassium"
                                name="K"
                                required
                                min="0"
                                max="100"
                                onChange={handleChange}
                                value={formData.K}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-last-name"
                            >
                                Phosphorus
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="P"
                                type="number"
                                placeholder="Phosphorous"
                                name="P"
                                required
                                min="0"
                                max="100"
                                onChange={handleChange}
                                value={formData.P}
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-2/2 px-3 mb-6 md:mb-0">
                            <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name"
                            >
                                Rainfall
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="Rainfall"
                                name="Rainfall"
                                value={formData.Rainfall}
                                onChange={handleChange}
                                type="number"
                                placeholder="Rainfall"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center mx-3 mb-2">
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-10">
                            Submit
                        </button>
                    </div>
                    {output && (
                        <div
                            class="mt-5 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                            role="alert"
                        >
                            <span class="font-medium">Recommended Crop: </span>
                            {output}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default CropForm;
