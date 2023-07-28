import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
//rutas
import AboutMe from './assets/componentes/aboutme'
import Certifications from './assets/componentes/certifications'
import Contacts from './assets/componentes/contacts'
import Experience from './assets/componentes/experience'
import Proyects from './assets/componentes/proyects'
import AdminPage from './assets/admin/admiPage'




function App() {
  const [isAdmin,setIsAdmin]=useState(false);
  return (
    <>
    <Routes>
      <Route exact path='/' element={<AboutMe/>} />
      <Route exact path='/proyects' element={<Proyects isAdmin={isAdmin} setIsAdmin={setIsAdmin} />} />
      <Route exact path='/experience' element={<Experience/>} />
      <Route exact path='/certifications' element={<Certifications/>} />
      <Route exact path='/contacts' element={<Contacts/>} />
      {isAdmin && <Route exact path='/adminPage' element={<AdminPage/>}/> }
      {/* muestra adminPage solo si el usuario es administrador */}
    </Routes>
    </>
  )
}

export default App
