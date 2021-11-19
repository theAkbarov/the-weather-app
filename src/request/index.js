import axios from "axios";

export const request = axios.create({
  baseURL: "api.openweathermap.org/data/2.5/weather",
});
