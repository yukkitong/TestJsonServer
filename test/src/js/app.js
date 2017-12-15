const db = new PouchDB('my_database');
const remoteDb = 'http://localhost:5984/my_database';
db.replicate.from(remoteDb);