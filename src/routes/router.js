/**
 * This module defines the routes for the API version 1.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

import express from 'express'
import { router as adminRouter } from './adminRouter.js'
import { router as homeRouter } from './homeRouter.js'

export const router = express.Router()

// Add routes.

router.use('/', homeRouter)
router.use('/admin', adminRouter)

router.get('/', (req, res) => res.json({ message: 'Hooray! Welcome to version 1 of this very simple RESTful API!' }))

router.use('*', (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
