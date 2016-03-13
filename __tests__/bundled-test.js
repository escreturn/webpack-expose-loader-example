fs = require('fs');
eval(fs.readFileSync('dist/main.bundle.js', 'utf-8'));

describe('utility', () => {
  it('can identify a numeric value', () => {
    expect(isItNumeric('10')).toBe(true);
  });
});

describe('utility', () => {
  it('can identify a non-numeric value', () => {
    expect(isItNumeric('foo')).toBe(false);
  });
});

describe('jquery', () => {
  it('exposes $', () => {
    expect($).toBeDefined();
  });

  it('exposes jQuery', () => {
    expect(jQuery).toBeDefined();
  });
});
