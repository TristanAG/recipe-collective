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
              {/* <h3 className="has-text-grey-light">{this..savedRecipes}</h3> */}
              {/* {this.props.savedRecipes[0].name} */}

              {this.props.savedRecipes.map((recipe) => (
                <div>
                  <h4 className="has-text-grey">{recipe.name}</h4>
                  <ul>
                  {recipe.ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                  ))}
                  </ul>
                </div>
              ))

              }
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default MyRecipes
