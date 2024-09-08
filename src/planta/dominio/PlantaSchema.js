export const plantaSchema = {
    title: 'Planta',
    type: 'object',
    required: [
        'id',
        'nombrePlanta',
        'fechaPlantacion',
        'estado',
        'tipoplantaIdtipoplanta',
        'macetaIdmaceta',
        'nivelActualHumedad',
        'nivelActualLuminosidad',
        'nivelActualTemperatura'
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
        fechaPlantacion: {
            type: 'string',
            format: 'date',
            title: 'Fecha de Plantación',
            description: 'Fecha en que se plantó la planta'
        },
        estado: {
            type: 'string',
            title: 'Estado',
            description: 'Estado actual de la planta',
            enum: ['ALEGRE', 'TRISTE', '']
        },
        tipoplantaIdtipoplanta: {
            type: 'integer',
            title: 'ID del Tipo de Planta',
            description: 'ID del tipo de planta asociada'
        },
        macetaIdmaceta: {
            type: 'integer',
            title: 'ID de la Maceta',
            description: 'ID de la maceta donde está plantada la planta'
        },
        nivelActualHumedad: {
            type: 'number',
            title: 'Nivel Actual de Humedad',
            description: 'Nivel actual de humedad (en porcentaje)'
        },
        nivelActualLuminosidad: {
            type: 'number',
            title: 'Nivel Actual de Luminosidad',
            description: 'Nivel actual de luminosidad (en lux)'
        },
        nivelActualTemperatura: {
            type: 'number',
            title: 'Nivel Actual de Temperatura',
            description: 'Nivel actual de temperatura (en grados Celsius)'
        }
    }
};

export const borrarPlantaSchema = {
    title: 'Borrar Planta',
    type: 'object',
    required: ['id'],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
            description: 'ID único de la planta a borrar'
        }
    }
};
