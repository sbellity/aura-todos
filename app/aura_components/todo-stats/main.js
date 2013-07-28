define({
  templates: ['stats'],
  View: {
    events: {
      'click button': function() {
        this.sandbox.emit('tasks.clear');
      }
    }
  },
  initialize: function() {
    this.render();
    this.sandbox.on('tasks.stats', this.render, this);
  },
  render: function(stats) {
    stats = stats || { remaining: 0, completed: 0 };
    this.html(this.renderTemplate('stats', stats));
  }
});