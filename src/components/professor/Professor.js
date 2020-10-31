import React from 'react'
import style from './Professor.module.css'

const Professor = () => (
  <section className={style.container}>
    <div className={style.professorDiv}>
    <p className={style.title}>Quem é o professor?</p>
    <span className={style.span}></span>
    <img className={style.img} src='http://static.photongroup.com/protocolmass/bootcamp/professor-img.png' alt='professor'/>
    <div className={style.spanName}>
    <h3 className={style.name}>Laércio Refundini</h3>
  </div>
  <p className={style.text}>
   Laercio Refundini tem mais de 10 anos de experiência como personal trainer e se especializou em protocolos de hipertrofia muscular acelerada.
  </p>
  <p className={style.text}>
    Criador do Programa de Hipertrofia Protocol Mass e do Programa de Youtube Dicas do Laercio, tem mais de 20 milhões de views no Youtube com 99.3% de aprovação e centenas de clientes que reportaram ganhos de até 4kg de massa muscular sem precisar de recursos ergogênicos.
  </p>
  <p className={style.text}>
     Laercio também é palestrante na Fitness Brasil, uma das maiores feiras de esporte e wellness do país.
  </p>
  </div>
  </section>
)

export default Professor

