import axios from 'axios';

const airportsUrl = 'http://localhost:8000';

export const getAirports = async (id) => {
    try {
        id = id || '';
        return await axios.get(`${airportsUrl}/${id}`);
    } catch (error) {
        console.log('Error occured while calling getAirports API', error);
    }
}

export const addAirport = async (airport) => {
    try {
        return await axios.post(`${airportsUrl}/add`, airport);
    } catch (error) {
        console.log('Error occured while calling addUser API', error);
    }
}

export const editAirport = async (id, airport) => {
    try {
        return await axios.put(`${airportsUrl}/${id}`, airport)
    } catch (error) {
        console.log('Error occured while calling editAirport API', error);
    }
}

export const deleteAirport = async (id) => {
    try {
        return await axios.delete(`${airportsUrl}/${id}`);
    } catch (error) {
        console.log('Error occured while calling deleteAirport API', error);
    }
}

export const getAirportsByAPI = async () => {
    try {
        return await axios.get();
    } catch (error) {
        console.log('Error occured while calling getAirports API', error);
    }
}