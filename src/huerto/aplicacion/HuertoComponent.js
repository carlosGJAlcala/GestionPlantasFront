import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { huertoSchema,borrarHuertoSchema } from '../infrastructura/HuertoSchema';
import { getHuertoByUserName,updateHuerto, getAllHuertos, createHuerto, deleteHuerto } from '../infrastructura/HuertoRepository';
import Huerto from '../dominio/Huerto';

const CabeceraHuerto = () => {
    return (
        <tr>
            <td>ID</td>
            <td>Número de Macetas</td>
        </tr>
    );
}

const HuertoComponente = ({ huerto }) => {
    return (
        <tr>
            <td>{huerto.id}</td>
            <td>{huerto.numeroMacetas}</td>
        </tr>
    );
};

export const HuertoLista = () => {
    const [huertos, setHuertos] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getAllHuertos().then(response => {
            console.log(response.data);
            setHuertos(response.data);
        });
    }, []);

    return (
        <div>
          
            <table class="table">
                <thead>
                <h1>Huertos</h1>
                </thead>
                <tbody>
                <CabeceraHuerto />
                    {huertos.map(json => (
                        <HuertoComponente key={json.id} huerto={Huerto.fromJSON(json)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export const MiHuertoLista = ({userName}) => {
    const [huertos, setHuertos] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getHuertoByUserName(userName).then(response => {
            console.log(response.data);
            setHuertos(response.data);
        });
    }, []);

    return (
        <div>
          
            <table class="table">
                <thead>
                <h1>Huertos</h1>
                </thead>
                <tbody>
                <CabeceraHuerto />
                    {huertos.map(json => (
                        <HuertoComponente key={json.id} huerto={Huerto.fromJSON(json)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};


const log = (type) => console.log.bind(console, type);

export const CreateFormHuerto = () => {
    const [resultado, setResultado] = useState(null);

    const mandarDatosPost = (huerto) => {
        createHuerto(huerto).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    const addHuerto = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        const huerto = Huerto.fromJSON(formData);
        mandarDatosPost(huerto);
    }

    return (
        <div>
            <h1>Formulario Huerto</h1>
            <Form
                schema={huertoSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={addHuerto}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const UpdateFormHuerto = () => {
    const [resultado, setResultado] = useState(null);

    const mandarDatosPost = (huerto) => {
        updateHuerto(huerto).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    const updateHuerto = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        const huerto = Huerto.fromJSON(formData);
        mandarDatosPost(huerto);
    }

    return (
        <div>
            <h1>Actualizar Huerto</h1>
            <Form
                schema={huertoSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={updateHuerto}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const DeleteHuerto = () => {
    const [resultado, setResultado] = useState(null);

    const removeHuerto = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        mandarDatosDelete(formData.id);
    }

    const mandarDatosDelete = (id) => {
        deleteHuerto(id).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    return (
        <div>
            <h1>Borrar Huerto</h1>
            <Form
                schema={borrarHuertoSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={removeHuerto}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};
