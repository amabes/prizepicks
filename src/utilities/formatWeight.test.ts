
import formatWeight from './formatWeight';

test('should format weight with hectogram designation', () => {
  const weight = 14
  const result = formatWeight(weight);

  expect(result).toBe(`${weight} hg`);
});
