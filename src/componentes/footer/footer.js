import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <>
      <footer className='info'>
          <div className='iconos-sociales-contenedor'> 
            <a href='' className='icono-social'></a>
            <a href='' className='icono-social'></a>
            <a href='' className='icono-social'></a>
            <a href='' className='icono-social'></a>
          </div>
          <ul className='menu-Footer'>
            <li className='menu-item'>Legal</li>
            <li className='menu-item'>Cookies</li>
            <li className='menu-item'>Privacidad</li>
            <li className='menu-item'>Contacto</li>
          </ul>
        <span className='text'>Federico Del Rio | Maximiliano Correa | BootCamp Matea 2022 </span>
      </footer>
    </>
  )
}
