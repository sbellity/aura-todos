define({
  templates: ['form'],
  View: {
    events: {
      'keyup input': function(e) {
        var input = $(e.currentTarget);
        if (e.which === 13) {
          var val = input.val();
          if (val) {
            var date = new Date();
            var taskId = ['todo', date.getTime(), date.getMilliseconds()].join('-');
            var task = { id: taskId, description: val,  done: false };
            this.sandbox.emit('tasks.add', task, 'add');
            input.val('');
          }
        }
      }
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.html(this.renderTemplate('form'));
    this.$input = this.$el.find('input');
    return this;
  }
});