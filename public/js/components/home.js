import React from 'react'
import {Link} from 'react-router'

import TestButton from './test-button'

export default React.createClass({
    displayName: 'Test'
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
