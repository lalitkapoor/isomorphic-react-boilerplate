import express from 'express'
import serveStatic from 'serve-static'
import finalhandler from 'finalhandler'

import React from 'react/addons'
import Router from 'react-router'
import routes from './public/js/routes'

var app = express()

app.use('/js', serveStatic('public/js'))
app.use('/css', serveStatic('public/css'))
app.use('/dist', serveStatic('public/dist'))

app.get('*', function(req, res) {
  Router.run(routes, req.path, (Root) => {
    res.send(`
      <!Doctype HTML>
      ${React.renderToString(<Root />)}
    `)
  })

})

export default app
