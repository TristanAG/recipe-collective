import React from 'react'

//i don't get why what im trying to do right now is confusing.
//when you click the recipe, the template logic will render the button as clear or filled
//that's it... this is binary... this shouldn't be hard. what am i having a hard time with?
//there's got to be something...

class RecipeDatabase extends React.Component {
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
      },
      isSaved: false
    }
  }

  componentDidMount() {
    //so when component first mounts, it's going to load in the selectedRecipe
    //it's going to fire the checkIfSaved method first, which should return true or false
    const isSaved = this.checkIfSaved(this.props.selectedRecipe.name)
    console.log(isSaved)

    if(isSaved) {
      this.setState({
        selectedRecipe: this.props.selectedRecipe,
        isSaved: true
      })
    } else {
      this.setState({
        selectedRecipe: this.props.selectedRecipe,
        isSaved: false
      })
    }
  }

  checkIfSaved(selectedRecipe) {
    //the purpose of this function is to decide how to render the template.. in reg status or saved status
    for(var i = 0; i < this.props.savedRecipes.length; i++){
      console.log(this.props.savedRecipes[i].name)
      console.log(this.props.selectedRecipe.name)
      if(this.props.savedRecipes[i].name === this.props.selectedRecipe.name) {
        return true
      } else {
        return false
      }
    }
  }

  handleRecipeClick(recipe) {

    //not quite working!!! why is this so complicated? I need to think more about this... more about the selectedRecipe, and the flow.
    //keep going!!!

    const isSaved = this.checkIfSaved(recipe)

    // this.setState({ selectedRecipe: recipe})

    for (var i = 0; i < this.props.recipes.length; i++) {
      if (this.props.recipes[i].name === recipe) {
        if(isSaved) {
          this.setState({
            selectedRecipe: this.props.recipes[i],
            isSaved: true
          })
        } else {
          this.setState({
            selectedRecipe: this.props.recipes[i],
            isSaved: false
          })
        }
      }
    }
  }





  handleSaveRecipe() {
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
                            <p className="has-text-grey" onClick={() => this.handleRecipeClick(recipe.name)}>{recipe.name}</p>
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
                    </ul>

                    {this.state.isSaved &&
                      <p><b>im saved now</b></p>
                    }


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
