// InputView is simply a text input that will trigger the 'forecast' event on
// the `app` object when the enter key is pressed. The event will be triggered
// with the current value of the input.
var InputView = Backbone.View.extend({

    className: 'CityInput',

    tagName: 'input',

    events: {
        // Trigger the `onKeyDown` function when the 'keydown' event occurs
        // within the element.
        'keydown': 'onKeydown'
    },

    onKeydown: function (e) {
        // If the key pressed is the enter key,
        if (e.keyCode === 13) {
            // Trigger the 'forecast' event on the `app` object. See line
            // 36 of main.js
            app.trigger('forecast', this.$el.val());
        }
    }

});