import methodsCalculator from "./../../2.Service/busnessRoule/operations.js";

class calculator {
  constructor(result) {
    this.result = result;
  }
  get result() {
    return this.result;
  }

  set result(result) {
    if ((result != null) & (result != undefined)) {
      this.result = result;
      return this.result;
    } else {
      return false;
    }
  }

  adicao(numb1, numb2) {
    result(methodsCalculator.adicao);
  }

  adicao(numb1, numb2) {
    result(methodsCalculator.substracao);
  }

  adicao(numb1, numb2) {
    result(methodsCalculator.divisao);
  }
  adicao(numb1, numb2) {
    result(methodsCalculator.mutiplicacao);
  }
  adicao(numb1, numb2) {
    result(methodsCalculator.potencia);
  }
}
