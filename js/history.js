var HistoryView = Backbone.View.extend({
  el: '#history',

  template: _.template(`
    <section id="history">
      <h2>History</h2>
      <ul>
        <li>Founded in 2015 as a drone startup.</li>
        <li>Launched first commercial model in 2017.</li>
        <li>Expanded globally in 2019.</li>
        <li>Introduced AI-powered drones in 2022.</li>
      </ul>
    </section>
  `),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template());
  }
});

new HistoryView();
