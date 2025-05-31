function contFunc(n) {
  if (typeof n !== 'number') return false;
  const digits = n.toString().split('');
  return digits.some(d => parseInt(d) % 2 === 0);
}

module.exports = contFunc;