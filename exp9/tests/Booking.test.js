import { calculateTotal, validatePhone } from '../src/Booking.js';

describe('booking helpers', () => {
  test('calculates ticket total from seat count and unit price', () => { expect(calculateTotal(['S1', 'S2', 'S3'], 150)).toBe(450); });
  test('returns zero when no seats are selected', () => { expect(calculateTotal([], 180)).toBe(0); });
  test('validates Indian mobile numbers', () => { expect(validatePhone('9876543210')).toBe(true); expect(validatePhone('12345')).toBe(false); });
});
