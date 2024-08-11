export const sensorSchema = {
    title: 'Sensor',
    type: 'object',
    required: [
        'id',
        'nombreSensor',
        'magnitudAMedir',
        'cantidadMedida',
        'unidades'
    ],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
            description: 'ID único del sensor'
        },
        nombreSensor: {
            type: 'string',
            title: 'Nombre del Sensor',
            description: 'Nombre del sensor'
        },
        magnitudAMedir: {
            type: 'string',
            title: 'Magnitud a Medir',
            description: 'Magnitud que el sensor mide (por ejemplo, temperatura, humedad, etc.)'
        },
        cantidadMedida: {
            type: 'number',
            title: 'Cantidad Medida',
            description: 'Valor que el sensor ha medido'
        },
        unidades: {
            type: 'string',
            title: 'Unidades',
            description: 'Unidades de la magnitud medida (por ejemplo, °C, %, etc.)'
        }
    }
};

export const borrarSensorSchema = {
    title: 'Borrar Sensor',
    type: 'object',
    required: ['id'],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
            description: 'ID único del sensor a borrar'
        }
    }
};
