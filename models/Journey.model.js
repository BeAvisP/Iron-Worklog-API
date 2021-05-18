const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journeySchema = new Schema(
  {
    date: {type: Date},
    startHour: { type: String, required: true },
    endHour: { type: String },
    startBreak: { type: String },
    endBreak: { type: String },
    morningStandup: { type: String },
    eveningStandup: { type: String },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Journey = mongoose.model('Journey', journeySchema);
module.exports = Journey;
