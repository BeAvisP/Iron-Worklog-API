const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offDaySchema = new Schema(
  {
    startDay: { type: Date, required: true },
    endDay: { type: Date, required: true },
    type: { type: String, required: true },
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

const OffDay = mongoose.model('OffDay', offDaySchema);
module.exports = OffDay;
