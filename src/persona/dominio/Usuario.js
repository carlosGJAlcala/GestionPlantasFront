import { Administrador } from "./Administrador";
import Huerto  from "../../huerto/dominio/Huerto";
export class Usuario{
    constructor(id, administrador, fechaDeAlta, fechaBaja, huertos) {
        this.id = id;
        this.administrador = administrador;
        this.fechaDeAlta = fechaDeAlta;
        this.fechaBaja = fechaBaja;
        this.huertos = huertos;
    }
    static fromJSON(json) {
        const administradorPersona = new Administrador(json.administradorPersona.id);
        const huertos = json.huertos.map(huerto => new Huerto(huerto.id, huerto.numeroMacetas));
        return new Usuario(json.id, administradorPersona, json.fechaDeAlta, json.fechaBaja, huertos);
    }
}