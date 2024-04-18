/**
 * Module for the adminController.
 *
 * @author Maddelen Hedenström
 * @version 1.0.0
 */

import { Admin } from '../models/admin.js'
import { Customer } from '../models/customer.js'

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
   * Displays a logged in page.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async login (req, res, next) {
    try {
      res.render('admin/admin')
    } catch (error) {
      next(error)
    }
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
      });
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message }
      res.redirect('/login')
    }
  }

  // /**
  //  * Render the admin page.
  //  *
  //  * @param {object} req - Express request object.
  //  * @param {object} res - Express response object.
  //  */
  // async admin (req, res) {
  //   res.render('admin/admin')
  // }

  async getCustomers(req, res, next) {
    try {
      const viewData = await Customer.find()
      console.log('KUNDER?', viewData)
      res.render('admin/home/index', { viewData })
    } catch (error) {
      next(error)
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
