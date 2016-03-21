// Create just one specific model that represents the current city:
var city = new CityModel();

// Create just one specific collection that contains the weather data:
var forecast = new ForecastCollection();

// Create a generic object that will coordinate events among different areas of our
// application:
var app = {
    el: $('#app')
};

// This extension to the app var that we created above,
// is what gives it all the properties of Events to use:
_.extend(app, Backbone.Events);

// This var is the api Key we'll use from OpenWeatherMap:
var apiKey = 'bc07ec53213aef6a9dbcc30e18857274';

// Now we'll perform an Ajax request to OpenWeatherMap to get a 7 day forecast at the
// specified city id:
function getWeatherForecast (cityId, cb) {

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/forecast/daily',
        data: {
            count: 7,
            id: cityId,
            appid: apiKey

        },
        method: 'GET',
        success: cb
    });
}

// We add an event listener to our app that listens for  the forecast
// event to be triggered on our app.  Since the var app
// encapsulates our entire app, and we extended it with Backbone.Events, it can listen for events
// such as 'forcast', to occur, once it does, the old data will be
// wiped out with reset, and than the  new data from getWeatherForecast
// is appended to 'forcast' (!NOTE: inside the function, forcast, is referencing
// the ForecastCollection, we created at the top.  The city model's name property
// is also set with the resulting data:
app.on('forecast', function (code) {
    getWeatherForecast(code, function (data) {
        forecast.reset();
        forecast.add(data.list);
        city.set('name', data.city.name);
    });
});

// Initial trigger of the 'forecast' method to get things rolling:
app.trigger('forecast', '4256038');
// ***!!!NOTE:(understand, forecast in the trigger'forecast' is not at all referencing
// the var forecast we creaded at the top.
// the event for app to listen for called 'forcast' (just so happens to have
// the same name as the var forecast, it is not referencing it though) has a callback function
// as its "reaction" to the event (aka forecast) happening, this callback, is what
// actually passes the city code to the getWeatherForcast function, which,
// in turn, exectues it's own callback function (which you supply), that
// tells it to take the data, that it got from executing the request to the server
// and update the info you want.

// Create a new AppView, which is the root view in our application.
var appView = new AppView({
    // Pass the one specific city model we created at the beggining
    // of this document.
    city: city,
    // Pass the one specific forecast collection we created
    // at the beginning of this document
    forecast: forecast
});

// Append the AppView's element to the DOM. Yes, that
// one app var you created at the beginning, with it's
// one element property thats' value was a jQuery selector
// for an element whose id was called '#app'.  You're now
// appneding the appView, to that element, becuz, remember
// it's what encapsulates your whole app:
$('#app').el.append(appView.$el);

// Render the contents of the AppView. Yes, you're now
// tell the app view, to magically render itself,
// making the City and the Forecast appear on the window...tah-dah.
appView.render();
