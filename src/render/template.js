import { renderToString } from 'react-dom/server'

export default (el, state) => (
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/assets/bundle.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>Joe Smith - Web Developer</title>
  </head>
  <body>
    <div id="root">${renderToString(el)}</div>
    <script>
      window.INITIAL_STATE = ${JSON.stringify(state)};
    </script>
    <script src="/assets/bundle.js"></script>
  </body>
</html>`
);
