import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import datasource from './config/datasource'
import config from './config/config';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.use(bodyParser.json());
// app.use('/', routes);
app.set('port', 3000);

routes(app)

app.listen(app.get('port'), () => {
  console.log(`app runninag on ${app.get('port')}`);
});
