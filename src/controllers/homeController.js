/**
 * Home controller.
 *
 * @author Maddelen Hedenström
 * @version 1.0.0
 */

import { Customer } from '../models/customer.js'

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
  index (req, res, next) {
    res.render('home/index')
  }

  // add a method that takes the input from the form and adds it to the database
  async formPost(req, res, next) {
    try {
      console.log(req.body); // Log the request body to check form data
  
      const customer = new Customer({
        name: req.body.name,
        company: req.body.company,
        email: req.body.email,
        guests: req.body.guests,
        event: req.body.event
      });
  
      await customer.save();
  
      req.session.flash = { type: 'success', text: 'The user was created successfully.' };
      res.redirect('/');
    } catch (error) {
      req.session.flash = { type: 'danger', text: error.message };
      res.redirect('/');
    }
  }
  
}
