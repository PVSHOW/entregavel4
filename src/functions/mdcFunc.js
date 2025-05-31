function mdcFunc(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return null;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

module.exports = mdcFunc;