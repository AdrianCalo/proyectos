import React from "react";
import Header from "./header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//importar la base de datos
import datos from '../data-proyectos.json'
import '../styles/proyecto.css'
import LoginModal from "../admin/LoginModal";

function Proyects() {
    
    const [modalIsOpen, setModalIsOpen]=useState(false);
    const navigate= useNavigate();//obtengo la funcion de navegacion
    
    const handleLoginSuccess=()=>{
        //redirecciona a la pagina Adminpage usando navigate
        navigate("/adminPage")
        console.log("inicio de sesion exitoso")
    }
        
    const handleAdminButtonClick=()=>{
            //abre el modal cuando se hace click en "Admin"
            setModalIsOpen(true)
    }
    const tabla= datos.map((data,index)=>(
        <tr key={index}>
            <td>{data.nombre}</td>
            <td>{data.descripcion}</td>
            <td>{data.link}</td>
        </tr>
));

 return(
        <>
        <Header/>
        <div className="cont-principal-proyect">
            <div className="title">
                <h2>Proyectos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabla}
                    </tbody>
                </table>
            </div>
            <div className="botonera">
                {/* boton para abrir el modal */}
                <button type="button" onClick={handleAdminButtonClick}>Admin</button>            
            </div>
        </div>
        <LoginModal isOpen={modalIsOpen} 
        onClose={()=>setModalIsOpen(false)}
        onLogin={handleLoginSuccess}/>

        </>
    )
}
export default Proyects