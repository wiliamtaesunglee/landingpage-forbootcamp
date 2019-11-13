import React, { useState } from 'react'
import style from './ScrollButton.module.css'
import StateButtonValidation from '../scrollButtonToUp/ScrollButtonToUp'

const ScrollButton = () => {
  const {isClicked} = StateButtonValidation()

return (
<div className={style.div}>
  <button className={style.button} onClick={isClicked}>
    <p>Faça seu cadastro abaixo para receber a sequência de lives!</p>
  </button>
</div>
)
}

export default ScrollButton
