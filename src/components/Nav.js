import React from 'react'
import { Link } from "react-router-dom"
import { FirebaseContext } from '../firebase'

function Nav() {
  const { user, firebase } = React.useContext(FirebaseContext)

  return (
    <div className="columns">
      <div className="column is-one-third logo">
        <div className="content">
          <Link to="/"><h3 className="has-text-grey">💵 cashflow.cool</h3></Link>
        </div>
      </div>
      {/* <div className="column">
        <div className="content">
          <Link to="/recipe-database/" className="nav-link"><h5 className="has-text-grey-dark">recipe db</h5></Link>
        </div>
      </div>
      <div className="column">
        <div className="content">
          <Link to="/my-recipes/" className="nav-link"><h5 className="has-text-grey-dark">my recipes</h5></Link>
        </div>
      </div>
      <div className="column">
        <div className="content">
          <Link to="/week-planner/" className="nav-link"><h5 className="has-text-grey-dark">my week</h5></Link>
        </div>
      </div>
      <div className="column">
        <div className="content">
          <Link to="/grocery-list/" className="nav-link"><h5 className="has-text-grey-dark">grocery list</h5></Link>
        </div>
      </div> */}
      <div className="column">
        <div className="content has-text-right">
          {user ? (
            <>
              <div>{user.displayName}</div>
              <div onClick={() => firebase.logout()}>
                <h5 className="has-text-success">logout</h5>
              </div>
            </>
          ) : <Link to="/login/" className="nav-link">
            <h5 className="has-text-success">login</h5>
          </Link>}
        </div>
      </div>
    </div>
  )
}

export default Nav
