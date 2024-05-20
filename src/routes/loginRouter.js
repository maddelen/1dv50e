/**
 * User routes.
 *
 * @author Maddelen Hedenström
 * @version 1.0.0
 */

import express from 'express'
import { loginController } from '../controllers/loginController.js'

export const router = express.Router()

const controller = new loginController()

router.get('/', (req, res, next) => controller.index(req, res, next))

router.post('/login', (req, res, next) => controller.login(req, res, next))