import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { macetaSchema, borrarMacetaSchema } from '../dominio/MacetaSchema';
import { updateMaceta, getAllMacetas,getMacetaByUserName, createMaceta, deleteMaceta } from '../infrastructura/MacetaRepository';
import Maceta from '../dominio/Maceta';

const CabeceraMaceta = () => {
    return (
        <tr>
            <td>ID</td>
            <td>Posición en el Huerto</td>
            <td>ID del Huerto</td>
        </tr>
    );
}

const MacetaComponente = ({ maceta }) => {
    return (
        <tr>
            <td>{maceta.id}</td>
            <td>{maceta.posicionMacetaenElHuerto}</td>
            <td>{maceta.huertoIdhuerto}</td>
        </tr>
    );
};

export const MiMacetaLista = ({userName}) => {
    const [macetas, setMacetas] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getMacetaByUserName(userName).then(response => {
            console.log(response.data);
            setMacetas(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Macetas</h1>
            <table class="table">
                <thead>
                    <CabeceraMaceta />
                </thead>
                <tbody>
                    {macetas.map(json => (
                        <MacetaComponente key={json.id} maceta={Maceta.fromJSON(json)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export const MacetaLista = () => {
    const [macetas, setMacetas] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getAllMacetas().then(response => {
            console.log(response.data);
            setMacetas(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Macetas</h1>
            <table class="table">
                <thead>
                    <CabeceraMaceta />
                </thead>
                <tbody>
                    {macetas.map(json => (
                        <MacetaComponente key={json.id} maceta={Maceta.fromJSON(json)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const log = (type) => console.log.bind(console, type);

export const CreateFormMaceta = () => {
    const [resultado, setResultado] = useState(null);

    const mandarDatosPost = (maceta) => {
        createMaceta(maceta).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    const addMaceta = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        const maceta = Maceta.fromJSON(formData);
        mandarDatosPost(maceta);
    }

    return (
        <div>
            <h1>Formulario Maceta</h1>
            <Form
                schema={macetaSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={addMaceta}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const UpdateFormMaceta = () => {
    const [resultado, setResultado] = useState(null);

    const mandarDatosPost = (maceta) => {
        updateMaceta(maceta).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    const updateMaceta = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        const maceta = Maceta.fromJSON(formData);
        mandarDatosPost(maceta);
    }

    return (
        <div>
            <h1>Actualizar Maceta</h1>
            <Form
                schema={macetaSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={updateMaceta}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const DeleteMaceta = () => {
    const [resultado, setResultado] = useState(null);

    const removeMaceta = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        mandarDatosDelete(formData.id);
    }

    const mandarDatosDelete = (id) => {
        deleteMaceta(id).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    return (
        <div>
            <h1>Borrar Maceta</h1>
            <Form
                schema={borrarMacetaSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={removeMaceta}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};
