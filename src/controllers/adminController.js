/**
 * Module for the adminController.
 *
 * @author Maddelen Hedenström
 * @version 1.0.0
 */

import { Admin } from '../models/admin.js'

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
    res.render('admin/login')
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
      res.render('admin/adminAccount')
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
  async loginAdmin (req, res, next) {
    try {
      const admin = await Admin.authenticate(req.body.username, req.body.password)
      req.session.regenerate((error) => {
        if (error) {
          throw new Error('Faild to re-generate session')
        }
        req.session.username = admin.username
        res.redirect('./adminAccount')
      })
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message }
      res.redirect('./login')
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
      res.redirect('./login')
    } catch (error) {
      res.redirect('./login')
    }
  }

}
