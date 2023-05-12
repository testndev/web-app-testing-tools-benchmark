describe('Arithmetic operations [S_0]', function () {
  it('Simple addition [T_01]', function (nw) {
    nw.assert.equal(2 + 2, 4);
  });

  it('Simple multiplication [T_02]', function (nw) {
    nw.assert.equal(2 * 2, 4);
  });
});
