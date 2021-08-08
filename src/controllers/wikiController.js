/* Implement authenticated routes to store, 
  * get (all and by id), and update, and delete 
  * wikipedia posts you will get calling wikipedia api 
  * */
import wikiRecordsModel from '../models/wikiRecords.js';

export default {

  async insertWikiRecord(obj){
    // Your logic here
    try {
    const wikiRecord = new wikiRecordsModel({ phrase: obj.query.normalized.from, details: JSON.stringify(obj.query.pages)});
    wikiRecord.save();
    return true;
    } catch(err) {
      console.log('err=', err);
      return false;
    }
  },

  async getAllWikiRecords(){
    // Your logic here

  },

  async getWikiRecordById(){
    // Your logic here

  },

  async updateWikiRecords(){
    // Your logic here

  },

  async deleteWikiRecord(){
      //your logic here
  }
}