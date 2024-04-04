const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  schedule: {
    type: Date, 
    required: true
  },

    completed: {
       type: Boolean, default: false
       }
});



module.exports = mongoose.model('Todo', todoSchema);
