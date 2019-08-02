var io = require('socket.io-client');
var request = require('supertest');
var should = require('chai').should();
var app = require('../src/index'); 
var socketURL = 'http://0.0.0.0:3000';
var sinon = require('sinon');


var options = {
    transports: ['websocket'],
    'force new connection': true
  }

describe('Socket Server connection', function() {
    it('should connect', function(done){
        var socket = io.connect(socketURL, options)
        socket.on('connect', function(){
          done()
        })
        socket.on('disconnect', function() {
        });
      })  
      
      it('Should add a new nickusername', function(done){
        var socket = io.connect(socketURL, options)
        debugger
        socket.emit('new user', 'Lenny', data => {
            debugger
            console.log("La data ->",data)
            if(data) {
                done();
            }
          });
        debugger   
        socket.on('new user', function(data){
            debugger
            data.should.equal(true);
            done();
        });
        done();
      });

      it('Should send a message', function(done){
        var socket = io.connect(socketURL, options)
        debugger
        socket.emit('send message', 'Saludo cordial', data => {
            data.should.equal('Saludo Cordial');
        });
        done();
      });
});

// socket.emit('new user', $nickname.val()