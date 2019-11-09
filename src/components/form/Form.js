import React from 'react'
import style from './Form.module.css'

const Form = () => (

  <form className={style.form}>
    <p className={style.name}>Primeiro nome</p>
    <input className={style.nameInput} type="text" placeholder="Primeiro Nome"/>

    <p className={style.email}>Email</p>
    <input className={style.emailInput} type="text" placeholder="Email"/>

    <p className={style.whatsapp}>Whatsapp</p>
    <input className={style.whatsappInput} type="number" placeholder="Whatsapp"/>

    <button className={style.formButton}>Quero assistir!</button>
  </form>

)

export default Form;
