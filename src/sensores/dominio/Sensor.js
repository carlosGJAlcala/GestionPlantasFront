// Sensor.js
class Sensor {
    constructor(id, nombreSensor, magnitudAMedir, cantidadMedida, unidades) {
        this.id = id;
        this.nombreSensor = nombreSensor;
        this.magnitudAMedir = magnitudAMedir;
        this.cantidadMedida = cantidadMedida;
        this.unidades = unidades;
    }

    static fromJSON(json) {
        return new Sensor(
            json.id,
            json.nombreSensor,
            json.magnitudAMedir,
            json.cantidadMedida,
            json.unidades
        );
    }
}

export default Sensor;
