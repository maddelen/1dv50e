/**
 * User routes.
 *
 * @author Maddelen Hedenström
 * @version 1.0.0
 */

import express from 'express'
import { AdminController } from '../controllers/adminController.js'

export const router = express.Router()

const controller = new AdminController()

// router.get('/', (req, res, next) => controller.index(req, res, next))

router.get('/login', (req, res, next) => controller.login(req, res, next))
router.post('/login', (req, res, next) => controller.loginAdmin(req, res, next))

router.get('/', (req, res, next) => controller.admin(req, res, next))

router.get('/logout', (req, res, next) => controller.logout(req, res, next))
