// js/app.js

var AppView = Backbone.View.extend({
  el: '#app',

  events: {
    'input input': 'handleTyping'
  },

  template: _.template(`
    <p>Hello! This is a paragraph on a Backbone.js page.</p>
    <input type="text" placeholder="Type something..." />
  `),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  handleTyping: function (e) {
    console.log("User typed:", e.target.value);
  }
});

new AppView();
