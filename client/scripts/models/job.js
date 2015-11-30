// Job Model
Lancealot.Job = Backbone.Model.extend({
  urlRoot: '/api/jobs',

  id: null,

  navigateToView: function() {
    Backbone.history.navigate('/job?id=' + this.get('id'), true);
  },

  initialize: function() {
    this.set('dueDate', new Date(this.get('dueDate')).toDateString());
  }

});
