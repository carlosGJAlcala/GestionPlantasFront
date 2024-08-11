import React from 'react';
import ReactDOM from 'react';
import axios from 'axios'
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { borradotipoPlantaSchema,tipoPlantaSchema } from '../dominio/TipoPlantaSchema';
import { useState, useEffect } from 'react'
import { updateTipoPlanta,getAllTipoPlantas,createTipoPlanta,deleteTipoPlanta } from '../infrastructura/TipoPlantaRepository'
import TipoPlanta from '../dominio/TipoPlanta';
const CabeceraTipoPlanta=()=>{
    return(
    <tr>
        <td>Nombre de la Planta </td>
        <td>Nivel de Humedad Minimo </td>
        <td>Nivel de Humedad Máximo </td>
        <td>Nivel de Temperatura Minimo </td>
        <td>Nivel de Temperatura Máximo </td>
        <td>Origen de la Planta </td>
        <td>Descripción de la Planta </td>
    </tr>);
}
const TipoPlantaComponente = ({ tipoPlanta }) => {
    return (
        <tr>
            <td>{tipoPlanta.nombrePlanta}</td>
            <td>{tipoPlanta.nivelHumedadNecesarioMinimo}</td>
            <td>{tipoPlanta.nivelHumedadNecesarioMaximo}</td>
            <td>{tipoPlanta.nivelTemperaturaNecesarioMinimo}</td>
            <td>{tipoPlanta.nivelTemperaturaNecesarioMaximo}</td>
            <td>{tipoPlanta.zonaOrigen}</td>
            <td>{tipoPlanta.descripcion}</td>
        </tr>
    );
};


export const TipoPlantaLista = ( ) => {
    const array=[];
    const [tipoPlanta, setTipoPlanta]=useState([])
    useEffect(() => {
        console.log('useEfect');
     
         getAllTipoPlantas().then(response=>{
            console.log(response.data);
            setTipoPlanta(response.data);
        });
       
      }, []);
 

    return (
        <div>
      <h1>Tipos de Plantas</h1>
            <table class="table">
                <thead>     
                     
                     </thead>
                <tbody>              
                    <CabeceraTipoPlanta/>
                {tipoPlanta.map(json => (
                    <TipoPlantaComponente key={json.id} tipoPlanta={json} />
                ))}</tbody>
            </table>
       
       
            
        </div>
    );

}; 


const log = (type) => console.log.bind(console, type);
  


export const CreateFormTipoPlanta=()=>{
    const [resultado, setResultado]=useState(null)

    const mandarDatosPost=(tipoPlanta)=>{
        createTipoPlanta(tipoPlanta).then(response=>{
            const resultboolean=Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
            
        });
    
    }
    const addTipoPlanta=({formData}, e)=>{
        e.preventDefault();
        console.log("Data submitted: ",  formData);
        const tipoPlanta = TipoPlanta.fromJSON(formData)
        mandarDatosPost(tipoPlanta)

    }
    return (
        <div>
            <h1>Formulario Tipo de Planta</h1>
   
    <Form
      schema={tipoPlantaSchema}
      validator={validator}
      onChange={log('changed')}
      onSubmit={addTipoPlanta}
      onError={log('errors')}
    />

        {resultado === true && <div>El formulario fue enviado con éxito.</div>}
        {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}

    
        </div>
    );
        
};
export const UpdateFormTipoPlanta=()=>{
    const [resultado, setResultado]=useState(null)

    const mandarDatosPost=(tipoPlanta)=>{
        updateTipoPlanta(tipoPlanta).then(response=>{
            const resultboolean=Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
            
        });
    
    }
    const updateTipoPlanta=({formData}, e)=>{
        e.preventDefault();
        console.log("Data submitted: ",  formData);
        const tipoPlanta = TipoPlanta.fromJSON(formData)
        mandarDatosPost(tipoPlanta)

    }
    return (
        <div>
            <h1>Formulario Tipo de Planta</h1>
   
    <Form
      schema={tipoPlantaSchema}
      validator={validator}
      onChange={log('changed')}
      onSubmit={updateTipoPlanta}
      onError={log('errors')}
    />

        {resultado === true && <div>El formulario fue enviado con éxito.</div>}
        {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}

    
        </div>
    );
        
};
export const DeleteTipoPlanta=()=>{
    const [resultado, setResultado]=useState(null)
    const removeTipoPlanta=({formData}, e)=>{
        e.preventDefault();
        console.log("Data submitted: ",  formData);
  
        mandarDatosDelete(formData.id)

    }
    
    const mandarDatosDelete=(id)=>
        {   
        deleteTipoPlanta(id).then(response=>{
            const resultboolean=Boolean(response.data);
            console.log(resultboolean);
            setResultado(resultboolean);
            
        });
    
    }

    return (
        <div>
            <h1>borrar tipo de Planta</h1>
   
            <Form
      schema={borradotipoPlantaSchema}
      validator={validator}
      onChange={log('changed')}
      onSubmit={removeTipoPlanta}
      onError={log('errors')}
    />
    

        {resultado === true && <div>El formulario fue enviado con éxito.</div>}
        {resultado === false && <div>Hubo un problema al enviar el formulario.</div>}

    
        </div>
    );
        
};