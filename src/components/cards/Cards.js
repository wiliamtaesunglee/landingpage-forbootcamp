import React from 'react'
import style from './Cards.module.css'

const Cards = ({number, date, title, text}) => (
  <div className={Number(number) % 2 === 0 ? style.card : style.cardOdd}>
    <div className={style.main}>
      <span className={Number(number) % 2 === 0 ? style.span : style.spanOdd}>
       <p className={style.number}>{number}</p>
      </span>
      <div className={style.titleContainer}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.date}>{date}</p>
      </div>
    </div>
    <ul className={style.text}>
      {text.map(a => <li> - {a}</li>)}
    </ul>
  </div>
)

export default Cards
