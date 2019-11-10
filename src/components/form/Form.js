import React, { useState } from 'react'
import style from './Form.module.css'
import UseFormValidation from '../useFormValidation/UseFormValidation'
import DataFormValidation from '../dataFormValidation/DataFormValidation'

const INITIAL_STATE = {
  email: '',
  phone: '',
  name: ''
}

const Form = () => {
  const { handleSubmit, handleChange, values } = UseFormValidation(INITIAL_STATE, DataFormValidation)

  return (
  <form className={style.form} onSubmit={handleSubmit}>
    <label className={style.name}>Primeiro nome
      <input
        className={style.nameInput}
        name="name"
        value={values.name}
        type="text"
        placeholder="Primeiro Nome"
        required
        onChange={handleChange}/>
    </label>
    <label className={style.email}>Email
      <input
        className={style.emailInput}
        name="email"
        value={values.email}
        type="text"
        placeholder="Email"
        required
        onChange={handleChange}/>
    </label>
    <label className={style.whatsapp}>Whatsapp
      <input
        className={style.whatsappInput}
        name="phone"
        value={values.phone}
        type="number"
        placeholder="Whatsapp"
        required
        onChange={handleChange}/>
    </label>
    <button className={style.formButton} type="submit" >Quero assistir!</button>
  </form>

)
}
export default Form;
