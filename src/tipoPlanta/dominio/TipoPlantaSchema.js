export const tipoPlantaSchema={

    title: 'TipoPlanta',
    type: 'object',
    required: [
        'id',
        'nombrePlanta',
        'descripcion',
        'nivelHumedadNecesarioMinimo',
        'nivelNitrogenoNecesarioMinimo',
        'nivelTemperaturaNecesarioMinimo',
        'nivelHumedadNecesarioMaximo',
        'nivelNitrogenoNecesarioMaximo',
        'nivelTemperaturaNecesarioMaximo',
        'estaciones',
        'zonaOrigen'
    ],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
            description: 'ID único de la planta'
        },
        nombrePlanta: {
            type: 'string',
            title: 'Nombre de la Planta',
            description: 'Nombre de la planta'
        },
        descripcion: {
            type: 'string',
            title: 'Descripción',
            description: 'Descripción de la planta'
        },
        nivelHumedadNecesarioMinimo: {
            type: 'number',
            title: 'Nivel de Humedad Necesario Mínimo',
            description: 'Nivel mínimo de humedad necesario (en porcentaje)'
        },
        nivelNitrogenoNecesarioMinimo: {
            type: 'number',
            title: 'Nivel de Nitrógeno Necesario Mínimo',
            description: 'Nivel mínimo de nitrógeno necesario (en porcentaje)'
        },
        nivelTemperaturaNecesarioMinimo: {
            type: 'number',
            title: 'Nivel de Temperatura Necesario Mínimo',
            description: 'Nivel mínimo de temperatura necesario (en grados Celsius)'
        },
        nivelHumedadNecesarioMaximo: {
            type: 'number',
            title: 'Nivel de Humedad Necesario Máximo',
            description: 'Nivel máximo de humedad necesario (en porcentaje)'
        },
        nivelNitrogenoNecesarioMaximo: {
            type: 'number',
            title: 'Nivel de Nitrógeno Necesario Máximo',
            description: 'Nivel máximo de nitrógeno necesario (en porcentaje)'
        },
        nivelTemperaturaNecesarioMaximo: {
            type: 'number',
            title: 'Nivel de Temperatura Necesario Máximo',
            description: 'Nivel máximo de temperatura necesario (en grados Celsius)'
        },
        estaciones: {
            type: 'string',
            title: 'Estaciones',
            description: 'Estaciones adecuadas para el crecimiento de la planta'
        },
        zonaOrigen: {
            type: 'string',
            title: 'Zona de Origen',
            description: 'Zona de origen de la planta'
        }
    }
}
export const borradotipoPlantaSchema={

    title: 'TipoPlanta',
    type: 'object',
    required: [
        'id',
        
    ],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
       
        }
    }
}