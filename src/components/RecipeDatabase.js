import React from 'react'

class RecipeDatabase extends React.Component {

  //can click into recipe.... how we gonna do that?
  //i want recipe to be clicked upon, and when you click it it will render into the main area... the recipe list can be on the sidebar
  //so it shall be two columns

  //now it needs to have a recipe component, but first it can just render the

  constructor() {
    super()
    this.state = {
      recipes: [
        {
          name: 'spaghetti',
          ingredients: [
            'noodles',
            'past sauce',
            'parmesan cheese'
          ]
        },
        {
          name: 'vegetable stir-fry',
          ingredients: ['a','b','c']
        },
        {
          name: 'eggs + toast',
          ingredients: ['a','b','c']
        }
      ]
    }
  }

  handleRecipeClick(e) {
    console.log(e.target)
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
            </div>
            <div className="container">
              <div className="columns">
                <div className="column is-two-fifths">
                  <div className="content">
                    <div className="page-content">
                      {this.state.recipes.map((recipe) => (
                        <div>
                          <div class="recipe-link">
                            <p class="has-text-grey" onClick={this.handleRecipeClick} name="hambone">{recipe.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="content">
                    <i class="has-text-grey-light recipe-link">recipe content</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default RecipeDatabase
