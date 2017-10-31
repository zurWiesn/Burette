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
      this.emit(':tell', 'Burette can give you information on your digital ocean droplets. tell burette status to recieve information');;
    },
    'AMAZON.CancelIntent': function () {
      this.emit(':tell', 'canceled');
    },
    'AMAZON.StopIntent': function () {
      this.emit(':tell', 'stopping');
    },
};
