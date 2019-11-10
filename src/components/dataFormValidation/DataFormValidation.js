const DataFormValidation = (values) => {
    let errors = {}
    //email
    if (!values.email) {
      errors.email = 'required'
    } else if (
      !/^[A-Z0-9._%+-] + @[A-Z0-9.-] + [A-Z] {2,}$/i.test
      (values.email)
     ){
      errors.email = 'Email Inválido'
    }
    //name
    if (!values.name) {
      errors.name = 'required'
    }
    //phone
    if (!values.phone.length !== 11) {
      errors.phone = 'required'
    } else if (
      !/\(\d{2,}\) \d{4,}\-\d{4}/g.test
      (values.email)
    ) {
      errors.email = 'Email Inválido'
    }

return errors
}

export default DataFormValidation
