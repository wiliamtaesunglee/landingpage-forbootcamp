import React from 'react'
import style from './Header.module.css'
const Header = () => (
  <div className={style.header}>
    <img src="http://static.photongroup.com/protocolmass/bootcamp/bootcamp-logo.png"/>
    <h3 className={style.data}>de 18 a 24 de novembro</h3>
    <h2 className={style.objective}>Em uma maratona de 7 lives, vou te ensinar a construir músculos muito mais rápido!</h2>

  </div>
)

export default Header
