// TipoPlanta.js
class TipoPlanta {
    constructor(
        id,
        nombrePlanta,
        descripcion,
        nivelHumedadNecesarioMinimo,
        nivelNitrogenoNecesarioMinimo,
        nivelTemperaturaNecesarioMinimo,
        nivelHumedadNecesarioMaximo,
        nivelNitrogenoNecesarioMaximo,
        nivelTemperaturaNecesarioMaximo,
        estaciones,
        zonaOrigen
    ) {
        this.id = id;
        this.nombrePlanta = nombrePlanta;
        this.descripcion = descripcion;
        this.nivelHumedadNecesarioMinimo = nivelHumedadNecesarioMinimo;
        this.nivelNitrogenoNecesarioMinimo = nivelNitrogenoNecesarioMinimo;
        this.nivelTemperaturaNecesarioMinimo = nivelTemperaturaNecesarioMinimo;
        this.nivelHumedadNecesarioMaximo = nivelHumedadNecesarioMaximo;
        this.nivelNitrogenoNecesarioMaximo = nivelNitrogenoNecesarioMaximo;
        this.nivelTemperaturaNecesarioMaximo = nivelTemperaturaNecesarioMaximo;
        this.estaciones = estaciones;
        this.zonaOrigen = zonaOrigen;
    }

    static fromJSON(json) {
        return new TipoPlanta(
            json.id,
            json.nombrePlanta,
            json.descripcion,
            json.nivelHumedadNecesarioMinimo,
            json.nivelNitrogenoNecesarioMinimo,
            json.nivelTemperaturaNecesarioMinimo,
            json.nivelHumedadNecesarioMaximo,
            json.nivelNitrogenoNecesarioMaximo,
            json.nivelTemperaturaNecesarioMaximo,
            json.estaciones,
            json.zonaOrigen
        );
    }
}

export default TipoPlanta;
