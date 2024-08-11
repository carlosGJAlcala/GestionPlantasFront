export const loginSchema = {
    title: 'Login',
    type: 'object',
    required: ['userName', 'password'],
    properties: {
        userName: {
            type: 'string',
            title: 'Nombre de Usuario',
            description: 'El nombre de usuario para el inicio de sesión'
        },
        password: {
            type: 'string',
            title: 'Contraseña',
            description: 'La contraseña para el inicio de sesión'
        }
    }
};
