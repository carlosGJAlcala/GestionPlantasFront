export class Persona{
    constructor(id, nombre, apellido, usuario, correoElectronico, passwordSHA256, dni) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.correoElectronico = correoElectronico;
        this.passwordSHA256 = passwordSHA256;
        this.dni = dni;
    }
    static fromJSON(json) {
        return new Persona(
            json.id,
            json.nombre,
            json.apellido,
            json.usuario,
            json.correoElectronico,
            json.passwordSHA256,
            json.dni
        );
    }
}