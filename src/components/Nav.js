import React from 'react'
import { Link } from "react-router-dom"

class Nav extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-one-third logo">
          <div className="content">
            <Link to="/"><h3 className="has-text-grey">rcpclctv</h3></Link>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <Link to="/recipe-database/" className="nav-link"><h5 class="has-text-grey-dark">recipe db</h5></Link>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <Link to="/my-recipes/" className="nav-link"><h5 class="has-text-grey-dark">my recipes</h5></Link>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <Link to="/week-planner/" className="nav-link"><h5 class="has-text-grey-dark">week planner</h5></Link>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <Link to="/grocery-list/" className="nav-link"><h5 class="has-text-grey-dark">grocery list</h5></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
