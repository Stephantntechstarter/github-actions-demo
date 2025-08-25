const { mwst, brutto } = require('./mehrwertsteuer');

test('7% von 100 = 7', () => {
  expect(mwst(100, 0.07)).toBe(7);
});

test('19% von 200 = 38', () => {
  expect(mwst(200, 0.19)).toBe(38);
});

test('0€ Betrag liefert 0€ Steuer', () => {
  expect(mwst(0, 0.19)).toBe(0);
});

test('100 netto + 19% = 119 brutto', () => {
  expect(brutto(100, 0.19)).toBe(119);
});

test('50 netto + 7% = 53.5 brutto', () => {
  expect(brutto(50, 0.07)).toBe(53.5);
});
