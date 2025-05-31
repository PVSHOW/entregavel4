function fibonacciFunc(qtd) {
  if (typeof qtd !== 'number' || qtd < 0) return [];
  if (qtd === 0) return [];
  if (qtd === 1) return [0];
  const seq = [0, 1];
  for (let i = 2; i < qtd; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

module.exports = fibonacciFunc;