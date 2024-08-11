import apiRoutes from '../../apiRoutes'; 
import axios from 'axios'; 
import { Persona } from '../dominio/Persona';

const getAllPersonas = async () => {
    try {
        console.log('getAllPersona');
        const response = await axios.get(apiRoutes.persona.getAll);
        return response;
    } catch (error) {
        console.error('Error al obtener los Personas', error);
        throw error;
    }
};

const getPersonaById = async (id) => {
    try {
        const response = await axios.get(apiRoutes.persona.getById(id));
        return response;
    } catch (error) {
        console.error(`Error al obtener el Persona con id ${id}`, error);
        throw error;
    }
};
const getPersonaByUserName = async (userName) => {
    try {
        const response = await axios.get(apiRoutes.persona.getByUserName(userName));
        return response;
    } catch (error) {
        console.error(`Error al obtener el Persona con userName ${userName}`, error);
        throw error;
    }
};

const createPersona = async (Persona) => {
    try {
        const response = await axios.post(apiRoutes.persona.create, Persona);
        return response;
    } catch (error) {
        console.error('Error al crear el Persona', error);
        throw error;
    }
};

const updatePersona = async (Persona) => {
    try {
        const response = await axios.put(apiRoutes.persona.update, Persona);
        return response;
    } catch (error) {
        console.error(`Error al actualizar el Persona `, error);
        throw error;
    }
};

const deletePersona = async (id) => {
    try {
        const response = await axios.delete(apiRoutes.persona.delete(id));
        return response.data;
    } catch (error) {
        console.error(`Error al eliminar el Persona con id ${id}`, error);
        throw error;
    }
};
const deletePerfil = async (userName) => {
    try {
        const response = await axios.delete(apiRoutes.persona.deleteByUserName(userName));
        return response.data;
    } catch (error) {
        console.error(`Error al eliminar el Persona con userName ${userName}`, error);
        throw error;
    }
};

export {
    getAllPersonas,
    getPersonaById,
    getPersonaByUserName,
    createPersona,
    updatePersona,
    deletePersona,
    deletePerfil
};