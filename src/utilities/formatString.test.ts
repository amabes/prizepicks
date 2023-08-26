
import formatString from './formatString';

test('should replace hyphens from string with spaces', () => {
  const result = formatString('solar-power');

  expect(result).toBe('solar power');
});
