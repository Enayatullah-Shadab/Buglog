import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const Note = new Schema(
  {
    body: { type: String, required: true },
    bug: { type: Schema.Types.ObjectId, ref: 'Bug', required: true },
    creatorId: { type: ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
Note.virtual('creator', {
  ref: 'Account',
  localField: 'creatorId',
  foreignField: 'id',
  justOne: true
})
Note.virtual('Bug', {
  ref: 'Bug',
  localField: 'bug',
  foreignField: 'id',
  justOne: true
})
