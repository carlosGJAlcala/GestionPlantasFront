export const huertoSchema = {
    title: 'Huerto',
    type: 'object',
    required: [
        'id',
        'numeroMacetas'
    ],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
            description: 'ID único del huerto'
        },
        numeroMacetas: {
            type: 'integer',
            title: 'Número de Macetas',
            description: 'Número de macetas en el huerto'
        }
    }
};

export const borrarHuertoSchema = {
    title: 'Borrar Huerto',
    type: 'object',
    required: ['id'],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
            description: 'ID único del huerto a borrar'
        }
    }
};
