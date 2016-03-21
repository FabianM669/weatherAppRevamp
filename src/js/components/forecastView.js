// ForecastView will render a list of ForecastDayView instances by creating a
// single view for each item in the input ForecastCollection instance.

// Once again, start by creating a new view:
var ForecastView = Backbone.View.extend({
// Assigning the DOM element that this view will generate 
// (although not explicitly defined) a class
    className: 'Forecast',
// We create this views initialize function:
    initialize: function () {
        // Collection and Model properties will automatically be assigned
        // to an own property if passed into the constructor. See
        // https://github.com/jashkenas/backbone/blob/master/backbone.js#L1222
        //(this is how below, it references collection)
        //
        // Give the instance an array for managing child views. Not sure the point
        // of this yet, but pretty sure it has something to do with the fact that
        // this view will manage numerous sub views:
        this.childViews = [];
        // Re-render when the 'add' event is fired on the collection.
        this.listenTo(this.collection, 'add', this.render);
    },

    render: function () {
        // This, is this views render function, remember, you've got multiple sub views
        // because this view represents 7 days
        // Capture the value of `this` in a variable.
        var _this = this;

        // Remove any pre-existing contents of the element.
        this.$el.empty();

        // Remove any pre-existing views from the DOM and unbind any BB events.
        // Thanks Backbone.View.prototype.remove!!!
        // This is so you don't just keep on adding more elements, making a huge long
        // repetitive list each time its re-rendered
        this.childViews.forEach(function(view) {
            view.remove();
        });

        // Create a new collection of ForecastDayView instances by mapping over
        // the collection.
        this.childViews = this.collection.map(function (model) {
            // Create a new view with each model.
            return new ForecastDayView({ model: model });
        });

        // Render and append each child view.
        this.childViews.forEach(function (view) {
            view.render();
            // Note the use of _this. `this` is the global object within this
            // function!
            _this.$el.append(view.$el);
        });
    }

});
