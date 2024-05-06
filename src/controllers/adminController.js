/**
 * Module for the adminController.
 *
 * @author Maddelen Hedenström
 * @version 1.0.0
 */

import { Admin } from '../models/admin.js'
import { Customer } from '../models/customer.js'
import { Event } from '../models/event.js'

/**
 * Encapsulates a controller.
 */
export class AdminController {
  /**
   * Render the login page.
   *
   * @param {object} reg - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middlewear function.
   */
  async index (reg, res, next) {
    res.render('login/login')
  }

  /**
   * Admin login.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async loginAdmin(req, res, next) {
    try {
      const { username, password } = req.body
  
      const admin = await Admin.findOne({ username, password }).exec()
      if (!admin) {
        req.session.flash = { type: 'danger', text: 'Invalid username or password' }
        return res.redirect('/login')
      }
  
      req.session.admin = admin
  
      // Save the session before redirecting
      req.session.save(err => {
        if (err) {
          // Handle error
          return next(err);
        }
        res.redirect('/admin')
      })
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message }
      res.redirect('/login')
    }
  }

  /**
   * Admin page.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async getCustomers(req, res, next) {
    try {
      const viewData = await Customer.find()
      res.render('admin/home/index', { viewData })
    } catch (error) {
      next(error)
    }
  }

// Get events
  /**
   * Admin page.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async getEvents(req, res, next) {
    try {
      const viewDataEvent = await Event.find()
      res.render('admin/game/index', { viewDataEvent })
    } catch (error) {
      next(error)
    }
  }

  async eventForm(req, res, next) {
    try {
      res.render('admin/game/addEvent')
    } catch (error) {
      next(error)
    }
  }

  // post event
  async addEvent(req, res, next) {
    try {
      const { name, date, time } = req.body

      const event = new Event({ name, date, time })
      await event.save()

      req.session.flash = { type: 'success', text: 'Event added successfully' }
      res.redirect('./')
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message }
      res.redirect('game/addEvent')
    }
  }

  // Delete event
  async deleteEvent (req, res) {
    try {
      await Event.findByIdAndDelete(req.params.id)

      req.session.flash = { type: 'success', text: 'The event was deleted successfully.' }
      res.redirect('/admin/game')
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message }
      res.redirect('./')
    }
  }

  async editEvent (req, res) {
    try {
      const event = await Event.findById(req.params.id)

      res.render('admin/game/editEvent', { viewData: event.toObject() })
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message }
      res.redirect('..')
    }
  }

  //Edit event
  async editEventData (req, res) {
    try {
      const event = await Event.findById(req.params.id)

      if (event) {
        event.name = req.body.name
        event.date = req.body.date
        event.time = req.body.time

        await event.save()

        req.session.flash = { type: 'success', text: 'The event was updated successfully.' }
      }
      res.redirect('/admin/game')
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message }
      res.redirect('./editEvent')
    }
  }

  async deleteAttendee (req, res) {
    try {
      await Customer.findByIdAndDelete(req.params.id)

      req.session.flash = { type: 'success', text: 'The attendee was deleted successfully.' }
      res.redirect('/admin')
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message }
      res.redirect('./')
    }
  }

  async editAttendee (req, res) {
    try {
      const customer = await Customer.findById(req.params.id)

      res.render('admin/home/editAttendee', { viewData: customer.toObject() })
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message }
      res.redirect('..')
    }
  }

  //Edit event
  async editAttendeeData (req, res) {
    try {
      const customer = await Customer.findById(req.params.id)

      if (customer) {
        customer.name = req.body.name
        customer.company = req.body.company
        customer.email = req.body.email
        customer.guests = req.body.guests
        customer.event = req.body.event
        
        await customer.save()

        req.session.flash = { type: 'success', text: 'The attendee was updated successfully.' }
      }
      res.redirect('/admin')
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message }
      res.redirect('./')
    }
  }

  /**
   * Admin logout.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   */
  async logout (req, res) {
    try {
      req.session.destroy()

      res.redirect('/login')
    } catch (error) {
      res.redirect('/login')
    }
  }
}
