describe('Airport', function() {
  let airport;
  beforeEach(function() {
    airport = new Airport();
  });

  describe('instructs a plane', function() {
    it('to land', function() {
      expect(airport.land()).toBe(true);
    });

    it('to takeoff', function() {
      expect(airport.takeoff()).toBe(true);
    });
  });
})