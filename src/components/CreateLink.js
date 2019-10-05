import React from 'react'
import useFormValidation from './auth/useFormValidation'
import validateCreateLink from './auth/validateCreateLink'

const INITIAL_STATE = {
  description: "",
  url: ""
}

function CreateLink(props) {
  const { handleSubmit, handleChange, values, errors } = useFormValidation(INITIAL_STATE, validateCreateLink, handleCreateLink)

  function handleCreateLink() {
    console.log('link created!')
  }

  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
        <input
          name="description"
          onChange={handleChange}
          value={values.description}
          placeholder="A description for your link"
          autoComplete="off"
          type="text"
          className={errors.description && 'has-text-danger'}
        />
        {errors.description && <p className="has-text-danger">{errors.description}</p>}
        <input
          name="url"
          onChange={handleChange}
          value={values.url}
          placeholder="this is the url for the link"
          autoComplete="off"
          type="text"
          className={errors.url && 'has-text-danger'}
        />
        {errors.url && <p className="has-text-danger">{errors.url}</p>}
        <button className="button" type="submit">submit</button>
      </form>
    </div>
  )
}

export default CreateLink
