import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import '../styles/login-modal.css'
import admiData from './admi_user.json'

const User= admiData;

const LoginModal=({isOpen, onClose, onLogin})=>{
    const[userName, setUserName]=useState('');
    const[password, setPassword]=useState('');
    const[error, setError]=useState("")

    const handleUserNameChange= (event)=> {
        setUserName(event.target.value);
    };

    const handlePasswordChange= (event)=>{
        setPassword(event.target.value);
    };

    const handleLogin=()=>{
        const Admin= User.find(u=>u.user===userName && u.contraseña=== password)
        
        if(Admin){
            setError("");//no hay error
            onLogin();//inicio de sesion exitoso
        }else{
            setError("Usuario o contraseña incorrectos")
        }
    };
    return(
        <Modal isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel= "Modal de inicio de sesion">

    <h2>Inicio de sesion</h2>
    <form>
        <div>
            <label>Usuario:</label>
            <input type="text" value={userName} onChange={handleUserNameChange} />
        </div>
        <div>
            <label>Contraseña:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />  
        </div>
        <button type="button" onClick={handleLogin}>Iniciar Sesion</button>
        {error && <p>{error}</p>}
    </form>
    </Modal>
    )
}
export default LoginModal