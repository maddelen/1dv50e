/**
 * Mongoose model Event.
 *
 * @author Maddelen Hedenström
 * @version 1.0.0
 */

import mongoose from 'mongoose'

// Create a schema for the customer.
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true,
    trim: true
  },
  time: {
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

eventSchema.virtual('id').get(function () {
  return this._id.toHexString()
})

// Create a model using the schema.
export const Event = mongoose.model('event', eventSchema)