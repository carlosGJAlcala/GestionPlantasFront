import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import './index.css'
import { DeleteTipoPlanta, UpdateFormTipoPlanta, CreateFormTipoPlanta, TipoPlantaLista } from './tipoPlanta/aplicacion/TipoPlantaComponentes';
import { SensorLista, CreateFormSensor, UpdateFormSensor, DeleteSensor, MiSensores } from './sensores/aplicacion/SensorComponente';
import { PlantaLista, CreateFormPlanta, UpdateFormPlanta, DeletePlanta, MisPlanta } from './planta/aplicacion/PlantaComponente';
import { MisDatos,PersonaLista, CreateFormPersona, UpdateFormPersona, DeletePersona, ConfirmarBaja } from './persona/aplicacion/PersonaComponent';
import {  CreateFormMaceta, UpdateFormMaceta, DeleteMaceta, MiMacetaLista, MacetaLista } from './maceta/aplicacion/MacetaCompont';
import { MiHuertoLista,HuertoLista, CreateFormHuerto, UpdateFormHuerto, DeleteHuerto } from './huerto/aplicacion/HuertoComponent';
import { useEffect, useState } from 'react'
import { DepositoAguaLista, CreateFormDepositoAgua, UpdateFormDepositoAgua, DeleteDepositoAgua, MiDepositoAgua } from './depositoagua/aplicacion/DepositoAugaComponent';
import Home from './login/aplicacion/LoginComponent';
import { LoginResp } from './login/dominio/LoginResp';


const NavigationBar = ({ basePath, padding }) => {

  return (
    <div className='barraPrincipal p-3 mb-2 bg-success text-white'>
      <Link style={padding} to={`${basePath}/list`}>List</Link>
      <Link style={padding} to={`${basePath}/create`}>Create</Link>
      <Link style={padding} to={`${basePath}/update`}>Update</Link>
      <Link style={padding} to={`${basePath}/delete`}>Delete</Link>
      <Link style={padding} to={`/Dashboard`}>Dashboard</Link>

    </div>
  );
};
const MiPerfil=({ basePath, padding }) => {

  return (
    <div className='barraPrincipal p-3 mb-2 bg-success text-white'>
      <Link style={padding} to={`${basePath}/list`}>Mi perfil</Link>
      <Link style={padding} to={`${basePath}/delete`}>Dar baja</Link>
      <Link style={padding} to={`/Dashboard`}>Dashboard</Link>

    </div>
  );
};
const MiDeposito=({ basePath, padding }) => {

  return (
    <div className='barraPrincipal p-3 mb-2 bg-success text-white'>
      <Link style={padding} to={`${basePath}/list`}>Mi deposito</Link>

      <Link style={padding} to={`/Dashboard`}>Dashboard</Link>

    </div>
  );
};
const Dashboard = ({perm ,userName}) => {
  const padding = {
    padding: 30
  }

  console.log('renderiza');
  
  return (
    <div  >


      <div className=' barraPrincipal p-3 mb-2 bg-success text-white'>
        {perm ? <Link style={padding} to="/DepositoAgua">Deposito Agua </Link> : <Link style={padding} to={`/DepositoAgua/${userName}`}>Mi deposito de agua </Link> }
        {perm ? <Link style={padding} to="/Huerto">Huerto </Link> : <Link style={padding} to={`/Huerto/${userName}`}>Mis huertos </Link>}
        {perm ? <Link style={padding} to="/Maceta">Maceta </Link> : <Link style={padding} to={`/Maceta/${userName}`}>Mis macetas </Link>}
        {perm ? <Link style={padding} to="/Persona">Persona </Link> : <Link style={padding} to={`/Persona/${userName}`}>Mis datos </Link>}
        {perm ? <Link style={padding} to="/Planta">Planta </Link> : <Link style={padding} to={`/Planta/${userName}`}> Mis plantas </Link>}
        {perm ? <Link style={padding} to="/Sensor">Sensor </Link> : <Link style={padding} to={`/Sensor/${userName}`}>Mis sensores </Link> }
       <Link style={padding} to="/TipoPlanta">Tipos de plantas </Link>
        
       <Link style={padding} to="/">Salir </Link> 
      </div>



    </div>
  );

}



