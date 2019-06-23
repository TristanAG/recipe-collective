import React from 'react'

class RecipeDatabase extends React.Component {

  //so everytime you clikc save, once the data gets passed up, i think that it fully rerenders the component the the default state again.
  //this is an issue... i want you to be able to stay on the same recipe after you've saved.... how can i do this?
  //one idea is that i pass the selectedRecipe prop in... that seems weird though, because that shouldn't be an issue

  constructor() {
    super()
    this.handleSaveRecipe = this.handleSaveRecipe.bind(this)
    console.log('thwarpp')
    //ok, so this is the issue... i need to somehow pass in the selected data so it doesn't default... i can't really prevent a rerender here, so that is i guess
    //a bit of a flaw on how this is setup so far...
    //if you think about it, posting and stuff can be done from the actual component level, rather than the main level... this gives me a way of
    //keeping track of all state like a local database in react state... but you have to deal with the rerenders

    //that's ok though, i think.. because i can just handle this by passing a piece of data in handleSaveRecipe.
      //because it's going to rerender, i think i just need to store the selectedRecipe and pass it up, then when it comes down i render it as props!
      //because it's going to rerender, i think i just need to store the selectedRecipe and pass it up, then when it comes down i render it as props!
      //because it's going to rerender, i think i just need to store the selectedRecipe and pass it up, then when it comes down i render it as props!
      //because it's going to rerender, i think i just need to store the selectedRecipe and pass it up, then when it comes down i render it as props!

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

  handleSaveRecipe(e) {
    e.preventDefault()
    this.props.saveRecipe(this.state.selectedRecipe.name)
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
                    <div className="button is-primary" onClick={(e) => this.handleSaveRecipe(e, this.state.selectedRecipe.name)}>Save</div>
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
