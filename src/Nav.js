import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <div class="columns">
        <div class="column is-half logo">
          <div className="content">
            <h3 class="has-text-grey">rcpclctv</h3>
          </div>
        </div>
        <div class="column">
          <div className="content">
            <h5 class="has-text-link">grocery list</h5>
          </div>
        </div>
        <div class="column">
          <div className="content">
            <h5 class="has-text-link">recipe db</h5>
          </div>
        </div>
        <div class="column">
          <div className="content">
            <h5 class="has-text-link">week planner</h5>
          </div>
        </div>
      </div>    
    )
  }
}

export default Nav