const ComponenteComb = ({ Componente1, Componente2, basePath, padding, userName }) => (

  <div>
    <Componente1 basePath={basePath} padding={padding} />
    <div className='container'>
      <Componente2 userName={userName}/>
    </div>

  </div>
)

const App = () => {
  const [permiso, setPermiso] = useState(false);
  const [userName,setUserName]=useState('');

  const handleData = (data) => {
    const datos = LoginResp.fromJson(data);
    setPermiso(datos.permisoAdmin);
    setUserName(datos.userName);
  }

  const padding = {
    padding: 30
  }
  const [email, setEmail] = useState('')
  return (<div>
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<Home onData={handleData} />} />
          <Route path="/dashboard" element={<Dashboard perm={permiso} userName={userName} />} />

        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/DepositoAgua" element={<NavigationBar basePath="/DepositoAgua" padding={padding} />} />
          <Route path="/Huerto" element={<NavigationBar basePath="/Huerto" padding={padding} />} />
          <Route path="/Maceta" element={<NavigationBar basePath="/Maceta" padding={padding} />} />
          <Route path="/Persona" element={<NavigationBar basePath="/Persona" padding={padding} />} />
          <Route path="/Planta" element={<NavigationBar basePath="/Planta" padding={padding} />} />
          <Route path="/Sensor" element={<NavigationBar basePath="/Sensor" padding={padding} />} />
          <Route path="/TipoPlanta" element={<NavigationBar basePath="/TipoPlanta" padding={padding} />} />

          <Route path={`/DepositoAgua/${userName}`} element={<MiDeposito basePath={`/DepositoAgua/${userName}`} padding={padding} />} />
          <Route path={`/Huerto/${userName}`} element={<NavigationBar basePath={`/Huerto/${userName}`} padding={padding} />} />
          <Route path={`/Maceta/${userName}`}element={<NavigationBar basePath={`/Maceta/${userName}`} padding={padding} />} />
          <Route path={`/Persona/${userName}`}element={<MiPerfil basePath={`/Persona/${userName}`} padding={padding} />} />
          <Route path={`/Planta/${userName}`} element={<NavigationBar basePath={`/Planta/${userName}`} padding={padding} />} />
          <Route path={`/Sensor/${userName}`}element={<NavigationBar basePath={`/Sensor/${userName}`} padding={padding} />} />
          <Route path={`/TipoPlanta/${userName}`} element={<NavigationBar basePath={`/TipoPlanta/${userName}`}padding={padding} />} />

        </Routes>
      </div>


      <Routes>
        <Route path="/DepositoAgua/list" element={<ComponenteComb Componente1={NavigationBar} Componente2={DepositoAguaLista} padding={padding} basePath="/DepositoAgua" />} />
        <Route path={`/DepositoAgua/${userName}/list`} element={<ComponenteComb Componente1={MiDeposito} Componente2={MiDepositoAgua} padding={padding} basePath={`/DepositoAgua/${userName}`} userName={userName} />} />

        <Route path="/DepositoAgua/create" element={<ComponenteComb Componente1={NavigationBar} Componente2={CreateFormDepositoAgua} padding={padding} basePath="/DepositoAgua" />} />
        <Route path="/DepositoAgua/update" element={<ComponenteComb Componente1={NavigationBar} Componente2={UpdateFormDepositoAgua} padding={padding} basePath="/DepositoAgua" />} />
        <Route path="/DepositoAgua/delete" element={<ComponenteComb Componente1={NavigationBar} Componente2={DeleteDepositoAgua} padding={padding} basePath="/DepositoAgua" />} />

        <Route path="/Huerto/list" element={<ComponenteComb Componente1={NavigationBar} Componente2={HuertoLista} padding={padding} basePath="/Huerto" />} />
        <Route path={`/Huerto/${userName}/list`} element={<ComponenteComb Componente1={NavigationBar} Componente2={MiHuertoLista} padding={padding} basePath={`/Huerto/${userName}`} userName={userName} />} />

        <Route path="/Huerto/create" element={<ComponenteComb Componente1={NavigationBar} Componente2={CreateFormHuerto} padding={padding} basePath="/Huerto" />} />
        <Route path={`/Huerto/${userName}/create`} element={<ComponenteComb Componente1={NavigationBar} Componente2={CreateFormHuerto} padding={padding} basePath={`/Huerto/${userName}`} userName={userName}/>} />
        <Route path="/Huerto/update" element={<ComponenteComb Componente1={NavigationBar} Componente2={UpdateFormHuerto} padding={padding} basePath="/Huerto" />} />
        <Route path={`/Huerto/${userName}/update`} element={<ComponenteComb Componente1={NavigationBar} Componente2={UpdateFormHuerto} padding={padding} basePath={`/Huerto/${userName}`} userName={userName} />} />
        <Route path="/Huerto/delete" element={<ComponenteComb Componente1={NavigationBar} Componente2={DeleteHuerto} padding={padding} basePath="/Huerto" />} />
        <Route path={`/Huerto/${userName}/delete`} element={<ComponenteComb Componente1={NavigationBar} Componente2={DeleteHuerto} padding={padding} basePath={`/Huerto/${userName}`} userName={userName}/>} />

        <Route path="/Maceta/list" element={<ComponenteComb Componente1={NavigationBar} Componente2={MacetaLista} padding={padding} basePath="/Maceta" />} />
        <Route path={`/Maceta/${userName}/list`} element={<ComponenteComb Componente1={NavigationBar} Componente2={MiMacetaLista} padding={padding} basePath={`/Maceta/${userName}`} userName={userName} />} />

        <Route path="/Maceta/create" element={<ComponenteComb Componente1={NavigationBar} Componente2={CreateFormMaceta} padding={padding} basePath="/Maceta" />} />
        <Route path={`/Maceta/${userName}/create`} element={<ComponenteComb Componente1={NavigationBar} Componente2={CreateFormMaceta} padding={padding} basePath={`/Maceta/${userName}`} userName={userName} />} />

        <Route path="/Maceta/update" element={<ComponenteComb Componente1={NavigationBar} Componente2={UpdateFormMaceta} padding={padding} basePath="/Maceta" />} />
        <Route path={`/Maceta/${userName}/update`} element={<ComponenteComb Componente1={NavigationBar} Componente2={UpdateFormMaceta} padding={padding} basePath={`/Maceta/${userName}`} userName={userName} />} />

        <Route path="/Maceta/delete" element={<ComponenteComb Componente1={NavigationBar} Componente2={DeleteMaceta} padding={padding} basePath="/Maceta" />} />
        <Route path={`/Maceta/${userName}/delete`} element={<ComponenteComb Componente1={NavigationBar} Componente2={DeleteMaceta} padding={padding} basePath={`/Maceta/${userName}`} userName={userName} />} />


        <Route path="/Persona/list" element={<ComponenteComb Componente1={NavigationBar} Componente2={PersonaLista} padding={padding} basePath="/Persona" />} />
        <Route path={`/Persona/${userName}/list`} element={<ComponenteComb Componente1={MiPerfil} Componente2={MisDatos} padding={padding} basePath={`/Persona/${userName}`} userName={userName} />} />

        <Route path="/Persona/create" element={<ComponenteComb Componente1={NavigationBar} Componente2={CreateFormPersona} padding={padding} basePath="/Persona" />} />
        <Route path="/Persona/update" element={<ComponenteComb Componente1={NavigationBar} Componente2={UpdateFormPersona} padding={padding} basePath="/Persona" />} />
        <Route path="/Persona/delete" element={<ComponenteComb Componente1={NavigationBar} Componente2={DeletePersona} padding={padding} basePath="/Persona" />} />
        <Route path={`/Persona/${userName}/delete`} element={<ComponenteComb Componente1={MiPerfil} Componente2={ConfirmarBaja} padding={padding} basePath={`/Persona/${userName}`} userName={userName} />} />

        <Route path="/Planta/list" element={<ComponenteComb Componente1={NavigationBar} Componente2={PlantaLista} padding={padding} basePath="/Planta" />} />
        <Route path={`/Planta/${userName}/list`} element={<ComponenteComb Componente1={NavigationBar} Componente2={MisPlanta} padding={padding} basePath={`/Planta/${userName}`} userName={userName} />} />

        <Route path="/Planta/create" element={<ComponenteComb Componente1={NavigationBar} Componente2={CreateFormPlanta} padding={padding} basePath="/Planta" />} />
        <Route path={`/Planta/${userName}/create`} element={<ComponenteComb Componente1={NavigationBar} Componente2={CreateFormPlanta} padding={padding} basePath={`/Planta/${userName}`} userName={userName} />} />

        <Route path="/Planta/update" element={<ComponenteComb Componente1={NavigationBar} Componente2={UpdateFormPlanta} padding={padding} basePath="/Planta" />} />
        <Route path={`/Planta/${userName}/update`} element={<ComponenteComb Componente1={NavigationBar} Componente2={UpdateFormPlanta} padding={padding} basePath={`/Planta/${userName}`} userName={userName} />} />

        <Route path="/Planta/delete" element={<ComponenteComb Componente1={NavigationBar} Componente2={DeletePlanta} padding={padding} basePath="/Planta" />} />
        <Route path={`/Planta/${userName}/delete`} element={<ComponenteComb Componente1={NavigationBar} Componente2={DeletePlanta} padding={padding} basePath={`/Planta/${userName}`} userName={userName} />} />

        <Route path="/Sensor/list" element={<ComponenteComb Componente1={NavigationBar} Componente2={SensorLista} padding={padding} basePath="/Sensor" />} />
        <Route path={`/Sensor/${userName}/list`} element={<ComponenteComb Componente1={NavigationBar} Componente2={MiSensores} padding={padding} basePath={`/Sensor/${userName}`} userName={userName} />} />

        <Route path="/Sensor/create" element={<ComponenteComb Componente1={NavigationBar} Componente2={CreateFormSensor} padding={padding} basePath="/Sensor" />} />
        <Route path={`/Sensor/${userName}/create`} element={<ComponenteComb Componente1={NavigationBar} Componente2={CreateFormSensor} padding={padding} basePath={`/Sensor/${userName}`} userName={userName} />} />

        <Route path="/Sensor/update" element={<ComponenteComb Componente1={NavigationBar} Componente2={UpdateFormSensor} padding={padding} basePath="/Sensor" />} />
        <Route path={`/Sensor/${userName}/update`} element={<ComponenteComb Componente1={NavigationBar} Componente2={UpdateFormSensor} padding={padding} basePath={`/Sensor/${userName}`} userName={userName} />} />

        <Route path="/Sensor/delete" element={<ComponenteComb Componente1={NavigationBar} Componente2={DeleteSensor} padding={padding} basePath="/Sensor" />} />
        <Route path={`/Sensor/${userName}/delete`} element={<ComponenteComb Componente1={NavigationBar} Componente2={DeleteSensor} padding={padding} basePath={`/Sensor/${userName}`} userName={userName} />} />

        <Route path="/TipoPlanta/list" element={<ComponenteComb Componente1={NavigationBar} Componente2={TipoPlantaLista} padding={padding} basePath="/TipoPlanta" />} />
        <Route path="/TipoPlanta/create" element={<ComponenteComb Componente1={NavigationBar} Componente2={CreateFormTipoPlanta} padding={padding} basePath="/TipoPlanta" />} />
        <Route path="/TipoPlanta/update" element={<ComponenteComb Componente1={NavigationBar} Componente2={UpdateFormTipoPlanta} padding={padding} basePath="/TipoPlanta" />} />
        <Route path="/TipoPlanta/delete" element={<ComponenteComb Componente1={NavigationBar} Componente2={DeleteTipoPlanta} padding={padding} basePath="/TipoPlanta" />} />

      </Routes>




    </Router>

    <footer class=".fixed-bottom "  >
      <div id="menuFooter" className=' p-1 mb-2 bg-success text-white'  >
        <div > Contacto: info@edu.com</div>
        <div > Numero: 586 15 11 23</div>
        <div> Administrador Carlos G</div>


      </div>


    </footer>
  </div>)

};

export default App;
