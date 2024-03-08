import React from 'react'
import styles from "./LoginSingup.module.css";

const LoginSingup = () => {
  return (
    <div className={styles.loginSingup}>
      <div className={styles.loginSingup_container}>
        <h1>Registrar</h1>
        <div className={styles.loginSingup_fields}>
          <input type='text' placeholder='Nome completo' />
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Senha' />
          <input type='password' placeholder='Confirmar senha' />
        </div>
        <button>Proximo</button>
        <p className={styles.loginSingup_login}>Já possui uma conta? <span>Entre aqui!</span></p>
        <div className={styles.loginSingup_agree}>
            <input type="checkbox" name='' id=''/>
            <p>Ao continuar, eu concordo com os termos de uso & politica de privacidade </p>
          </div>
      </div>
    </div>
  )
}

export default LoginSingup