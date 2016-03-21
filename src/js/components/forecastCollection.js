// ForecastCollection contains a list of models that represent weather
// information about a single day in a 7-day week.
// So we're building a Babckbone collection, that is going to
// hold 7 models, each model will represent the weather for a different day of the week:
// !!!NOTE: The collections is passed the 7 models it contains in the main.js document:

// var forecast = new ForecastCollection(); (this was declared at the top of main.js)

// // app.on('forecast', function (code) {
//     getWeatherForecast(code, function (data) {
//         forecast.reset();
//         forecast.add(data.list);
//         city.set('name', data.city.name);
//     });
// });

// [end of main.js stuff]

var ForecastCollection = Backbone.Collection.extend({
    // Specify the child model to use (default is Backbone.Model)
    model: ForecastDayModel,
    // Get the average maximum temperature.
    getAverageMaxTemp: function () {
        // Iterate over each model, summing its maximum temperature with the sum
        // of all previous maximum temperatures. Divide the result by the length
        // of the collection, yielding the average.
        return this.reduce(function (prev, model) {
            return model.get('temp').max + prev;
        }, 0) / this.length;
    },
    // Get the average minimum temperature.
    getAverageMinTemp: function () {
        return this.reduce(function (prev, model) {
            return model.get('temp').min + prev;
        }, 0) / this.length;
    }

});