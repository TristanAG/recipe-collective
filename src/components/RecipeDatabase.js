import React from 'react'

class RecipeDatabase extends React.Component {
  constructor() {
    super()
    this.handleSaveRecipe = this.handleSaveRecipe.bind(this)
    console.log('thwarpp')

    //ok but no it cannot be a prop in order perserve the integrity of the component... the prop will only set the state of this component
    //that way all behavior can remain... i think it may cause a rerender, but that is of no issue at this time...
    //ok i got that and there's no rerender issue... but i'm doing it with a default, now i need to make sure that im doing it with the actual object of the selected,
      //it means i gotta pass it up first when i handleSaveRecipe

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

  componentDidMount() {
    console.log(this.props.selectedRecipe)
    this.setState({
      selectedRecipe: this.props.selectedRecipe
    })
  }

  handleRecipeClick(e, recipe) {
    for (var i = 0; i < this.props.recipes.length; i++) {
      if (this.props.recipes[i].name === recipe) {
        this.setState({ selectedRecipe: this.props.recipes[i]})
      }
    }
  }

  handleSaveRecipe() {

    //in here, pass up a selectedRecipe object
    //in here, pass up a selectedRecipe object
    //in here, pass up a selectedRecipe object
    //in here, pass up a selectedRecipe object
      //perhaps you can bundle it in since you are only extracting the name...
        //how could this be dones

    // e.preventDefault()
    this.props.saveRecipe(this.state.selectedRecipe)
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
                        <div key={recipe.name}>
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
                      {this.state.selectedRecipe.ingredients.map((ingredient) => (
                          <li key={ingredient}>{ingredient}</li>
                      ))}
                      {/* <li>{this.state.selectedRecipe.ingredients[0]}</li>
                      <li>{this.state.selectedRecipe.ingredients[1]}</li>
                      <li>{this.state.selectedRecipe.ingredients[2]}</li> */}
                    </ul>
                    <div className="button is-empty" onClick={() => this.handleSaveRecipe(this.state.selectedRecipe.name)}>Save</div>
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
