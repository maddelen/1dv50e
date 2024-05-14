/**
 * Login Controller.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

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
    res.render('login/index')
  }
}