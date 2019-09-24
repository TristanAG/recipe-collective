import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import '../css/App.css'

import Nav from './Nav'
import Home from './Home'
import GroceryList from './GroceryList'
import RecipeDatabase from './RecipeDatabase'
import WeekPlanner from './WeekPlanner'
import MyRecipes from './MyRecipes'

function Main() {
  return (
    <div>
      <Router>
        <section className="nav">
          <div className="container">
            <section className="flash-area">
              {/* {this.state.showFlash &&
                <div className="notification is-success">
                  <button className="delete" onClick={this.hideNotification}></button>
                  <p>{this.state.savedRecipes[this.state.savedRecipes.length - 1].name} was saved</p>
                </div>
              } */}
            </section>
            <Nav />
          </div>
        </section>
        <section className="content-area">
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/grocery-list/" component={GroceryList} />
            <Route path="/recipe-database/" component={RecipeDatabase}/>
            <Route path="/week-planner/" component={WeekPlanner} />
            <Route path="/my-recipes/" component={MyRecipes} />
          </div>
        </section>
      </Router>
    </div>
  )
}

export default Main
