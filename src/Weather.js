/**
 * Renders the weather status for a city.
 */
(function ($) {


  /**
   * Process the form on page load.
   */
  $(document).ready(function() {
    $('#weather_city').val('Madrid'),
    $('#units_metric').attr('checked', 'checked');
    processForm();
  });

  /**
   * Callback to process the form.
   */
  function processForm() {
    // Fetch the data from the public API through JSONP.
    // See http://openweathermap.org/API#weather.
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      jsonp: 'callback',
      dataType: 'jsonp',
      cache: false,
      data: {
        q: $('#weather_city').val(),
        units: $('#weather_status_form input[name="units"]:checked').val()
      },
      // work with the response
      success: function (response) {
        $('#weather_description').text(response.weather[0].description);
        $('#weather_temp').text(response.main.temp);
        $('#weather_wind').text(response.wind.speed);
      },
    });
  }
})(jQuery);
