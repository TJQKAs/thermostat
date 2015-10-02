function Thermostat() {
  this.temperature = 20;
  this.colour = "yellow";
}

Thermostat.prototype.increase_temp = function(power) {
  this._max_temp_check(power);
  this.temperature++;
  this._change_display();
  return this.temperature;
};

Thermostat.prototype.decrease_temp = function() {
  if(this.temperature < 11) {
    throw "Minimum temperature is 10 degrees";
  }
  this.temperature--;
  this._change_display();
  return this.temperature;
};

Thermostat.prototype.reset_temp = function() {
  this.temperature = 20;
  return this.temperature;
};

Thermostat.prototype._change_display = function() {
  if(this.temperature >= 10 && this.temperature < 18) {
    this.colour = "green";
  } else if(this.temperature >= 18 && this.temperature < 25) {
    this.colour = "yellow";
  } else {
    this.colour = "red";
  };
};

Thermostat.prototype._max_temp_check = function(power) {
  if(this.temperature > 24 && power.mode) {
    throw "Maximum temperature is 25 degrees when power saving is switched on";
  } else if (this.temperature > 31 && !power.mode) {
    throw "Maximum temperature is 32 degrees when power saving is switched off";
  }
};
