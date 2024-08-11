// DepositoAgua.js
class DepositoAgua {
    constructor(id, cantidadMaxima, huertoIdhuertoId, huertoIdhuertoNumeroMacetas, alturaDeposito, estadoDeposito, estado) {
        this.id = id;
        this.cantidadMaxima = cantidadMaxima;
        this.huertoIdhuertoId = huertoIdhuertoId;
        this.huertoIdhuertoNumeroMacetas = huertoIdhuertoNumeroMacetas;
        this.alturaDeposito = alturaDeposito;
        this.estadoDeposito = estadoDeposito;
        this.estado = estado;
    }

    static fromJSON(json) {
        return new DepositoAgua(
            json.id,
            json.cantidadMaxima,
            json.huertoIdhuertoId,
            json.huertoIdhuertoNumeroMacetas,
            json.alturaDeposito,
            json.estadoDeposito,
            json.estado
        );
    }
}

export default DepositoAgua;
