import React from 'react'
import {Link} from 'react-router'

import TestButton from './test-button'

export default React.createClass({
    displayName: 'Home'
  , render: function () {
      return (
        <div>
          <div>Hello World</div>
          <TestButton />
          <br />
          <Link to="goodbye">Goodbye</Link>
        </div>
      )
    }
})
