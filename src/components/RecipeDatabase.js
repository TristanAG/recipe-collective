import React from 'react'

class RecipeDatabase extends React.Component {

  //can click into recipe.... how we gonna do that?
  //i want recipe to be clicked upon, and when you click it it will render into the main area... the recipe list can be on the sidebar
  //so it shall be two columns

  //now it needs to have a recipe component, but first it can just render the

  //all this needs to do is grab the reference of what is selected, and feed that into the activeRecipe or whatever
  //and depending on what's in the activeRecipe, that's the content that will load / render / be able to be worked on

  constructor() {
    super()
    this.handleSaveRecipe = this.handleSaveRecipe.bind(this)
    this.state = {
      selectedRecipe: {
        name: 'peanut butter and jelly sandwhich',
        ingredients: [
          'peanut butter',
          'jelly',
          'bread'
        ]
      }
    }
  }

  handleRecipeClick(e, recipe) {
    alert('in handle recipe click')
    for (var i = 0; i < this.props.recipes.length; i++) {
      if (this.props.recipes[i].name === recipe) {
        this.setState({ selectedRecipe: this.props.recipes[i]})
      }
    }
  }

  handleSaveRecipe() {
    alert('in handle save recipe')
    //send the recipe up to the databse.
    //ok... so that means it needs to be shot up to a higher level
    //that means the true state of the recipe will be passed down from the app component. in this way, you can have it globally accessible on all pages
    //ok so i got that set globally now
    // console.log(this.props)
    this.props.saveRecipe(this.state.selectedRecipe.name)
    //GOT IT!
  }

  render() {
    return (
      <div>
        <section className="Home">
          <div className="container">
            <div className="content">
              <div className="page-title">
                <h3 className="has-text-grey-light">recipe database</h3>
              </div>
            </div>
            <div className="container">
              <div className="columns">
                <div className="column is-one-third">
                  <div className="content">
                    <div className="page-content">
                      {this.props.recipes.map((recipe) => (
                        <div>
                          <div className="recipe-link">
                            <p className="has-text-grey" onClick={(e) => this.handleRecipeClick(e, recipe.name)}>{recipe.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="content">
                    <h3 className="has-text-primary">{this.state.selectedRecipe.name}</h3>
                    <ul>
                      <li>{this.state.selectedRecipe.ingredients[0]}</li>
                      <li>{this.state.selectedRecipe.ingredients[1]}</li>
                      <li>{this.state.selectedRecipe.ingredients[2]}</li>
                    </ul>
                    <a className="button is-primary" onClick={() => this.handleSaveRecipe(this.state.selectedRecipe.name)}>Save</a>
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
