const sc = require('../server-const');
const db = require('../db');
var expect = require('chai').expect;
var should = require('chai').should();

describe('Database', function() {
  describe('Connection', function() {
    const text = 'SELECT * FROM account';
    it('should be able to connect', function(done) {
      db.query(text, (err, ret) => {
        if (err) done(err);
        else done();
      });
    });
    
    it('should be able to reconnect again', function(done) {
      db.query(text, (err, ret) => {
        should.not.exist(err);
        done();
      });
    });
    
//     it('should be able to retrive data', function(done) {
//       db.query(text, (err, ret) => {
//         should.exist(ret);
//         done();
//       });
//     });
  });
  
  describe('Create, Read, Update and Delete data', function() {
    it('should create an account', function(done) {
      const text = 'INSERT INTO account(user_name,user_password,name,description,birth_date,address,contact_info,weblink,mobile_phone) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *';
      const values = ['', '', 'test10', 'test10desc', null, 'test10address', 'test10contact', 'test10weblink', ''];
      db.query(text, values, (err, ret) => {
        should.not.exist(err);
        should.exist(ret);
        //ret.rows[0]
        done();
      });
    });
    
    it('should found an account', function(done) {
      const text = 'SELECT * FROM account';
      db.query(text, (err, ret) => {
        should.not.exist(err);
        ret.rowCount.should.not.equal(0);
        done();
      });
    });
    
    it('should update account', function(done) {
      const text = "UPDATE account SET description = $1 WHERE name = 'test10' RETURNING *";
      const values = ['test10WasUpdated'];
      db.query(text, values, (err, ret) => {
        should.not.exist(err);
        should.exist(ret.rows[0].description);
        ret.rows[0].description.should.eql('test10WasUpdated');
        done();
      });
    });
    
    it('should found the updated account', function(done) {
      const text = "SELECT * FROM account WHERE name = 'test10'";
      db.query(text, (err, ret) => {
        should.not.exist(err);
        should.exist(ret.rows[0].description);
        ret.rows[0].description.should.eql('test10WasUpdated');
        done();
      });
    });
    
    it('should delete an account', function(done) {
      const text = "DELETE FROM account WHERE name = 'test10'";
      db.query(text, (err, ret) => {
        should.not.exist(err);
        should.exist(ret);
        //ret.rows[0]
        done();
      });
      
      
    });
    
    
  });
  
  
});