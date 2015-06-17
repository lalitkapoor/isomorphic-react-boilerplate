import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
    displayName: 'Test'
  , render: function () {
      return (
        <div>
          <div>Goodbye</div>
          <Link to="home">home</Link>
        </div>
      )
    }
})
