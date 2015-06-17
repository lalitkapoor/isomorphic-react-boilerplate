import React from 'react'
import Router from 'react-router'

let RouteHandler = Router.RouteHandler

export default React.createClass({
    displayName: 'App'
  , render: function () {
      // http://stackoverflow.com/questions/1321878/how-to-prevent-favicon-ico-requests
      return (
        <html>
          <head>
            <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
          </head>
          <body>
            <div id="main">
              <RouteHandler />
            </div>
            <script type="text/javascript" src="/dist/app.js"></script>
          </body>
        </html>
      )
    }
})
