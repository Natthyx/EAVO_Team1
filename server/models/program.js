import mongoose from "mongoose";


const ProgramSchema = new mongoose.Schema({
    picture: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  });

const ProgramModel = mongoose.model('programs', ProgramSchema);

export {ProgramModel as Program}
