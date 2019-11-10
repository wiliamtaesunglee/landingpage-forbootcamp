import React, { useState, useEffect } from 'react'

const UseFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmittin, setSubmitting] = useState(false)

useEffect(() => {
  if (isSubmittin) {
    const noErrors = Object.keys(errors).length === 0
    if(noErrors) {
      console.log('success', values)
      setSubmitting(false)
    } else {
      setSubmitting(false)
    }
  }
  }, [errors])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleBlur = () => {
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
    //console.log('success', values)
  }

  return {handleSubmit ,handleChange, values, handleBlur, errors, isSubmittin }
}

export default UseFormValidation
