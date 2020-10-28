import "./style.css";
const axios = require('axios');

async function getServerResponse() {
    try {
        const response = await axios.get('http://localhost:5000/');
        return response.data.response;
    } catch(err) {
        console.error(err);
    }
}

async function insertDataFromServer(element) {
    try {
        element.textContent = await getServerResponse();
    } catch(err) {
        console.error(err);
    }
}

insertDataFromServer(document.querySelector(".container"));