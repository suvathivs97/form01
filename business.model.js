const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
 Name: {
    type: String
  },
  Age: {
    type: Number
  },
  Gender: {
    type: String
  },
  PhoneNumber: {
    type: Number
  },
  Address: {
    type: String
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);