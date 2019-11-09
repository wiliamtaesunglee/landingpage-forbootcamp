import React from 'react'
import style from './Form.module.css'

const Form = () => (

  <form className={style.form}>
    <p className={style.name}>Primeiro nome</p>
    <input className={style.nameInput}/>

    <p className={style.email}>Email</p>
    <input className={style.emailInput}/>

    <p className={style.whatsapp}>Whatsapp</p>
    <input className={style.whatsappInput}/>

    <button className={style.formButton}>Quero assistir!</button>
  </form>

)

export default Form;
