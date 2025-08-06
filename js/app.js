// js/app.js

var AppView = Backbone.View.extend({
  el: '#app',

  events: {
    'input input': 'handleTyping'
  },

  template: _.template(`
    <p>Testing a basic paragraph on a Backbone.js page.</p>
    <input type="text" placeholder="Text the hell outta this!" />
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



//This block will get image from a model.___________________________________
//Use bgModel.set('image', 'file_path'); to update img.
var BackgroundModel = Backbone.Model.extend({
  defaults: {
    image: 'resources/img/drone.jpg',
    opacity: 0.5
  }
});

var BackgroundView = Backbone.View.extend({
  el: ".background-overlay",

  initialize: function () {
    this.listenTo(this.model, 'change:image', this.updateBackground);
    this.listenTo(this.model, 'change:opacity', this.updateOpacity);
    this.updateBackground(); // show default image
    this.updateOpacity();    // apply default opacity
  },

  updateBackground: function () {
    const image = this.model.get('image');
    this.$el.css({
      'background-image': `url('${image}')`
    });
  },

  updateOpacity: function () {
    const opacity = this.model.get('opacity');
    this.$el.css('opacity', opacity);
  }
});

var bgModel = new BackgroundModel();
new BackgroundView({ model: bgModel });

//____________________________________________________________________________________