import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { depositoAguaSchema, borrarDepositoAguaSchema } from '../dominio/DepositoAguaSchema';
import { updateDepositoAgua, getAllDepositosAgua, createDepositoAgua, deleteDepositoAgua, getDepositoAguaByUserName } from '../infrastructura/DepositoAguaRepository';
import DepositoAgua from '../dominio/DepositoAgua';

const CabeceraDepositoAgua = () => {
    return (
        <tr>
            <td>ID</td>     
            <td>Cantidad Máxima</td>
            <td>Altura del Depósito</td>
            <td>Estado</td>
        </tr>
    );
}

const DepositoAguaComponente = ({ depositoAgua }) => {
    return (
        <tr>
            <td>{depositoAgua.id}</td>
            <td>{depositoAgua.cantidadMaxima}</td>
            <td>{depositoAgua.alturaDeposito}</td>
            <td>{depositoAgua.estado}</td>
        </tr>
    );
};

export const DepositoAguaLista = () => {
    const [depositosAgua, setDepositosAgua] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getAllDepositosAgua().then(response => {
            console.log(response.data);
            setDepositosAgua(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Depósitos de Agua</h1>
            <table class="table">
                <thead>
                    <CabeceraDepositoAgua />
                </thead>
                <tbody>
                    {depositosAgua.map(json => (
                        <DepositoAguaComponente key={json.id} depositoAgua={DepositoAgua.fromJSON(json)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export const MiDepositoAgua = ({userName}) => {
    const [depositosAgua, setDepositosAgua] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getDepositoAguaByUserName(userName).then(response => {
            console.log(response.data);
            setDepositosAgua(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Depósitos de Agua</h1>
            <table class="table">
                <thead>
                    <CabeceraDepositoAgua />
                </thead>
                <tbody>
                    {depositosAgua.map(json => (
                        <DepositoAguaComponente key={json.id} depositoAgua={DepositoAgua.fromJSON(json)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const log = (type) => console.log.bind(console, type);

export const CreateFormDepositoAgua = () => {
    const [resultado, setResultado] = useState(null);

    const mandarDatosPost = (depositoAgua) => {
        createDepositoAgua(depositoAgua).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    const addDepositoAgua = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        const depositoAgua = DepositoAgua.fromJSON(formData);
        mandarDatosPost(depositoAgua);
    }

    return (
        <div>
            <h1>Formulario Depósito de Agua</h1>
            <Form
                schema={depositoAguaSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={addDepositoAgua}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const UpdateFormDepositoAgua = () => {
    const [resultado, setResultado] = useState(null);

    const mandarDatosPost = (depositoAgua) => {
        updateDepositoAgua(depositoAgua).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    const updateDepositoAgua = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        const depositoAgua = DepositoAgua.fromJSON(formData);
        mandarDatosPost(depositoAgua);
    }

    return (
        <div>
            <h1>Actualizar Depósito de Agua</h1>
            <Form
                schema={depositoAguaSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={updateDepositoAgua}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const DeleteDepositoAgua = () => {
    const [resultado, setResultado] = useState(null);

    const removeDepositoAgua = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        mandarDatosDelete(formData.id);
    }

    const mandarDatosDelete = (id) => {
        deleteDepositoAgua(id).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    return (
        <div>
            <h1>Borrar Depósito de Agua</h1>
            <Form
                schema={borrarDepositoAguaSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={removeDepositoAgua}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};
