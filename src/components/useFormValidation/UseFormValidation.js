import React, { useState } from 'react'

const UseFormValidation = (initialState) => {
  const [values, setValues] = useState(initialState)

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }
  return { handleChange, values }
}

export default UseFormValidation
