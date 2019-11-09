import React from 'react'

const Cards = ({number, date, title, text}) => (
  <div>
    <span>{number}</span>
    <h3>{title}</h3>
    <p>{date}</p>
    <p>{text}</p>
  </div>
)

export default Cards
