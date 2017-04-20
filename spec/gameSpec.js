describe('Game', function() {

  beforeEach(function() {
    game = new Game();
  });

  it('exists', function() {
      expect(Game).toBeDefined();
  });

  it('has an empty array of arrays at start which simulate the board', function() {
    expect(game.board).toEqual([['','',''],['','',''],['','','']]);
  });

});
