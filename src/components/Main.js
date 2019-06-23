import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import '../css/App.css'

import Nav from './Nav'
import Home from './Home'
import GroceryList from './GroceryList'
import RecipeDatabase from './RecipeDatabase'
import WeekPlanner from './WeekPlanner'
import MyRecipes from './MyRecipes'



class Main extends React.Component {

  //the all start out as false, that is a given
  //but you need to determine if they should show as state 'saved' or state 'not saved'
  //but the key is that you are not messing with the actual recipe itself... because that will eventually be owned by someone else.
  //so the idea is that you are loading in the main core recipe, and then, you are seeing if it's already saved.
    //if so, then you can render your additions over the main state

    //even more so, all you have to do is checked if it's in the saved list... then you would get some var like recipeIsSaved
    //if recipeIsSaved, show button filled in; else, show button empty


    //so 1 => make sure that the savedRecipe list is an array of objects, that way can determine if recipeIsSaved
    //2 => render the button as filled if recipeIsSaved

  constructor() {
    super()
    this.saveRecipe = this.saveRecipe.bind(this)
    this.hideNotification = this.hideNotification.bind(this)
    this.state = {
      recipes: [
        {
          name: 'Spaghetti',
          ingredients: ['noodles','past sauce','parmesan cheese'],
          saved: false
        },
        {
          name: 'vegetable stir-fry',
          ingredients: ['broccoli','rice','soy sauce'],
          saved: false
        },
        {
          name: 'eggs + toast',
          ingredients: ['eggs','bread','butter'],
          saved: false
        },
        {
          name: 'bagel and cream cheese',
          ingredients: ['something...','bagel','cream cheese','smoked salmon yo...'],
          saved: false
        },
        {
          name: 'potatoe hash',
          ingredients: ['potatotes','red peppers','salt', 'pepper', 'olive oil'],
          saved: false
        }
      ],
      // savedRecipes: 'Spaghetti',
      savedRecipes: [
        {
          name: 'potatoe hash',
          ingredients: ['potatotes','red peppers','salt', 'pepper', 'olive oil'],
          saved: true
        }
      ],
      selectedRecipe: {
        name: 'potatoe hash',
        ingredients: ['potatotes','red peppers','salt', 'pepper', 'olive oil']
      },
      showFlash: false
    }
  }

  saveRecipe(recipe) {

    //need to make it like an array here.. so i can keep a tab of all selected recipes
    const savedRecipes = this.state.savedRecipes
    savedRecipes.push(recipe)

    // console.log(savedRecipesTemp)
    //something broken about saving this array into state, hmm......

    this.setState({
      // savedRecipes: recipe.name,
      savedRecipes,
      selectedRecipe: recipe,
      showFlash: true
    })
  }

  hideNotification() {
    //so this is a funny thing, when i hide the flash message it triggers a rerender of everything... i guess that's not the worst deal rn
    //it just seems unnecessary... i think i could put the flash message in its own component and localize the state a bit more
      //in this way, a prop is passed into the flash object, and when setState runs in saveRecipe above, it will trickle down into the local Flash object
    this.setState({
      showFlash: false
    })
  }

  render() {
    return (
      <div>
        <Router>
          <section className="nav">
            <div className="container">
              <section className="flash-area">
                {this.state.showFlash &&
                  <div className="notification is-success">
                    <button className="delete" onClick={this.hideNotification}></button>
                    <p>{this.state.savedRecipes[this.state.savedRecipes.length - 1].name} was saved</p>
                  </div>
                }
              </section>
              <Nav />
              {/* <ul>
              {this.state.savedRecipes.map((recipe) => (
                <li>{recipe.name}</li>
              ))}
              </ul> */}
            </div>
          </section>
          <section className="content-area">
            <div className="container">
              <Route path="/" exact component={Home} />
              <Route path="/grocery-list/" component={GroceryList} />
              <Route path="/recipe-database/" component={(props) =>
                <RecipeDatabase
                  recipes={this.state.recipes}
                  saveRecipe={this.saveRecipe}
                  selectedRecipe={this.state.selectedRecipe}
                />}
              />
              <Route path="/week-planner/" component={WeekPlanner} />
              <Route path="/my-recipes/" component={(props) => <MyRecipes savedRecipes={this.state.savedRecipes}/>}/>
            </div>
          </section>
        </Router>
      </div>
    )
  }
}

export default Main
