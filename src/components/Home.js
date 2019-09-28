import React from 'react'
import LinkList from './LinkList'

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="Home">
          <div className="container">
            <div className="content">
              <h3 className="has-text-grey-light">welcome to recipe collective</h3>
              <LinkList />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
