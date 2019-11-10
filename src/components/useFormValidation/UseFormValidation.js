import React, { useState } from 'react'

const UseFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleBlur = () => {
    const validationErrors = validate(values)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    console.log('success', values)
  }

  return {handleSubmit ,handleChange, values }
}

export default UseFormValidation
