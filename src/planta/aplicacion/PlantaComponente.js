import React from 'react';
import ReactDOM from 'react';
import axios from 'axios'
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { useState, useEffect } from 'react'

import { borrarPlantaSchema, plantaSchema } from '../dominio/PlantaSchema';
import { updatePlanta, getAllPlantas, createPlanta, deletePlanta, getPlantaByUserName } from '../infrastructura/PlantaRepository';
import Planta from '../dominio/Planta';

const CabeceraPlanta = () => {
    return (
        <tr>
            <td>Nombre de la Planta</td>
            <td>Fecha de Plantación</td>
            <td>Estado</td>
            <td>Tipo de Planta</td>
            <td>Maceta</td>
            <td>Nivel Actual de Humedad</td>
            <td>Nivel Actual de Luminosidad</td>
            <td>Nivel Actual de Temperatura</td>
        </tr>
    );
}

const PlantaComponente = ({ planta }) => {
    return (
        <tr>
            <td>{planta.nombrePlanta}</td>
            <td>{planta.fechaPlantacion.toLocaleDateString()}</td>
            <td>{planta.estado}</td>
            <td>{planta.tipoplantaIdtipoplanta}</td>
            <td>{planta.macetaIdmaceta}</td>
            <td>{planta.nivelActualHumedad}</td>
            <td>{planta.nivelActualLuminosidad}</td>
            <td>{planta.nivelActualTemperatura}</td>
        </tr>
    );
};

export const PlantaLista = () => {
    const [plantas, setPlantas] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getAllPlantas().then(response => {
            console.log(response.data);
            setPlantas(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Plantas</h1>
            <table class="table">
                <thead>
                    <CabeceraPlanta />
                </thead>
                <tbody>
                    {plantas.map(json => (
                        <PlantaComponente key={json.id} planta={Planta.fromJSON(json)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export const MisPlanta = ({userName}) => {
    const [plantas, setPlantas] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getPlantaByUserName(userName).then(response => {
            console.log(response.data);
            setPlantas(response.data);
        });
    }, []);

    return (
        <div>
            <h1> Mis Plantas</h1>
            <table class="table">
                <thead>
                    <CabeceraPlanta />
                </thead>
                <tbody>
                    {plantas.map(json => (
                        <PlantaComponente key={json.id} planta={Planta.fromJSON(json)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
const log = (type) => console.log.bind(console, type);

export const CreateFormPlanta = () => {
    const [resultado, setResultado] = useState(null);

    const mandarDatosPost = (planta) => {
        createPlanta(planta).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    const addPlanta = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        const planta = Planta.fromJSON(formData);
        mandarDatosPost(planta);
    }

    return (
        <div>
            <h1>Formulario Planta</h1>
            <Form
                schema={plantaSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={addPlanta}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const UpdateFormPlanta = () => {
    const [resultado, setResultado] = useState(null);

    const mandarDatosPost = (planta) => {
        updatePlanta(planta).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    const updatePlanta = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        const planta = Planta.fromJSON(formData);
        mandarDatosPost(planta);
    }

    return (
        <div>
            <h1>Actualizar Planta</h1>
            <Form
                schema={plantaSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={updatePlanta}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const DeletePlanta = () => {
    const [resultado, setResultado] = useState(null);

    const removePlanta = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        mandarDatosDelete(formData.id);
    }

    const mandarDatosDelete = (id) => {
        deletePlanta(id).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    return (
        <div>
            <h1>Borrar Planta</h1>
            <Form
                schema={borrarPlantaSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={removePlanta}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};
  