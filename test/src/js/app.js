const db = new PouchDB('my_database');
const remoteDb = 'http://localhost:5984/my_database';

db.allDocs({
  include_docs: true,
  attachments: true
}).then(function (result) {
  console.log('>>> all docs >>> ');
  console.dir(result);
}).catch(function (err) {
  console.log(err);
});

var changes = db.changes({
  since: 'now',
  live: true,
  include_docs: true
}).on('change', function(change) {
  console.log('>>> change >>> ');
  console.dir(change);
}).on('complete', function(info) {
  console.dir('>>> change complete >>> ' + info);
}).on('error', function (err) {
  console.log(err);
});

var rep = PouchDB.replicate(db, remoteDb, {
  live: true,
  retry: true
}).on('change', function (info) {
  console.log('>>> rep change >>> ');
  console.dir(info);
}).on('paused', function (err) {
  // replication paused (e.g. replication up to date, user went offline)
}).on('active', function () {
  // replicate resumed (e.g. new changes replicating, user went back online)
}).on('denied', function (err) {
  // a document failed to replicate (e.g. due to permissions)
}).on('complete', function (info) {
  // handle complete
}).on('error', function (err) {
  // handle error
});