import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { personaSchema, borrarPersonaSchema, borrarMiPerfilSchema } from '../dominio/PersonaSchema';
import { updatePersona, getAllPersonas, createPersona, deletePersona, getPersonaByUserName, deletePerfil } from '../infrastructura/PersonaRepository';
import { Persona } from '../dominio/Persona';
import { Navigate } from 'react-router-dom';

const CabeceraPersona = () => {
    return (
        <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Usuario</td>
            <td>Email</td>
        </tr>
    );
}

const PersonaComponente = ({ persona }) => {
    console.log('persona: ', persona);
    return (
        <tr>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
            <td>{persona.usuario}</td>
            <td>{persona.correoElectronico}</td>
        </tr>
    );
};

export const PersonaLista = () => {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        console.log('useEffect');
        getAllPersonas().then(response => {
            console.log(response.data);
            setPersonas(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Personas</h1>
            <table class="table">
                <thead>
                    <CabeceraPersona />
                </thead>
                <tbody>
                    {personas.map(json => (
                        <PersonaComponente key={json.id} persona={Persona.fromJSON(json)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export const MisDatos = ({userName}) => {
    const [datos, setDatos] = useState({});

    useEffect(() => {
        console.log('useEffect');
        getPersonaByUserName(userName).then(response => {
            console.log(response.data);
            setDatos(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Mis datos</h1>
            <table class="table">
                <thead>
                    <CabeceraPersona />
                </thead>
                <tbody>
                    
                        <PersonaComponente persona={Persona.fromJSON(datos)} />
                
                </tbody>
            </table>
        </div>
    );
};

const log = (type) => console.log.bind(console, type);

export const CreateFormPersona = () => {
    const [resultado, setResultado] = useState(null);

    const mandarDatosPost = (persona) => {
        createPersona(persona).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    const addPersona = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        const persona = Persona.fromJSON(formData);
        mandarDatosPost(persona);
    }

    return (
        <div>
            <h1>Formulario Persona</h1>
            <Form
                schema={personaSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={addPersona}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const UpdateFormPersona = () => {
    const [resultado, setResultado] = useState(null);

    const mandarDatosPost = (persona) => {
        updatePersona(persona).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    const updatePersona = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        const persona = Persona.fromJSON(formData);
        mandarDatosPost(persona);
    }

    return (
        <div>
            <h1>Actualizar Persona</h1>
            <Form
                schema={personaSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={updatePersona}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const DeletePersona = () => {
    const [resultado, setResultado] = useState(null);

    const removePersona = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        mandarDatosDelete(formData.id);
    }

    const mandarDatosDelete = (id) => {
        deletePersona(id).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    return (
        <div>
            <h1>Borrar Persona</h1>
            <Form
                schema={borrarPersonaSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={removePersona}
                onError={log('errors')}
            />
            {resultado === true && <div>El formulario fue enviado con éxito.</div>}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};

export const ConfirmarBaja = () => {
    const [resultado, setResultado] = useState(null);

    const removePersona = ({ formData }, e) => {
        e.preventDefault();
        console.log("Data submitted: ", formData);
        mandarDatosDelete(formData.userName);
    }

    const mandarDatosDelete = (userName) => {
        deletePerfil(userName).then(response => {
            const resultboolean = Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
        });
    }

    return (
        <div>
            <h1>Borrar Persona</h1>
            <Form
                schema={borrarMiPerfilSchema}
                validator={validator}
                onChange={log('changed')}
                onSubmit={removePersona}
                onError={log('errors')}
            />
            {resultado === true && Navigate("/Dashboard")}
            {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}
        </div>
    );
};
