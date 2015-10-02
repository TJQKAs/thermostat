function Power() {
  this.mode = true;
}

// Power.prototype.switch_off = function() {
//   this.mode = false;
// };

// Power.prototype.switch_on = function() {
//   this.mode = true;
// };
//
//
Power.prototype.switch_power = function() {
  this.mode = !this.mode;
};
