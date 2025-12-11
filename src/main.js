import { Template } from 'meteor/templating';

/*
Important notes

1) this Meteor project includes 2 special packages
- insecure: allows the client to write data (meaning that you don't need Meteor methods to write data to the database)
- autopublish: allows the client to access all server data without need of a publication/subscription

2) you only need to look at main.js and main.html files to understand the code.
*/

if (Meteor.isClient) {

  Template.world.helpers({

  });

  Template.world.events({
    'mouseup #floor'(event) {
      console.log('mouseup on floor', event);
    }

  });

}

if (Meteor.isServer) {
  // Server code
}
