import apiRoutes from '../../apiRoutes'; 
import axios from 'axios'; 
import Maceta from '../dominio/Maceta';

const getAllMacetas = async () => {
    try {
        console.log('getAllMacetas');
        const response = await axios.get(apiRoutes.maceta.getAll);
        return response;
    } catch (error) {
        console.error('Error al obtener las Macetas', error);
        throw error;
    }
};

const getMacetaById = async (id) => {
    try {
        const response = await axios.get(apiRoutes.maceta.getById(id));
        return response;
    } catch (error) {
        console.error(`Error al obtener la Maceta con id ${id}`, error);
        throw error;
    }
};
const getMacetaByUserName = async (userName) => {
    try {
        const response = await axios.get(apiRoutes.maceta.getByUserName(userName));
        return response;
    } catch (error) {
        console.error(`Error al obtener la Maceta con id ${userName}`, error);
        throw error;
    }
};

const createMaceta = async (maceta) => {
    try {
        const response = await axios.post(apiRoutes.maceta.create, maceta);
        return response;
    } catch (error) {
        console.error('Error al crear la Maceta', error);
        throw error;
    }
};

const updateMaceta = async ( maceta) => {
    try {
        const response = await axios.put(apiRoutes.maceta.update, maceta);
        return response;
    } catch (error) {
        console.error(`Error al actualizar la Maceta con id $`, error);
        throw error;
    }
};

const deleteMaceta = async (id) => {
    try {
        const response = await axios.delete(apiRoutes.maceta.delete(id));
        return response;
    } catch (error) {
        console.error(`Error al eliminar la Maceta con id ${id}`, error);
        throw error;
    }
};

export {
    getAllMacetas,
    getMacetaById,
    getMacetaByUserName,
    createMaceta,
    updateMaceta,
    deleteMaceta
};
