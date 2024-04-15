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
      const { username, password } = req.body; // Assuming you are using req.body to get form data

      // Example database check (replace with your actual database query logic)
      const admin = await Admin.findOne({ username, password }).exec();
      if (!admin) {
        // User not found in database or invalid credentials
        req.session.flash = { type: 'danger', text: 'Invalid username or password' };
        return res.redirect('/login');
      }

      // Set session data
      req.session.admin = admin; // Store user information in the session

      // Redirect to /admin or any other desired route for successful login
      res.redirect('/admin');
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message };
      res.redirect('/login');
    }
  }

  /**
   * Admin page.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   */
  async admin (req, res) {
    res.render('admin/admin')
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
