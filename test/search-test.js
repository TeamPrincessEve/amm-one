var sc = require('../server-const');
var request = require('request');
var should = require('chai').should();

describe('Search', function() {
  describe('one keyword', function() {
    it('should be sent with tg parameter', function(done) {
      request.post({ url:'https://dev.maximreview.party/s' }, (err, httpResponse, body) => {
        should.not.exist(err);
        should.exist(httpResponse);
        httpResponse.statusCode.should.equal(sc.codeError);
//console.log(httpResponse.toJSON());
        const b = JSON.parse(body);
        b.msg.should.equal(sc.msgError);
        done();
      });
    });
    
    it('should be able to search by one keyword', function(done) {
//request.post({ url:'http://port-8080.ubuntu14-04-princesseve.codeanyapp.com/s', form: {tg: 'ต่อเติม'} }, (err, httpResponse, body) => {
      request.post({ url:'https://dev.maximreview.party/s', form: {tg: 'ต่อเติม'} }, (err, httpResponse, body) => {
        should.not.exist(err);
        should.exist(httpResponse);
        httpResponse.statusCode.should.equal(sc.codeSuccess);
        const b = JSON.parse(body);
        b.msg.should.equal(sc.msgSuccess);
        should.exist(b.items);
        b.items.should.not.empty;
//console.log(b.items);
        done();
      });
    });
    
    it('should be parsed % sign from tg parameter', function(done) {
      request.post({ url:'https://dev.maximreview.party/s', form: {tg: '%'} }, (err, httpResponse, body) => {
        should.not.exist(err);
        should.exist(httpResponse);
        httpResponse.statusCode.should.equal(sc.codeError);
        const b = JSON.parse(body);
        b.msg.should.equal(sc.msgError);
        done();
      });
    });
    
//     it('should be parsed * sign from tg parameter', function(done) {
//       request.post({ url:'https://dev.maximreview.party/s', form: {tg: '*'} }, (err, httpResponse, body) => {
//         should.not.exist(err);
//         should.exist(httpResponse);
//         httpResponse.statusCode.should.equal(sc.codeError);
//         const b = JSON.parse(body);
//         b.msg.should.equal(sc.msgError);
//         done();
//       });
//     });
    
  });
  
  
});