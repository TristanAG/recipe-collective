import React from 'react'

class RecipeDatabase extends React.Component {
  constructor() {
    super()
    this.state = {
      recipes: [
        {
          name: 'spaghetti'
        },
        {
          name: 'vegetable stir-fry'
        },
        {
          name: 'eggs + toast'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <section className="Home">
          <div className="container">
            <div className="content">
              <div className="page-title">
                <h3 class="has-text-grey-light">recipe database</h3>
              </div>
              <div className="page-content">
                {this.state.recipes.map((recipe) => (
                  <div class="recipe-link">
                    <p class="has-text-grey">{recipe.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default RecipeDatabase
