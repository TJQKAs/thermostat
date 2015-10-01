
  $(document).ready(function() {
    // $('#weather_city').val('London'),
    $('#units_metric').attr('checked', 'checked');
    processForm();
  });

  /**
   * Callback to process the form.
   */
  function processForm() {
    // Fetch the data from the public API through JSONP.
    // See http://openweathermap.org/API#weather.
    var pathArray = window.location.search;
   var urlCity = pathArray.replace('?city=', '').replace('&Submit=Submit', '');
   var weathertemp;
   var weathername;
   $.ajax('http://api.openweathermap.org/data/2.5/weather?q=' + urlCity, {
     success: function(data) {
       // console.log(data);
       weathertemp = data.main.temp;
       weathername = data.name;
       console.log(weathertemp);
       console.log(weathername);
       console.log(urlCity);
       console.log(pathArray);
       $('#weather').html(data.main.temp - 273.15 + data.name);
       $("#weather_name").text(weathername);
       $("#weather_temp").text(weathertemp);
      //  update();


     }
   });
 }
