import app from './src/app';

app.listen(app.get('port'), () => {
  console.log(`app runninag on ${app.get('port')}`);
});
