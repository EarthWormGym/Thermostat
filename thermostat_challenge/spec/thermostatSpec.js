'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases in temperature with tempUp()', function() {
    thermostat.tempUp();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases in temperature with tempDown()', function() {
    thermostat.tempDown();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

});
