/**
 * Mongoose model Admin.
 *
 * @author Maddelen Hedenström
 * @version 1.0.0
 */

import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

// Create a schema.
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    minlength: [10, 'The password must be of minimum length 10 characters.'],
    maxlength: 1000,
    required: true
  }
}, {
  timestamps: true
})

adminSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10)
})

/**
 * Authenticate a user by checking their username and password.
 *
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {object} user - The authenticated user.
 */
adminSchema.statics.authenticate = async function (username, password) {
  const admin = await this.findOne({ username })

  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    throw new Error('Invalid username or password!')
  }
  return admin
}

// Create a model using the schema.
export const Admin = mongoose.model('Admin', adminSchema)
