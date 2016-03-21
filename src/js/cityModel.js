// CityModel represents the information about a city (lat, lon, name, country).
var CityModel = Backbone.Model.extend({
    // Add default properties to prevent bugs (like NaN).
    defaults: {
        lat: 0,
        lon: 0,
        name: '',
        country: ''
    }
});