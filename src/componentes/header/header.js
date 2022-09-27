import React from 'react'
import './header.css'






function Header() {
  return (
    <header>
      <h1 className='titulo'>Formulario | Matea</h1> 
      <ul>
         <li className='menu-items'>Inicio</li>
         <li className='menu-items'>Servicio</li>
         <li className='menu-items'>Ayuda</li>
         <li className='menu-items'>Contacto</li>
      </ul>
      <div className='hamburguesa' id='hamburguesa'>
        <span className='linea'></span>
        <span className='linea'></span>
        <span className='linea'></span>
      </div>
      <div className='menu-telefono' id='menu'>
        <span className='menu-items'>Inicio</span>
        <span className='menu-items'>Servicio</span>
        <span className='menu-items'>Ayuda</span>
        <span className='menu-items'>Contacto</span>
      </div>
      </header>
  )
}

export default Header