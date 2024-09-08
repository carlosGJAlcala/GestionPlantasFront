import apiRoutes from '../../apiRoutes'; 
import axios from 'axios'; 
import { Planta } from '../dominio/Planta';
import api from '../../security/api';

const getAllPlantas = async () => {
    try {
        console.log('getAllPlantas');
        const response = await api.get(apiRoutes.planta.getAll);
        return response;
    } catch (error) {
        console.error('Error al obtener las Plantas', error);
        throw error;
    }
};

const getPlantaById = async (id) => {
    try {
        const response = await api.get(apiRoutes.planta.getById(id));
        return response;
    } catch (error) {
        console.error(`Error al obtener la Planta con id ${id}`, error);
        throw error;
    }
};
const getPlantaByUserName = async (userName) => {
    try {
        const response = await api.get(apiRoutes.planta.getByUserName(userName));
        return response;
    } catch (error) {
        console.error(`Error al obtener la Planta con userName ${userName}`, error);
        throw error;
    }
};
const createPlanta = async (planta) => {
    try {
        const response = await api.post(apiRoutes.planta.create, planta);
        return response;
    } catch (error) {
        console.error('Error al crear la Planta', error);
        throw error;
    }
};

const updatePlanta = async (id, planta) => {
    try {
        const response = await api.put(apiRoutes.planta.update(id), planta);
        return response;
    } catch (error) {
        console.error(`Error al actualizar la Planta con id ${id}`, error);
        throw error;
    }
};

const deletePlanta = async (id) => {
    try {
        const response = await api.delete(apiRoutes.planta.delete(id));
        return response;
    } catch (error) {
        console.error(`Error al eliminar la Planta con id ${id}`, error);
        throw error;
    }
};

export {
    getAllPlantas,
    getPlantaById,
    getPlantaByUserName,
    createPlanta,
    updatePlanta,
    deletePlanta
};
