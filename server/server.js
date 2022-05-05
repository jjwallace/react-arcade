import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`)
});

//Lets do some logs
app.use(logger('dev', {
   skip: () => app.get('env') === 'test',
 }));

// Routes
app.use('/', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Route Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, _req, res) => {
  res
    .status(err.status || 500)
    .render('error', {
      message: err.message,
    });
});

export default app;
