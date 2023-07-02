const {JsonDatabase} = require("wio.db");

const db = new JsonDatabase({databasePath:"./databases/db.json"});

function set(a,b) {return db.set(a,b);}
function push(a,b) {return db.push(a,b);}
function fetch(a) {return db.fetch(a);}
function get(a) {return db.get(a);}
function has(a) {return db.has(a);}
function exist(a) {return db.exist(a);}
function all() {return db.all();}
function add(a,b) {return db.add(a,b);}
function substr(a,b) {return db.substr(a,b);}
function math(a,b,c) {return db.math(a,b,c);}
function type(a) {return db.type(a);}
function del(a) {return db.delete(a);}
  module.exports = { set, push, fetch, get, has, all, add, substr, math, type, exist, del};