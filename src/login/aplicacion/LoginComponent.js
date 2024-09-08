import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLog } from "../infrastructura/LoginRepository";
import Login from "../dominio/Login";
import { LoginResp } from "../dominio/LoginResp";


const sha256=async(message)=> {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);                    

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string                  
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};
const Home = ({ onData }) => {
  const navigate = useNavigate();
  const [fallo, setFallo] = useState(false); 
  const [reps, setResp] = useState({
    idUser: "-1",
    permisoAdmin: "-1",
    userName: "",
  });

  const [formData, setFormData] = useState({
    userName: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
  const hash= async(message)=>{
  
     return await sha256(message);
  }


  const onButtonClick = async () => {
    try {
      const msg = Login.fromJson(formData);
      console.log("password vieja",msg.password);

      msg.password = await hash(msg.password);
      console.log("password nueva",msg.password);
      const response = await postLog(msg);
      const respuesta = LoginResp.fromJson(response.data);

      setResp(respuesta);
      localStorage.setItem('authToken', respuesta.token);

      if (
        respuesta.idUser !== "-1" &&
        respuesta.permisoAdmin !== "-1"
      ) {
        const permisoAdmin = respuesta.permisoAdmin === "1";
        respuesta.permisoAdmin = permisoAdmin;

        onData(respuesta);
        navigate("/dashboard");
      } else {
        setFallo(true);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setFallo(true);
    }
  };

  return (
    <div>
      <div className="p-3 mb-2 bg-success text-white">
        <h1 className="container text-white">INICIAR SESIÓN</h1>
      </div>

      <div className="container">
        <form>
          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="userName">
              Usuario
            </label>
            <input
              type="text"
              id="userName"
              className="form-control"
              value={formData.userName}
              onChange={handleInputChange}
            />
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-primary btn-block mb-4"
            onClick={onButtonClick}
          >
            Sign in
          </button>
        </form>
      </div>
      {fallo && (
        <div style={{ color: "red" }}>Autenticación incorrecta</div>
      )}
    </div>
  );
};

export default Home;
