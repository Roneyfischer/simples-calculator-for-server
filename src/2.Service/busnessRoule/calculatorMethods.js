function adicao(numb1, numb2) {
  console.log("ESTAMOS EM ADIÇÃO"); //for test
  var result = numb1 + numb2;
  return result;
}

function subtracao(numb1, numb2) {
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
  subtracao,
  mutiplicacao,
  divisao,
  potencia,
};
