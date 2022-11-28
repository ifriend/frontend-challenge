// Lógica aplicada
// 1º Busca menor valor do array
// 2º Busca maior número do array
// 3º Monta um novo array com a sequência completa
// 4º Retorna um array filtrado após fazer uma verificação no array completo

function whatNumbersAreMissing(vetor) {
  var min = Math.min(...vetor);
  var max = Math.max(...vetor);
  var all = Array.from(Array(max - min + 1), (e, i) => i + min);
  return all.filter(e => !vetor.includes(e));
}

console.log(whatNumbersAreMissing([4, 7, 8, 9, 11, 14]));