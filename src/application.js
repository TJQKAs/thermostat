$( document ).ready(function(){
  thermostat = new Thermostat();
  power = new Power();

  $("#temp").text(thermostat.temperature);
  $("#display_colour").text(thermostat.colour);

  $("#up").click(function(){
    $("#temp").text(thermostat.increase_temp(power));
    thermostat._change_display();
    $("#display_colour").text(thermostat.colour);
  });

  $("#down").click(function(){
    $("#temp").text(thermostat.decrease_temp());
    thermostat._change_display();
    $("#display_colour").text(thermostat.colour);
  });

  $('#power_save').change(function() {
    power.switch_power()
    if(thermostat.temperature > 25) {
      thermostat.temperature = 25;
      $("#temp").text(thermostat.temperature);
    };
  });

  $("#reset").click(function(){
    $("#temp").text(thermostat.reset_temp());
  });
});




  //  if($('#power_save').is(':checked')) {
  //     power.switch_on();
  //   } else {
  //     power.switch_off();
  //   };
  //   });




//   $( document ).ready(function(){
//     $( "a" ).click(function( event ) {
//       alert( "Come back soon" );
//       event.preventDefault();
//       $( this ).hide( "slow" );
//     });
//   });

// document.getElementById("output").innerHTML=name;

// function somefunction(){
//   var somevalue = "Data to be inserted";
//   $("#SecondDiv").text(somevalue);
// }
