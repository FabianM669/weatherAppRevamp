// CityView will render information about a city.
// You start by creating a new backbone view constructor, and assigning it to a variable
// this way, all new instances of this view ('CityView'), will inherit this
// views structure:
var CityView = Backbone.View.extend({
// The first thing you do, is give the view a DOM element reference,
// All Backbone views, must have a DOM el reference:
    className: 'City',
// I didn't get this before, but apparently you can just add a property
// on your Backbone view that already has the template the render function
// is going to render in the initialization;
    template: _.template('<%= name %>'),
// The initialize function on this constructor will execute every time a new
// instance of CityView is created:
    initialize: function () {
        // Re-render the view when the model changes:
        // Here, you're telling any new instance of CityView,
        // to listen for changes on the model, and then re-render
        // the view.
        this.listenTo(this.model, 'change', this.render);
    },

    // Generate the template and update the contents of this.$el.
    // here, the $el, is reffering to the element that this City
    // View references, even though it's not explicitly defined;
    //!!! Not sure i understand how, the template knows to look at
    // the name attribute on the model its passed.(this is actually explained
    // in the render function below)
    render: function () {
    // So below, you tell the render function in CityView to go to
    // the element that it references in the DOM, again, this elements
    // wasn't specifically created in the CityView constructor explicityly,
    // so remember, views will generate this element for you automatically
    // (default as a div) and change its
    // innner HTML to the match template, that's also found in the view.
    // You then pass the template, the model that the view is working with
    // (this next part is loosely quoting Eric). "It's kind of confusing how the 
    // template knows to look at the name attribute in the model that
    // it's passed, but it does, with magic, just take it.""
        this.$el.html(this.template(this.model.attributes));

    }
})