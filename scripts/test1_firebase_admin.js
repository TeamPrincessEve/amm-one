var assert = require('assert');
var admin = require("firebase-admin");

var serviceAccount = require("../firebase-admin/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cc-amp.firebaseio.com"
});

describe('Firebase-Database', function() {
  describe('Connection', function() {
    it('should be able to connect', function(done) {

      var db = admin.database();
      assert.ok(db, 'db can\'t be initialized');

      var ref = db.ref("restricted_access/secret_document");
      assert.ok(ref, 'ref can\'t be initialized');
      ref.once("value", function(snapshot) {
        console.log(snapshot.val());
      });
      done();
    });
  });




});

