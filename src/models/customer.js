/**
 * Mongoose model Admin.
 *
 * @author Maddelen Hedenström
 * @version 1.0.0
 */

import mongoose from 'mongoose'

// Create a schema for the customer.
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  guests: {
    type: Number,
    required: true,
    trim: true
  },
  event: {
    type: String,
    required: true,
    trim: true
  },
}, {
  timestamps: true,
  toJSON: {
    /**
     * Transforms the object returned when serializing a document.
     *
     * @param doc - The document which is being converted.
     * @param ret - The plain object representation which has been converted.
     */
    transform: function (doc, ret) {
      delete ret._id
      delete ret.__v
    },
    virtuals: true // Ensure virtual fields are serialized.
  }
})

customerSchema.virtual('id').get(function () {
  return this._id.toHexString()
})

// Create a model using the schema.
export const Customer = mongoose.model('customer', customerSchema)
