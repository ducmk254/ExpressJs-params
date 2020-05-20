const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ dshv: [{id:'',fullname:''}] })
  .write();


module.exports = db;