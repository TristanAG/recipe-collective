import React from 'react'
import useFormValidation from './useFormValidation'

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
}

function Login(props) {
  const { handleSubmit, handleChange, values } = useFormValidation(INITIAL_STATE)
  //login is the state variable, and setLogin is the setter
  //setLogin gets called when the button is clicked below
  //and it looks like when you call a state function, you have access to the previous state on that piece of state (login)
  const [login, setLogin] = React.useState(true)

  return (
    <section className="login">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="content">
              <h3 className="has-text-grey-light">{login ? "login" : "create account"}</h3>
              <div>
                <form onSubmit={handleSubmit}>
                  {!login &&
                    <div className="field">
                      <label className="label">Name</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="name"
                          autoComplete="off"
                          name="name"
                          value={values.name}
                          onChange={handleChange} />
                      </div>
                    </div>
                  }
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="email"
                        autoComplete="off"
                        name="email"
                        value={values.email}
                        onChange={handleChange} />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        className="input"
                        type="password"
                        placeholder="choose a password"
                        name="password"
                        value={values.password}
                        onChange={handleChange} />
                    </div>
                  </div>
                  <br />
                  <button className="button is-primary" type="submit" value="Submit" style={{marginRight: '18px'}}>submit</button>
                  <button className="button" type="button" onClick={() => setLogin(prevLogin => !prevLogin)}>
                    {login ? "need to create an account?" : "already have an account?"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
