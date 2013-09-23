Template.home.label = 'home';
Template.home.description = 'home';

// This important method hooks the template into the CMS
registry.pageTemplate({name: 'home', label: 'home'});

if (Meteor.isClient) {
  
  Meteor.subscribe("videos");
  Videos = new Meteor.Collection("videos");
  Template.home.vidlist = function () {
    return Videos.find({}, {sort: {vidpostedby: -1, vidtitle: 1}});
  };

}