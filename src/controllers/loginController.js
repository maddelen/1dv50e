/**
 * Login Controller.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

// import { AdminModel } from '../models/adminModel.js'

/**
 * Encapsulates a controller.
 */
export class loginController {
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
  

  //   /**
  //  * Displays a logged in page.
  //  *
  //  * @param {object} req - Express request object.
  //  * @param {object} res - Express response object.
  //  * @param {Function} next - Express next middleware function.
  //  */
  //   async login (req, res, next) {
  //     try {
  //       res.render('/admin')
  //     } catch (error) {
  //       next(error)
  //     }
  //   }
}