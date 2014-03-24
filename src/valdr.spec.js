describe('valdr', function() {

  beforeEach(module('valdr'));

  it('should provide constant for validation events', inject(function (valdrEvents) {
    expect(valdrEvents).toBeDefined();
  }));

  it('should provide constant for constraintsChanged event', inject(function (valdrEvents) {
    expect(valdrEvents.constraintsChanged).toBe('valdr-constraints-changed');
  }));

});