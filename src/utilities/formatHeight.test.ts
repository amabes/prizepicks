import formatHeight from './formatHeight';

test('should format height with decimeters designation', () => {
  const height = 14
  const result = formatHeight(height);

  expect(result).toBe(`${height} dm`);
});
