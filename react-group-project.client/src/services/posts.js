import axios from "axios";

export function getAllPosts() {
    const url = "http://localhost:5201";
    const weather = "weatherforecast";

    const url_weather = `${weather}`;

    axios.get(url_weather).then(function (response) {
        console.log(response);
    })
}