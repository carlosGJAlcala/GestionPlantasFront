class Huerto {
    constructor(id, numeroMacetas) {
        this.id = id;
        this.numeroMacetas = numeroMacetas;
    }  
    static fromJSON(json) {
        return new Huerto(
            json.id,
            json.numeroMacetas
        );
    }
}

export default Huerto;