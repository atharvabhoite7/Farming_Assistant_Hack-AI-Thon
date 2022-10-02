from __future__ import print_function
import json

# import requests
from fpdf import FPDF
from flask import Flask, request, render_template
import numpy as np
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# prediction function
def CropPredictor(to_predict_list):
    to_predict = np.array([to_predict_list])
    loaded_model = pickle.load(open("models/RandomForest.pkl", "rb"))
    result = loaded_model.predict(to_predict)
    return result[0]


def FertilizerPredictor(to_predict_list):
    to_predict = np.array([to_predict_list])
    loaded_model = pickle.load(open("models/classifier.pkl", "rb"))
    result = loaded_model.predict(to_predict)
    return result[0]


def WeatherPredictor(to_predict_list):
    to_predict = np.array([to_predict_list])
    loaded_model = pickle.load(open("models/weather.pkl", "rb"))
    result = loaded_model.predict(to_predict)
    return result[0]


@app.route("/cropPredict", methods=["POST"])
def result():
    if request.method == "POST":
        print(request.json)
        to_predict_list = request.json
        to_predict_list = list(to_predict_list.values())
        to_predict_list = list(map(int, to_predict_list))
        result = CropPredictor(to_predict_list)
        return result


@app.route("/fertilizerPredict", methods=["POST"])
def result2():
    if request.method == "POST":
        print(request.json)
        to_predict_list = request.json
        to_predict_list = list(to_predict_list.values())
        to_predict_list = list(map(int, to_predict_list))
        ans = FertilizerPredictor(to_predict_list)
        if ans == 0:
            return "10-26-26"
        elif ans == 1:
            return "14-35-14"
        elif ans == 2:
            return "17-17-17	"
        elif ans == 3:
            return "20-20"
        elif ans == 4:
            return "28-28"
        elif ans == 5:
            return "DAP"
        else:
            return "Urea"


@app.route("/weather-predict", methods=["POST"])
def result3():
    if request.method == "POST":
        print(request.json)
        to_predict_list = request.json
        to_predict_list = list(to_predict_list.values())
        print(to_predict_list)
        weather = WeatherPredictor(to_predict_list)
        result = {"data": weather}
        return result


if __name__ == "__main__":
    app.run()
