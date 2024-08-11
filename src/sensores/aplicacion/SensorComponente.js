import React from 'react';
import ReactDOM from 'react';
import axios from 'axios'
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { useState, useEffect } from 'react'

import { borrarSensorSchema, sensorSchema } from '../dominio/SensorSchema';
import { updateSensor, getAllSensores, createSensor, deleteSensor, getSensorById, getSensorByUserName } from '../infrastructura/SensorRepository'
import Sensor from '../dominio/Sensor';

const CabeceraSensor = () => {
    return (
        <tr>
            <td>Nombre del Sensor</td>
            <td>Tipo de Sensor</td>
            <td>Ubicación</td>
            <td>Descripción</td>
        </tr>
    );
}

const SensorComponente = ({ sensor }) => {
    return (
        <tr>
            <td>{sensor.nombreSensor}</td>
            <td>{sensor.magnitudAMedir}</td>
            <td>{sensor.cantidadMedida}</td>
            <td>{sensor.unidades}</td>
        </tr>
    );
};

export const SensorLista = () => {
    const [sensores, setSensores] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getAllSensores().then(response => {
            console.log(response.data);
            setSensores(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Sensores</h1>
            <table class="table">
                <CabeceraSensor />
                <tbody>
                    {sensores.map(json => (
                        <SensorComponente key={json.id} sensor={json} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export const MiSensores = ({userName}) => {
    const [sensores, setSensores] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getSensorByUserName(userName).then(response => {
            console.log(response.data);
            setSensores(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Sensores</h1>
            <table class="table">
                <CabeceraSensor />
                <tbody>
                    { sensores!= null && sensores.map(json => (
                        <SensorComponente key={json.id} sensor={json} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};


const log = (type) => console.log.bind(console, type);

export const CreateFormSensor = () => {
    const [resultado, setResultado] = useState(null);

    const mandarDatosPost = (sensor) => {
        createSensor(sensor).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    const addSensor = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        const sensor = Sensor.fromJSON(formData);
        mandarDatosPost(sensor);
    }

    return (
        <div>
            <h1>Formulario Sensor</h1>
            <Form
                schema={sensorSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={addSensor}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const UpdateFormSensor = () => {
    const [resultado, setResultado] = useState(null);

    const mandarDatosPost = (sensor) => {
        updateSensor(sensor).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    const updateSensor = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        const sensor = Sensor.fromJSON(formData);
        mandarDatosPost(sensor);
    }

    return (
        <div>
            <h1>Actualizar Sensor</h1>
            <Form
                schema={sensorSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={updateSensor}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const DeleteSensor = () => {
    const [resultado, setResultado] = useState(null);

    const removeSensor = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        mandarDatosDelete(formData.id);
    }

    const mandarDatosDelete = (id) => {
        deleteSensor(id).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    return (
        <div>
            <h1>Borrar Sensor</h1>
            <Form
                schema={borrarSensorSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={removeSensor}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};
