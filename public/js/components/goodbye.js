import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
    displayName: 'Goodbye'
  , render: function () {
      return (
        <div>
          <div>Goodbye</div>
          <Link to="home">home</Link>
        </div>
      )
    }
})
