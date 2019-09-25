import React from 'react'

//custom hook

function useFormValidation(initialState, validate) {
  const [values, setValues] = React.useState(initialState)
  const [errors, setErrors] = React.useState({})
  const [isSubmitting, setSubmitting] = React.useState(false)

  //useEffect hook is there to check if state has changed!
  //so ok, the callback seems to only run by watching the errors state it looks like

  React.useEffect(() => {
    if(isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        console.log('authenticate', values)
        setSubmitting(false)
      } else {
        setSubmitting(false)
      }
    }
  }, [errors])

  function handleChange(event) {
    event.persist()
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value,

    }))
  }

  function handleBlur() {
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
    console.log({ values })
  }

  return { handleChange, handleBlur, handleSubmit, values, errors, isSubmitting }
}



export default useFormValidation
