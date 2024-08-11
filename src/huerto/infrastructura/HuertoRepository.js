import apiRoutes from '../../apiRoutes'; 
import axios from 'axios'; 
import Huerto from '../dominio/Huerto';

const getAllHuertos = async () => {
    try {
        console.log('getAllHuertos');
        const response = await axios.get(apiRoutes.huerto.getAll);
        return response;
    } catch (error) {
        console.error('Error al obtener los Huertos', error);
        throw error;
    }
};

const getHuertoById = async (id) => {
    try {
        const response = await axios.get(apiRoutes.huerto.getById(id));
        return response;
    } catch (error) {
        console.error(`Error al obtener el Huerto con id ${id}`, error);
        throw error;
    }
};
const getHuertoByUserName = async (userName) => {
    try {
        const response = await axios.get(apiRoutes.huerto.getByUserName(userName));
        return response;
    } catch (error) {
        console.error(`Error al obtener el Huerto con username ${userName}`, error);
        throw error;
    }
};

const createHuerto = async (huerto) => {
    try {
        const response = await axios.post(apiRoutes.huerto.create, huerto);
        return response;
    } catch (error) {
        console.error('Error al crear el Huerto', error);
        throw error;
    }
};

const updateHuerto = async (id, huerto) => {
    try {
        const response = await axios.put(apiRoutes.huerto.update(id), huerto);
        return response;
    } catch (error) {
        console.error(`Error al actualizar el Huerto con id ${id}`, error);
        throw error;
    }
};

const deleteHuerto = async (id) => {
    try {
        const response = await axios.delete(apiRoutes.huerto.delete(id));
        return response;
    } catch (error) {
        console.error(`Error al eliminar el Huerto con id ${id}`, error);
        throw error;
    }
};

export {
    getAllHuertos,
    getHuertoById,
    createHuerto,
    updateHuerto,
    deleteHuerto,
    getHuertoByUserName
};
