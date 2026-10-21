export function validatePhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

export function createBookingId() {
  return `CB${Date.now()}`;
}

export function calculateTotal(seats, price) {
  return seats.length * price;
}