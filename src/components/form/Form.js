import React from 'react'
import style from './Form.module.css'

const Form = () => (
  <form className={style.form}>
    <p>Primeiro nome</p>
    <input/>

    <p>Email</p>
    <input/>

    <p>Whatsapp</p>
    <input/>

    <button>Quero assistir!</button>
  </form>
)

export default Form;
