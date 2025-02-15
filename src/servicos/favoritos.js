import axios from 'axios';

const favoritosApi = axios.create({baseURL: "http://localhost:8000/favoritos"});

async function getFavoritos() {
    const response = await favoritosApi.get('/');
    return response.data;
};

async function postFavorito(id) {
    return await favoritosApi.post(`/${id}`);
};

async function deleteFavorito(id) {
    await favoritosApi.delete(`/${id}`);
};

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}