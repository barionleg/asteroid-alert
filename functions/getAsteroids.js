require("dotenv").config();
import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const date = event.queryStringParameters.date;
  const API_URL = "https://api.nasa.gov/neo/rest/v1/neo/browse?";
  const API_KEY = process.env.NASA_API_KEY;
  const apiURL = `${API_URL}?api_key=${7bVSDBtFCE1WdVMUNrGwH6CfhRF5h0XmL97UGh0a}&start_date=${date}&end_date=${date}`;
  //
  const response = await fetch(apiURL);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
