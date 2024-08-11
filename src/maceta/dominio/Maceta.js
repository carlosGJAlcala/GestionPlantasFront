// Maceta.js
class Maceta {
    constructor(id, posicionMacetaenElHuerto, huertoIdhuerto) {
        this.id = id;
        this.posicionMacetaenElHuerto = posicionMacetaenElHuerto;
        this.huertoIdhuerto = huertoIdhuerto;
    }

    static fromJSON(json) {
        return new Maceta(
            json.id,
            json.posicionMacetaenElHuerto,
            json.huertoIdhuerto
        );
    }
}

export default Maceta;
