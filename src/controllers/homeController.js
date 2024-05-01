/**
 * Home controller.
 *
 * @author Maddelen Hedenström
 * @version 1.0.0
 */

import { Customer } from '../models/customer.js'
import { Event } from '../models/event.js'

/**
 * Encapsulates a controller.
 */
export class HomeController {
  /**
   * Renders a view and sends the rendered HTML string as an HTTP response.
   * index GET.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async index (req, res, next) {
    try {
      const viewDataEvent = await Event.find()
      res.render('home/index', { viewDataEvent })
    } catch (error) {
      next(error)
    }
  }

  async formPost(req, res, next) {
    try {

      const customer = new Customer({
        name: req.body.name,
        company: req.body.company,
        email: req.body.email,
        guests: req.body.guests,
        event: req.body.event
      })
  
      await customer.save()
  
      req.session.flash = { type: 'success', text: 'Tack för din anmälan.' }
      res.redirect('/')
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message }
      res.redirect('/')
    }
  }
}
