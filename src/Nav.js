import React from 'react'
import { Link } from "react-router-dom"

class Nav extends React.Component {
  render() {
    return (
      <div class="columns">
        <div class="column is-half logo">
          <div className="content">
            <Link to="/"><h3 class="has-text-grey">rcpclctv</h3></Link>
          </div>
        </div>
        <div class="column">
          <div className="content">
            <Link to="/grocery-list/"><h5 class="has-text-link">grocery list</h5></Link>
          </div>
        </div>
        <div class="column">
          <div className="content">
            <Link to="/recipe-database/"><h5 class="has-text-link">recipe database</h5></Link>
          </div>
        </div>
        <div class="column">
          <div className="content">
            <Link to="/week-planner/"><h5 class="has-text-link">week planner</h5></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
