import React from 'react'
import LinkList from './LinkList'
import CreateLink from './CreateLink'

class Home extends React.Component {
  render() {
    return (
      <div className="Home section">
        <div className="container">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <h3 className="has-text-grey-light">welcome to cashflow.cool</h3>
                  {/* <LinkList /> */}
                  <CreateLink />
                </div>
              </div>
            </div>
          </div>
      </div>

    )
  }
}

export default Home
