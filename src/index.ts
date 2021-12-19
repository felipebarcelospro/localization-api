import 'dotenv'

import express from 'express'
import Youch from 'youch'
import cors from 'cors'

import { citiesRouter } from './routes/cities.routes';
import { statesRouter } from './routes/states.routes';
import { AppError } from './utils/error.util';

import 'express-async-errors'

const app = express()

/**
 * CORS MIDDLEWARE
 */
app.use(cors({
  origin: '*'
}))

/**
 * ROUTES
 */
app.use('/cities', citiesRouter);
app.use('/states', statesRouter);

/**
 * ERROR MIDDLEWARE
 */
 app.use(async (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json(err)
  }

  if (process.env.NODE_ENV === 'dev') {
    const errors = await new Youch(err, req).toJSON()

    return res.status(500).json({
      status: 'error',
      message: errors.error.message,
      stack: errors.error.frames
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

module.exports = app;