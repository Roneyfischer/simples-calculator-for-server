function adicao(numb1, numb2) {
  var result = numb1 + numb2;
  return result;
}

function substracao(numb1, numb2) {
  var result = numb1 - numb2;
  return result;
}

function mutiplicacao(numb1, numb2) {
  var result = numb1 * numb2;
  return result;
}

function divisao(numb1, numb2) {
  var result = numb1 / numb2;
  return result;
}

function potencia(numb1, numb2) {
  var result = Math.pow(numb1, numb2);
  return result;
}

export default {
  adicao,
  substracao,
  mutiplicacao,
  divisao,
  potencia,
};
