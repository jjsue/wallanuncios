const axios = require('axios').default;

async function registerCall(user,pass){
        return axios({
            method: 'POST',
            url: 'http://34.89.93.186:8080/apiv1/register',
            headers: {
                        accept: 'application/json'
                    },
            data: {
                username: `${user}`,
                password: `${pass}`
            },
            withCredentials: true,
            })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return error.response.data;
            })
            .finally(function () {
                console.log("Terminada llamada");
            })
}

async function loginCall(user,pass){
    return axios({
        method: 'POST',
        url: 'http://34.89.93.186:8080/apiv1/login',
        headers: {
                    accept: 'application/json'
                },
        data: {
            username: `${user}`,
            password: `${pass}`
        },
        withCredentials: true,
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data;
        })
        .finally(function () {
            console.log("Terminada llamada");
        })
}
async function addCall(query){
    return axios({
        method: 'GET',
        url: `http://34.89.93.186:8080/apiv1/anuncios${query}`,
        withCredentials: true,
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data;
        })
        .finally(function () {
            console.log("Terminada llamada");
        })
}
async function detailCall(id){
    return axios({
        method: 'GET',
        url: `http://34.89.93.186:8080/apiv1/anuncios/${id}`,
        withCredentials: true,
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data;
        })
        .finally(function () {
            console.log("Terminada llamada");
        })
}

async function createAd(name, price, desc, tag, type, photo){
    return axios({
        method: 'POST',
        url: `http://34.89.93.186:8080/apiv1/anuncios/`,
        data: {
            name: `${name}`,
            price: `${price}`,
            description: `${desc}`,
            tags: `${tag}`,
            type: `${type}`,
            photo: `${photo}`,
        },
        withCredentials: true,
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return error.response.data;
        })
        .finally(function () {
            console.log("Terminada llamada");
        })
}

/*{
    name: string,
    price: number,
    description: string,
    tags: Array[string],
    type: "buy" ó "sell",
    photo: string,
 }*/
export {registerCall, loginCall, addCall, detailCall, createAd};