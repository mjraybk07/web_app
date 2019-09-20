const app = require('./server/express');
const config = require('./config/config');


const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}`)
    })
  } catch (e) {
    console.error(e)
  }
}

start();