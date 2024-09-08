import apiRoutes from '../../apiRoutes'; 
import axios from 'axios'; 
import DepositoAgua from '../dominio/DepositoAgua';
import api from '../../security/api';

const getAllDepositosAgua = async () => {
    try {
        console.log('getAllDepositosAgua');
        const response = await api.get(apiRoutes.depositoAgua.getAll);
        return response;
    } catch (error) {
        console.error('Error al obtener los Depósitos de Agua', error);
        throw error;
    }
};

const getDepositoAguaById = async (id) => {
    try {
        const response = await api.get(apiRoutes.depositoAgua.getById(id));
        return response;
    } catch (error) {
        console.error(`Error al obtener el Depósito de Agua con id ${id}`, error);
        throw error;
    }
};
const getDepositoAguaByUserName = async (userName) => {
    try {
        const response = await api.get(apiRoutes.depositoAgua.getByUserName(userName));
        return response;
    } catch (error) {
        console.error(`Error al obtener el Depósito de Agua con userName ${userName}`, error);
        throw error;
    }
};
const createDepositoAgua = async (depositoAgua) => {
    try {
        const response = await api.post(apiRoutes.depositoAgua.create, depositoAgua);
        return response;
    } catch (error) {
        console.error('Error al crear el Depósito de Agua', error);
        throw error;
    }
};

const updateDepositoAgua = async (id, depositoAgua) => {
    try {
        const response = await api.put(apiRoutes.depositoAgua.update(id), depositoAgua);
        return response;
    } catch (error) {
        console.error(`Error al actualizar el Depósito de Agua con id ${id}`, error);
        throw error;
    }
};

const deleteDepositoAgua = async (id) => {
    try {
        const response = await api.delete(apiRoutes.depositoAgua.delete(id));
        return response;
    } catch (error) {
        console.error(`Error al eliminar el Depósito de Agua con id ${id}`, error);
        throw error;
    }
};

export {
    getAllDepositosAgua,
    getDepositoAguaById,
    getDepositoAguaByUserName,
    createDepositoAgua,
    updateDepositoAgua,
    deleteDepositoAgua
};
