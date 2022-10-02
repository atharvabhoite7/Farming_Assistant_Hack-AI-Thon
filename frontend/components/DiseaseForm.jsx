import React from "react";
import { useState } from "react";
import axios from "axios";

const DiseaseForm = () => {
    let file;

    const [output, setOutput] = useState("");

    const handleChange = (event) => {
        file = {
            selectedFile: event.target.files[0],
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let data = new FormData();
        console.log(file);
        data.append("file", file.selectedFile);

        await axios
            .post("http://127.0.0.1:5000/disease-predict", data)
            .then(function (response) {
                let newData = String(response.data.prediction);
                console.log(newData);
                setOutput(newData);
                console.log(output);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="container mx-auto mt-3">
            <form onSubmit={handleSubmit} class="w-full max-w-lg mx-auto">
                <div class="flex w-full items-center justify-center bg-grey-lighter">
                    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-700">
                        <svg
                            class="w-8 h-8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span class=" text-base leading-normal">
                            Select a file
                        </span>
                        <input
                            id="file"
                            name="file"
                            type="file"
                            class="hidden"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mt-2 flex justify-center">
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full "
                        type="submit"
                    >
                        SUBMIT
                    </button>
                </div>

                {output && (
                    <div
                        class="mt-2 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                        role="alert"
                    >
                        <span class="font-medium">Output:</span>
                        {output}
                    </div>
                )}
            </form>
        </div>
    );
};

export default DiseaseForm;
