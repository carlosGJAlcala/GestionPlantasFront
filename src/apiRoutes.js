const port='8080';
const ip='localhost';
const API_BASE_URL='';
const API_BASE_URL_Login='http://'+ip+':'+port;
const apiRoutes={
    depositoAgua: {
        getAll: `${API_BASE_URL}/depositoagua`,
        getById: (id) => `${API_BASE_URL}/depositoagua/${id}`,
        getByUserName: (userName)=>`${API_BASE_URL}/depositoagua/userName/${userName}`,

        getByIdOrchard: (id) => `${API_BASE_URL}/depositoagua/huerto/${id}`,
        create: `${API_BASE_URL}/depositoagua`,
        update:  `${API_BASE_URL}/depositoagua`,
        delete: (id) => `${API_BASE_URL}/depositoagua/${id}` 

    },
    huerto:{
        getAll: `${API_BASE_URL}/huerto`,
        getById: (id) => `${API_BASE_URL}/huerto/${id}`,
        getByUserName: (userName)=>`${API_BASE_URL}/huerto/userName/${userName}`,
        create: `${API_BASE_URL}/huerto`,
        update:  `${API_BASE_URL}/huerto`,
        delete: (id) => `${API_BASE_URL}/huerto/${id}` 
       
    },
    login:{
     
        aut: `${API_BASE_URL_Login}/auth/login`
        
    },
    maceta:{
        getAll: `${API_BASE_URL}/maceta`,
        getById: (id) => `${API_BASE_URL}/maceta/${id}`,
        getByUserName: (userName)=>`${API_BASE_URL}/maceta/userName/${userName}`,

        getByIdOrchard: (id) => `${API_BASE_URL}/maceta/huerto/${id}`,
        create: `${API_BASE_URL}/maceta`,
        update:  `${API_BASE_URL}/maceta`,
        delete: (id) => `${API_BASE_URL}/maceta/${id}` 
    },
    persona:{
        getAll: `${API_BASE_URL}/persona`,
        getByUserName: (userName)=>`${API_BASE_URL}/persona/userName/${userName}`,

        getById: (id) => `${API_BASE_URL}/persona/${id}`,
        create: `${API_BASE_URL}/persona`,
        update:  `${API_BASE_URL}/persona`,
        delete: (id) => `${API_BASE_URL}/persona/${id}`  ,
        deleteByUserName: (userName) => `${API_BASE_URL}/persona/userName/${userName}`  

    },
    usuario:{
        getAll: `${API_BASE_URL}/usuario`,
        getById: (id) => `${API_BASE_URL}/usuario/${id}`,
        create: `${API_BASE_URL}/usuario`,
        update:  `${API_BASE_URL}/usuario`,
        delete: (id) => `${API_BASE_URL}/usuario/${id}`  
    }
    ,
    administrador:{
        getAll: `${API_BASE_URL}/administrador`,
        getById: (id) => `${API_BASE_URL}/administrador/${id}`,
        create: `${API_BASE_URL}/administrador`,
        update:  `${API_BASE_URL}/administrador`,
        delete: (id) => `${API_BASE_URL}/administrador/${id}`  
    },

    sensor:{
        getAll: `${API_BASE_URL}/sensor`,
        getById: (id) => `${API_BASE_URL}/sensor/${id}`,
        getByUserName: (userName)=>`${API_BASE_URL}/sensor/userName/${userName}`,

        getByNombre: (nombre) => `${API_BASE_URL}/sensor/${nombre}`,
        create: `${API_BASE_URL}/sensor`,
        update:  `${API_BASE_URL_Login}/sensor`,
        updateSenDepAgua: `${API_BASE_URL_Login}/sensorDepositoAgua`,
        delete: (id) => `${API_BASE_URL}/sensor/${id}`  
    },
    planta:{
        getAll: `${API_BASE_URL}/planta`,
        getById: (id) => `${API_BASE_URL}/planta/${id}`,
        getByUserName: (userName)=>`${API_BASE_URL}/planta/userName/${userName}`,

        getByState: (state) => `${API_BASE_URL}/planta/estado/${state}`,
        create: `${API_BASE_URL}/planta`,
        update:  `${API_BASE_URL}/planta`,
        delete: (id) => `${API_BASE_URL}/planta/${id}`  
    },
    tipoPlanta:{
        getAll: `${API_BASE_URL}/tipoPlanta`,
        getById: (id) => `${API_BASE_URL}/tipoPlanta/${id}`,
        getByName: (name) => `${API_BASE_URL}/tipoPlanta/nombre/${name}`,
        create: `${API_BASE_URL}/tipoPlanta`,
        update:  `${API_BASE_URL}/tipoPlanta`,
        delete: (id) => `${API_BASE_URL}/tipoPlanta/${id}`  
    }
}
export default apiRoutes;