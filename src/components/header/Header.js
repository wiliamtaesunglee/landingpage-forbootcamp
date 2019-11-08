import React from 'react'
import style from './Header.module.css'
const Header = () => (
  <div className={style.header}>
    <h3 className={style.data}>de 18 a 25 de novembro</h3>
    <h2 className={style.objective}>Como potencializar o ganho de massa</h2>
    <h1 className={style.objectiveTime}>Em apenas 8 dias!</h1>
  </div>
)

export default Header
