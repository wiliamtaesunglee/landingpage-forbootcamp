import React from 'react'
import style from './Professor.module.css'

const Professor = () => (
  <div className={style.container}>
    <div className={style.professorDiv}>
    <p className={style.title}>Quem é o professor?</p>
    <span className={style.span}></span>
    <img className={style.img} src='http://static.photongroup.com/protocolmass/bootcamp/professor-img.png'/>
    <div className={style.spanName}>
    <h3 className={style.name}>Laércio Refundini</h3>
  </div>
    <p className={style.text}>Podemos já vislumbrar o modo pelo qual o acompanhamento das preferências de consumo talvez venha a ressaltar a relatividade dos relacionamentos verticais entre as hierarquias.Podemos já vislumbrar o modo pelo qual o acompanhamento das preferências de consumo talvez venha a ressaltar a relatividade dos relacionamentos verticais entre as hierarquias.</p>

  </div>
  </div>
)

export default Professor

