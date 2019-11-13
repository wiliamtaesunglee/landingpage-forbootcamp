import React from 'react'
import style from './Form.module.css'
import UseFormValidation from '../useFormValidation/UseFormValidation'
import DataFormValidation from '../dataFormValidation/DataFormValidation'
import Alert from '../alert/Alert'

const INITIAL_STATE = {
  email: '',
  phone: '',
  name: ''
}

const Form = () => {
  const { handleSubmit, handleChange, values, isSubmittin, handleBlur, errors } = UseFormValidation(INITIAL_STATE, DataFormValidation)

  return (
   <div>
     {isSubmittin ? <Alert/> :
    <form className={style.form} onSubmit={handleSubmit}>

    <label className={style.name}>Primeiro nome
      <input
        className={style.nameInput}
        name="name"
        value={values.name}
        type="text"
        placeholder="Primeiro Nome"
        required
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.name && <p>campo nome não pode estar vazio</p>}
    </label>
    <label className={style.email}>Email
      <input
        className={style.emailInput}
        name="email"
        value={values.email}
        type="text"
        placeholder="Email"
        required
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && <p>Valor inválido, favor colocar o seu email</p>}
    </label>
    <label className={style.whatsapp}>Whatsapp
      <input
        className={style.whatsappInput}
        name="phone"
        value={values.phone}
        type="number"
        placeholder="Whatsapp"
        required
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.phone && <p>Favor colocar o DDD e seu número de celular</p>}
    </label>

    <button disabled={isSubmittin} className={style.formButton} type="submit" >Quero assistir!</button>
  </form>
  }
  </div>
    )
}


export default Form;
