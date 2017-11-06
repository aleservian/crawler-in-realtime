import express from 'express';
const router = express.Router()
const app = express();

const configureExpress = (dirname) => {
  console.log(__dirname)
  app.use(express.static(`${dirname}/public`));
  app.set('views', `${dirname}/views`);
  app.set('view engine', 'pug');
  app.get('/', (req, res) => {
    res.render('index');
  })
  return app;
};

export default configureExpress;