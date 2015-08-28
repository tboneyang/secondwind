Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
Template.body.helpers({

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    //var now = new Date();
  });
}


//iron router code


Router.route('/', function () {
  this.render('');
});

Router._scrollToHash = function(hash) {
  var section = $(hash);
  if (section.length) {
    var sectionTop = section.offset().top;
    $("html, body").animate({
      scrollTop: sectionTop
    }, "slow");
  }
};
