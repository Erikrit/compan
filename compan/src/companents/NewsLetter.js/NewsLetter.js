import React from 'react'
import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <div className={styles.newsletter}>
        <h1>Receba Anuncios Exclusivos No Seu E-mail!</h1>
        <p>Se inscreva em nosso site e fique sempre por dentro!</p>
        <div>
            <input type="email" placeholder='Seu Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter