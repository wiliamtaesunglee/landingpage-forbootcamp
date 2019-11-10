import React from 'react'
import style from './Form.module.css'
import {useState} from 'react'


const Form = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('success', name, email, phone)
  }
  return (
  <form className={style.form} onSubmit={handleSubmit}>
    <label className={style.name}>Primeiro nome
      <input className={style.nameInput} type="text" placeholder="Primeiro Nome" required onChange={e => setName(e.target.value)}/>
    </label>
    <label className={style.email}>Email
      <input className={style.emailInput} type="text" placeholder="Email" required onChange={e => setEmail(e.target.value)}/>
    </label>
    <label className={style.whatsapp}>Whatsapp
      <input className={style.whatsappInput} type="number" placeholder="Whatsapp" required onChange={e => setPhone(e.target.value)}/>
    </label>
    <button className={style.formButton} type="submit" >Quero assistir!</button>
  </form>

)
}
export default Form;
