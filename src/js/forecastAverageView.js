// CityView will render the averages of a forecast collection.
// Making another view, 'wippin it, wippin it!'
var ForecastAverageView = Backbone.View.extend({
// assigning the element this view references in the DOM a class:
    className: 'ForecastAverage',
// specifying what kind of element you want this view to be 
// represented as:
    tagName: 'ul',
// giving it a template to use in the render function:
    template: _.template(
        '<li><%= hi %></li>' +
        '<li><%= lo %></li>'
    ),
// this views initialize function :
    initialize: function () {
        // Re-render the view when the collection changes.
        this.listenTo(this.collection, 'add', this.render);
    },

    // Generate the template and update the contents of this.$el.
    render: function () {
        // Use the prototype methods of ForecastCollection to grab the average
        // max/min temperatures. If `NaN` is returned, render 'No data'.
        var hi = this.collection.getAverageMaxTemp() || 'No data';
        var lo = this.collection.getAverageMinTemp() || 'No data';
        // Render the template with our data.
        this.$el.html(this.template({ hi: hi, lo: lo }));
    }

});