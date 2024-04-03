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

router.get('/login', (req, res, next) => controller.index(req, res, next))

router.get('/login', (req, res, next) => controller.login(req, res, next))
router.post('/login', (req, res, next) => controller.loginUser(req, res, next))

router.get('/adminAccount', (req, res, next) => controller.adminAccount(req, res, next))

router.get('/logout', (req, res, next) => controller.logout(req, res, next))
