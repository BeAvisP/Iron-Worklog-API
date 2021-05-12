const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journeySchema = new Schema(
  {
    date: {type: Date, required: true},
    startHour: { type: Date, required: true },
    endHour: { type: Date },
    startBreak: { type: Date },
    endBreak: { type: Date },
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
