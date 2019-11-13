import React from 'react'
import style from './CourseInfo.module.css'
const CourseInfo = () => (
  <div className={style.courseInfoDiv}>
    <h3 className={style.title}>São pequenos detalhes que separam os que alcançam dos que apenas sonham.</h3>
    <span className={style.separator}></span>
    <p className={style.text}>
      Durante anos de experiência treinando atletas, bodybuilders e pessoas normais como você, tive a oportunidade de aprender o que realmente faz a diferença para que uma pessoa chegue nos seus objetivos. São muitas vezes pequenos detalhes, mas que precisam ser seguidos pra sempre. Construir um shape insano é uma jornada, mas a diferença entre saber o caminho e não saber é insana!
    </p>
    <p className={style.text}>
      Você deve conhecer, ou talvez até se identifique com esse perfil: frequenta academia há anos, treina de 3 a 5 vezes por semana, sem errar na alimentação, mas sem conseguir gerar resultado nenhum. É duro! Ficar no mesmo lugar durante anos enquanto as pessoas ao seu redor chegam nos seus objetivos é extremamente frustrante não é mesmo?
    </p>
    <p className={style.text}>
       Vem na minha, que isso vai mudar!
    </p>
  </div>
)

export default CourseInfo
