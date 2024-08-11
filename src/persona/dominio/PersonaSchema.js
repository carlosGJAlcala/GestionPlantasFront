export const personaSchema = {
    title: 'Persona',
    type: 'object',
    required: [
        'id',
        'nombre',
        'apellido',
        'fechaNacimiento',
        'genero',
        'email'
    ],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
            description: 'ID único de la persona'
        },
        nombre: {
            type: 'string',
            title: 'Nombre',
            description: 'Nombre de la persona'
        },
        apellido: {
            type: 'string',
            title: 'Apellido',
            description: 'Apellido de la persona'
        },
        fechaNacimiento: {
            type: 'string',
            format: 'date',
            title: 'Fecha de Nacimiento',
            description: 'Fecha de nacimiento de la persona'
        },
        genero: {
            type: 'string',
            title: 'Género',
            description: 'Género de la persona',
            enum: ['masculino', 'femenino', 'otro']
        },
        email: {
            type: 'string',
            format: 'email',
            title: 'Email',
            description: 'Correo electrónico de la persona'
        }
    }
};

export const borrarPersonaSchema = {
    title: 'Borrar Persona',
    type: 'object',
    required: ['id'],
    properties: {
        id: {
            type: 'integer',
            title: 'ID',
            description: 'ID único de la persona a borrar'
        }
    }
};
export const borrarMiPerfilSchema = {
    title: 'Confirmación de  la baja ',
    type: 'object',
    required: ['userName'],
    properties: {
        userName: {
            type: 'string',
            title: 'Introduzca tu nombre de usuario para confirmar la baja',
        }
    }
};