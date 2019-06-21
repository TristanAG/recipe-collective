import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import '../css/App.css'

import Nav from './Nav'
import Home from './Home'
import GroceryList from './GroceryList'
import RecipeDatabase from './RecipeDatabase'
import WeekPlanner from './WeekPlanner'



class Main extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <section className="nav">
            <div className="container">
              <Nav />
            </div>
          </section>
          <section className="content-area">
            <div className="container">
              <Route path="/" exact component={Home} />
              <Route path="/grocery-list/" component={GroceryList} />
              <Route path="/recipe-database/" component={RecipeDatabase} />
              <Route path="/week-planner/" component={WeekPlanner} />
            </div>
          </section>
        </Router>
      </div>
    )
  }
}

export default Main
