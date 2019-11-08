import React from 'react'
import style from './Form.module.css'

const Form = () => (

  <form className={style.form}>
    <p className={style.name}>Primeiro nome</p>
    <input className={style.nameInput}/>

    <p>Email</p>
    <input/>

    <p>Whatsapp</p>
    <input/>

    <button>Quero assistir!</button>
  </form>

)

export default Form;
