export const macetaSchema = {
    title: 'Maceta',
    type: 'object',
    required: [
        'id',
        'posicionMacetaenElHuerto',
        'huertoIdhuerto'
    ],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
            description: 'ID único de la maceta'
        },
        posicionMacetaenElHuerto: {
            type: 'string',
            title: 'Posición en el Huerto',
            description: 'Posición de la maceta en el huerto'
        },
        huertoIdhuerto: {
            type: 'integer',
            title: 'ID del Huerto',
            description: 'ID del huerto al que pertenece la maceta'
        }
    }
};

export const borrarMacetaSchema = {
    title: 'Borrar Maceta',
    type: 'object',
    required: ['id'],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
            description: 'ID único de la maceta a borrar'
        }
    }
};
