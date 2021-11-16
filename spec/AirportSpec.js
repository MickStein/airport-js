describe('Airport', function() {
  let airport;
  beforeEach(function() {
    airport = new Airport();
  });

  describe('allows custom default', function() {
    it('of an airports maximum capacity', function() {
      expect(airport.maximumCapacity(100)).toEqual(100);
    });
  });

  describe('instructs a plane', function() {
    it('to land', function() {
      expect(airport.land()).toBe(true);
    });

    it('to takeoff', function() {
      expect(airport.takeoff()).toBe(true);
    });
  });

  describe('alerts traffic control', function() {
    it('if full', function() {
      expect(airport.isFull()).toEqual('Airport is full');
    });


  }); 
})