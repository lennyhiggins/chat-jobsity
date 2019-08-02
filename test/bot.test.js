// const proxyquire = require('proxyquire').noPreserveCache()
const sinon = require('sinon')
var should  = require('chai').should();
var expect  = require("chai").expect;

let bot = require('../src/utils/bot')

describe('comunicate', () => {
  it('should receive a success response from api stock with a number $value', (done)=>{
    const msg = '/stock=aapl.us'    // '/stock=aapl.us'
    bot.comunicate(msg, (response) => {
        var amount = response.slice(response.search(/is /i)).split('$')[1]
        amount = parseFloat(amount) 
        should.exist(response);
        response.should.be.an('string');
        amount.should.be.an('number'); //should be a number
      });
    done();
  })

  it('should receive response form api stock with quote $N/D', (done)=>{
    const msg = '/stock=xxxxx'    // '/stock=aapl.us'
    bot.comunicate(msg, (response) => {
        should.exist(response);
        response.should.be.an('string');
        response.should.equal('XXXXX quote is $N/D');
      });
    done();
  })

})