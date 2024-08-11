// Planta.js
class Planta {
    constructor(id, nombrePlanta, fechaPlantacion, estado, tipoplantaIdtipoplanta, macetaIdmaceta, nivelActualHumedad, nivelActualLuminosidad, nivelActualTemperatura) {
        this.id = id;
        this.nombrePlanta = nombrePlanta;
        this.fechaPlantacion = new Date(fechaPlantacion[0], fechaPlantacion[1] - 1, fechaPlantacion[2]);
        this.estado = estado;
        this.tipoplantaIdtipoplanta = tipoplantaIdtipoplanta;
        this.macetaIdmaceta = macetaIdmaceta;
        this.nivelActualHumedad = nivelActualHumedad;
        this.nivelActualLuminosidad = nivelActualLuminosidad;
        this.nivelActualTemperatura = nivelActualTemperatura;
    }

    static fromJSON(json) {
        return new Planta(
            json.id,
            json.nombrePlanta,
            json.fechaPlantacion,
            json.estado,
            json.tipoplantaIdtipoplanta,
            json.macetaIdmaceta,
            json.nivelActualHumedad,
            json.nivelActualLuminosidad,
            json.nivelActualTemperatura
        );
    }
}

export default Planta;