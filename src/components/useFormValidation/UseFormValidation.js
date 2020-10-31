import { useState, useEffect } from 'react'

const UseFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmittin, setSubmitting] = useState(false)


useEffect(() => {
  if (isSubmittin) {
    const noErrors = Object.keys(errors).length === 0
    if(noErrors) {
      fetch('https://napi.photongroup.com/lead', {
          method: 'POST',
          body: `Name=${values.name}&Email=${values.email}&Phone=${values.phone}&MachineCode=337425&EmailSequenceCode=768282&SequenceLevelCode=1`,
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
          })
        })

      console.log('success, lead insertion')
    } else {
      setSubmitting(false)
    }
  }
  }, [errors, isSubmittin, values.email, values.name, values.phone])

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

  }

  return {handleSubmit ,handleChange, values, handleBlur, errors, isSubmittin }
}

export default UseFormValidation
