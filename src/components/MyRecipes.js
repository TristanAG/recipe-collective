import React from 'react'

class MyRecipes extends React.Component {
  //in here now im going to access the props that get passed in from the route to render the savedRecipes
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <section className="Home">
          <div className="container">
            <div className="content">
              <h3 className="has-text-grey-light">my recipes</h3>
              <h3 className="has-text-grey-light">{this.props.savedRecipes}</h3>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default MyRecipes
