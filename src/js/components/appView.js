// AppView is the root view of our application and 
// manages a variety of child views;
// !!We built a new instance of this AppView in our main.js
// and named it appView, we then appendid that appView in our main.js
// to our DOM container element "$el":

var AppView = Backbone.View.extend {

    className: 'WeatherApp',

    initialize: function (options) {
        // Go ahead and create instances of the child views before the AppView
        // has rendered.
        this.inputView = new InputView();
        this.cityView = new CityView({
            // Pass the city model to our CityView instance.
            model: options.city
        });
        this.forecastView = new ForecastView({
            // Pass the forecast collection to our ForecastView instance.
            collection: options.forecast
        });
        this.averageView = new ForecastAverageView({
            // Pass the forecast collection to our ForecastAverageView instance.
            collection: options.forecast
        });
    },

}