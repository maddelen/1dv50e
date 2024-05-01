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

router.post('/login', (req, res, next) => controller.loginAdmin(req, res, next))

router.get('/', (req, res, next) => controller.getCustomers(req, res, next))

router.get('/game', (req, res, next) => controller.getEvents(req, res, next))

router.get('/game/addEvent', (req, res, next) => controller.eventForm(req, res, next))

router.post('/game/addEvent', (req, res, next) => controller.addEvent(req, res, next))

router.post('/game/:id/delete', (req, res, next) => controller.deleteEvent(req, res, next))


router.get('/game/:id/editEvent', (req, res, next) => controller.editEvent(req, res, next))
router.post('/game/:id/editEvent', (req, res, next) => controller.editEventData(req, res, next))

router.get('/logout', (req, res, next) => controller.logout(req, res, next))
