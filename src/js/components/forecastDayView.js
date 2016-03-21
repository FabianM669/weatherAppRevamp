// This is just a toFahrenheit conversion function:

function toFahrenheit (temp) {
    return Math.floor((temp - 273.15) * 1.8000 + 32.00);
}

// ForecastDayView renders information about a single day in a 7-day forecast.
// This is just another view we are creating, to later append to the 
// $el in the overall app container object we created back in main.js
var ForecastDayView = Backbone.View.extend({
// Here, you're specifiying that you want the view to generate as
// as ul list 
    tagName: 'ul',
// Just giving the ul a class:
    className: 'ForecastDay',
// This is the template the view will render:
    template: _.template(`
        <li><%= hi %></li>
        <li><%= lo %></li>
    `),
// Now you give it a render function
    render: function () {
        // Here, you're making a variable called attributes,
        // grabbing the attributes in the model you passed this backbone view(the calling object),
        // and assiging those attributes on the model to the new var attributes
        var attributes = this.model.attributes;
        // Create a new object that contains each of the attributes from the
        // model with additional properties in fahrenheit.
        // The Object.assign() method is used to copy the values of all own properties
        // from one or more source objects to a target object. 
        // It will return the target object.
        // the first param to Object.assign  is the target object, the second param,
        // is the source object it will copy. Here, you also went ahead and assigned the
        // returned object two new properties, hi & lo , that convert the temp for you
        // NOTE! Careful, cuz if the object you copy into your returned object, already has properties
        // with the same name, it will overwrite those properties)
        var data = Object.assign({
            hi: toFahrenheit(attributes.temp.max),
            lo: toFahrenheit(attributes.temp.max)
        }, attributes);
        // Update the contents of this.$el with the compiled template.
        this.$el.html(this.template(data));
    }

});