import React from 'react';
import { match, RouterContext } from 'react-router';

import routes from './routes';
import template from './template';

export default (req, res) => {
  match({ routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.send(template(<RouterContext {...renderProps} />))
    } else {
      res.status(404).send('Not Found');
    }
  })
};
