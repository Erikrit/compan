import React, { useState } from 'react'
import styles from './Navbar.module.css';
import {
    faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cesta from '../Assets/cesta.png'
import logoAleatorio from '../Assets/logoAleatorio.png'
import { Link } from 'react-router-dom';


export const Navbar = () => {

    const [menu, setMenu] = useState("home")

  return (
    <div className={styles.navBar}>
        <div className={styles.nav_logo}>
            <img src={logoAleatorio} alt=''/>
            <p>Compan</p>
        </div>
        <ul className={styles.nav_menu}>
            <li onClick={()=>{setMenu('home')}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>  {menu === "home"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu('anuncio')}}><Link style={{textDecoration: 'none'}} to='/anuncio'>Anunciar</Link> {menu === "anuncio"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu('creditos')}}><Link style={{textDecoration: 'none'}} to='/creditos'>Crédito</Link> {menu === "creditos"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu('perfil')}}><Link style={{textDecoration: 'none'}} to='/perfil'>Perfil</Link> {menu === "perfil"? <hr/>:<></>}</li>
        </ul>
        <div className={styles.nav_login_cart}>
        <Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>
        <Link style={{textDecoration: 'none'}} to='/cart'><FontAwesomeIcon icon={faCartPlus}/>  </Link> 
            <div className={styles.nav_cart_count}>0</div>
        </div>
    </div>
  )
}
