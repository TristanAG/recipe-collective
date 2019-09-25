import React from 'react'
import { Link } from "react-router-dom"

class Nav extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-one-third logo">
          <div className="content">
            <Link to="/"><h3 className="has-text-grey">🌱&nbsp; r e c i p e &nbsp; c o l l e c t i v e </h3></Link>
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
            <Link to="/login/" className="nav-link"><h5 className="has-text-success">login</h5></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
