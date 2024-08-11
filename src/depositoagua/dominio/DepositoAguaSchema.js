export const depositoAguaSchema = {
    title: 'DepositoAgua',
    type: 'object',
    required: [
        'id',
        'cantidadMaxima',
        'huertoIdhuertoId',
        'huertoIdhuertoNumeroMacetas',
        'alturaDeposito',
        'estadoDeposito',
        'estado'
    ],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
            description: 'ID único del depósito de agua'
        },
        cantidadMaxima: {
            type: 'number',
            title: 'Cantidad Máxima',
            description: 'Cantidad máxima de agua en litros'
        },
        huertoIdhuertoId: {
            type: 'integer',
            title: 'ID del Huerto',
            description: 'ID del huerto asociado'
        },
        huertoIdhuertoNumeroMacetas: {
            type: 'integer',
            title: 'Número de Macetas del Huerto',
            description: 'Número de macetas en el huerto asociado'
        },
        alturaDeposito: {
            type: 'number',
            title: 'Altura del Depósito',
            description: 'Altura del depósito de agua en metros'
        },
        estadoDeposito: {
            type: 'string',
            title: 'Estado del Depósito',
            description: 'Estado del depósito de agua'
        },
        estado: {
            type: 'string',
            title: 'Estado',
            description: 'Estado general del depósito de agua'
        }
    }
};

export const borrarDepositoAguaSchema = {
    title: 'Borrar DepositoAgua',
    type: 'object',
    required: ['id'],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
            description: 'ID único del depósito de agua a borrar'
        }
    }
};
