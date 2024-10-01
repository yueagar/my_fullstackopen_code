import axios from "axios";

const api_key = "use your own key";

const get = (latlng) => {
    return axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${api_key}`)
        .then(response => response.data);
};

export default { get };