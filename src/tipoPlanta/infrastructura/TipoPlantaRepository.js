import apiRoutes from '../../apiRoutes'; 
import axios from 'axios'; 
import TipoPlanta from '../dominio/TipoPlanta';
import api from '../../security/api';

const getAllTipoPlantas = async () => {
    try {
        console.log('getAllTipoPlantas');
        const response =  api.get(apiRoutes.tipoPlanta.getAll);
        return response;
    } catch (error) {
        console.error('Error al obtener los TipoPlantas', error);
        throw error;
    }
};

const getTipoPlantaById = async (id) => {
    try {
        const response = await api.get(apiRoutes.tipoPlanta.getById(id));
        return response;
    } catch (error) {
        console.error(`Error al obtener el TipoPlanta con id ${id}`, error);
        throw error;
    }
};

const createTipoPlanta = async (tipoPlanta) => {
    try {
        console.log('createTipoPlanta');

        const response = await api.post(apiRoutes.tipoPlanta.create, tipoPlanta);
        return response;
    } catch (error) {
        console.error('Error al crear el TipoPlanta', error);
        throw error;
    }
};

const updateTipoPlanta = async (id, tipoPlanta) => {
    try {
        const response = await api.put(apiRoutes.tipoPlanta.update, tipoPlanta);
        return response;
    } catch (error) {
        console.error(`Error al actualizar el TipoPlanta con id ${id}`, error);
        throw error;
    }
};

const deleteTipoPlanta = async (id) => {
    try {
        const response = await axios.delete(apiRoutes.tipoPlanta.delete(id));
        return response;
    } catch (error) {
        console.error(`Error al eliminar el TipoPlanta con id ${id}`, error);
        throw error;
    }
};

export {
    getAllTipoPlantas,
    getTipoPlantaById,
    createTipoPlanta,
    updateTipoPlanta,
    deleteTipoPlanta
};
 