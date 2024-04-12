/**
 * Home routes.
 *
 * @author Maddelen Hedenström
 * @version 1.0.0
 */

import express from 'express'
import { HomeController } from '../controllers/homeController.js'

export const router = express.Router()

const controller = new HomeController()

router.get('/', (req, res, next) => controller.index(req, res, next))
router.post('/', (req, res, next) => controller.formPost(req, res, next))
