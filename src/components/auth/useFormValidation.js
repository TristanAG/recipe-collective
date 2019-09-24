import React from 'react'

//custom hook

function useFormValidation(initialState) {
  const [values, setValues] = React.useState(initialState)

  function handleChange(event) {
    event.persist()
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value,

    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert('w00p')
    console.log({ values })
  }

  return { handleChange, handleSubmit, values }
}



export default useFormValidation
