import React from 'react'
import styles from './Footer.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_logo}>
            <img src='' alt=''/>
            <p>COMPAN</p>
        </div>
        <ul className={styles.footer_links}>
            <li>Company</li>
            <li>Produtos</li>
            <li>Sobre</li>
            <li>Contato</li>
        </ul>
        <div className={styles.footer_social_icons}>
            <div className={styles.footer_icons_container}>
                <FaInstagram style={{ fontSize: '30px' }}/>
            </div>
            <div className={styles.footer_icons_container}>
                <FaLinkedin style={{ fontSize: '30px' }}/>
            </div>
            <div className={styles.footer_icons_container}>
                <FaWhatsapp style={{ fontSize: '30px' }}/>
            </div>
        </div>
        <div className={styles.footer_copyright}>
            <hr/>
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer