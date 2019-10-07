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
    <div className="columns">
      <div className="column is-half">
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
        <input
          name="description"
          onChange={handleChange}
          value={values.description}
          placeholder="A description for your link"
          autoComplete="off"
          type="text"
          className="input"
          // className={errors.description && 'has-text-danger input'}
        />
      </div>
        </div>
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

        <div className="field">
          <div className="control">
            <div className="select">
              <select>
                <option>Category</option>
                <option>🥕 Groceries</option>
                <option>🥡 Eating Out</option>
                <option>🍻 Drinks</option>
                <option>🎸 Music</option>
                <option>🎮 Videogames</option>
                <option>⚕️ Medical</option>
                <option>🐈 Animals</option>


              </select>
            </div>
          </div>
        </div>

        <button className="button" type="submit">submit</button>
      </form>
    </div>
  </div>
  </div>
  )
}

export default CreateLink
