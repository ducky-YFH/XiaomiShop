let express = require('express')
let indexRouter = require('./routes')
let app = express();

app.use('/api', indexRouter);

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port
  // eslint-disable-next-line no-console
  console.log('server listening at http://%s:%s', host, port)
})