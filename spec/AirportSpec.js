describe('Airport', () => {
  let airport;
  let plane;
  beforeEach(() => {
    airport = new Airport();
    plane = new Plane();
  });

  it('has no planes by default', () => {
    expect(airport.planes()).toEqual([]);
  });
});