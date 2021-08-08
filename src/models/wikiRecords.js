/*Define a wiki schema here*/
import mongoose from 'mongoose';

const WikiRecordsSchema = new mongoose.Schema(
  {
    phrase: { type: String },
    detail: { type: String }
  },
  { timestamps: true }
);

const wikiRecordsModel = mongoose.model('WikiRecords', WikiRecordsSchema);
export default wikiRecordsModel;
