import calculatorMethods from "../../2.Service/busnessRoule/calculatorMethods.js";

class Calculator {
  get result() {
    return this._result;
  }

  set result(result) {
    if ((result != null) & (result != undefined)) {
      return (this._result = result);
    } else {
      return false;
    }
  }

  adicao(numb1, numb2) {
    return calculatorMethods.adicao(numb1, numb2);
  }

  subtracao(numb1, numb2) {
    return calculatorMethods.subtracao(numb1, numb2);
  }

  divisao(numb1, numb2) {
    return calculatorMethods.divisao(numb1, numb2);
  }
  mutiplicacao(numb1, numb2) {
    return calculatorMethods.mutiplicacao(numb1, numb2);
  }
  potencia(numb1, numb2) {
    return calculatorMethods.potencia(numb1, numb2);
  }
  modulo(numb1, numb2) {
    return calculatorMethods.modulo(numb1, numb2);
  }
}

export default Calculator;
