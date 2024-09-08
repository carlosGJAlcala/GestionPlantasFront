import apiRoutes from '../../apiRoutes'; 
import axios from 'axios'; 
import Sensor from '../dominio/Sensor';
import api from '../../security/api';

const getAllSensores = async () => {
    try {
        console.log('getAllSensores');
        const response = await api.get(apiRoutes.sensor.getAll);
        return response;
    } catch (error) {
        console.error('Error al obtener los Sensores', error);
        throw error;
    }
};

const getSensorById = async (id) => {
    try {
        const response = await api.get(apiRoutes.sensor.getById(id));
        return response;
    } catch (error) {
        console.error(`Error al obtener el Sensor con id ${id}`, error);
        throw error;
    }
};
const getSensorByUserName = async (userName) => {
    try {
        const response = await api.get(apiRoutes.sensor.getByUserName(userName));
        return response;
    } catch (error) {
        console.error(`Error al obtener el Sensor con userName ${userName}`, error);
        throw error;
    }
};

const createSensor = async (sensor) => {
    try {
        const response = await api.post(apiRoutes.sensor.create, sensor);
        return response;
    } catch (error) {
        console.error('Error al crear el Sensor', error);
        throw error;
    }
};

const updateSensor = async ( sensor) => {
    try {
        const response = await axios.put(apiRoutes.sensor.update(sensor));
        return response;
    } catch (error) {
        console.error(`Error al actualizar el Sensor con id ${sensor.id}`, error);
        throw error;
    }
};

const updateSensorDepositoAgua = async ( sensor) => {
    try {
        const response = await axios.put(apiRoutes.sensor.updateDepositoAgua( sensor));
        return response;
    } catch (error) {
        console.error(`Error al actualizar el Sensor con id ${sensor.id}`, error);
        throw error;
    }
};

const deleteSensor = async (id) => {
    try {
        const response = await api.delete(apiRoutes.sensor.delete(id));
        return response;
    } catch (error) {
        console.error(`Error al eliminar el Sensor con id ${id}`, error);
        throw error;
    }
};

export {
    getAllSensores,
    getSensorById,
    getSensorByUserName,
    createSensor,
    updateSensor,
    deleteSensor
};
