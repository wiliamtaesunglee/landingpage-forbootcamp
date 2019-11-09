import React from 'react'
import style from './Calendar.module.css'
import Cards from '../cards/Cards'
const Calendar = () => (
  <section className={style.section}>
    <div className={style.div}>
    <h3 className={style.title}>Calendário das aulas ao vivo</h3>
    <span className={style.span}></span>
    <Cards
      number='1'
      date='01/01/01'
      title='title'
      text='text'
    />
    <Cards
      number='2'
      date='01/01/01'
      title='title'
      text='text'
    />

    </div>
  </section>
)

export default Calendar
