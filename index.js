'use strict';

var digitalocean = require('digitalocean');
var Alexa = require('alexa-sdk');

// var client = digitalocean.client(this.event.session.user.accessToken);


exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'StatusIntent': function () {
      if (this.event.session.user.accessToken == undefined) {
          this.emit(':tellWithLinkAccountCard', 'Please link your digital ocean account on your alexa app');
      } else {
        var token = this.event.session.user.accessToken;
        this.emit(':tell', token);
      }
    },
    'AMAZON.HelpIntent': function () {
      this.emit(':tell', 'help');;
    },
    'AMAZON.CancelIntent': function () {
      this.emit(':tell', 'cancel');
    },
    'AMAZON.StopIntent': function () {
      this.emit(':tell', 'stop');
    },
};
