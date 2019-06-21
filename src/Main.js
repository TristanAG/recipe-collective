import React from 'react'

import Nav from './Nav'
import GroceryList from './GroceryList'

import './App.css'

class Main extends React.Component {
  render() {
    return (
      <div>
        <section className="nav">
          <div className="container">
            <Nav />
          </div>
        </section>
        <section className="content-area">
          <div className="container">
            <GroceryList/>
          </div>
        </section>
      </div>
    )
  }
}

export default Main
