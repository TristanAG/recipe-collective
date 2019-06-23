import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import '../css/App.css'

import Nav from './Nav'
import Home from './Home'
import GroceryList from './GroceryList'
import RecipeDatabase from './RecipeDatabase'
import WeekPlanner from './WeekPlanner'
import MyRecipes from './MyRecipes'



class Main extends React.Component {

  constructor() {
    super()
    this.saveRecipe = this.saveRecipe.bind(this)
    this.state = {
      recipes: [
        {
          name: 'Spaghetti',
          ingredients: ['noodles','past sauce','parmesan cheese']
        },
        {
          name: 'vegetable stir-fry',
          ingredients: ['broccoli','rice','soy sauce']
        },
        {
          name: 'eggs + toast',
          ingredients: ['eggs','bread','butter']
        },
        {
          name: 'bagel and cream cheese',
          ingredients: ['something...','bagel','cream cheese']
        }
      ],
      savedRecipes: 'Spaghetti',
      selectedRecipe: {
        name: 'peanut butter and jelly sandwhich',
        ingredients: ['peanut butter','jelly','bread']
      }
    }
  }

  saveRecipe(recipe) {

    //need to make it like an array here.. so i can keep a tab of all selected recipes

    this.setState({
      savedRecipes: recipe
    })
  }

  render() {
    return (
      <div>
        <Router>
          <section className="nav">
            <div className="container">
              {this.state.savedRecipes}
              <Nav />
            </div>
          </section>
          <section className="content-area">
            <div className="container">
              <Route path="/" exact component={Home} />
              <Route path="/grocery-list/" component={GroceryList} />
              <Route path="/recipe-database/" component={(props) => <RecipeDatabase recipes={this.state.recipes} saveRecipe={this.saveRecipe}/>} />
              {/* <Route path="/recipe-database/" render={(props) => <RecipeDatabase recipes={this.state.recipes} saveRecipe={this.saveRecipe}/>} /> */}
              <Route path="/week-planner/" component={WeekPlanner} />
            </div>
          </section>
        </Router>
      </div>
    )
  }
}

export default Main
