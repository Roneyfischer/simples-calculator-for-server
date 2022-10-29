import Calculator from "../Class/Calculator.js";

function operatorsFilter(reqBody) {
  const calculator = new Calculator();
  const { numb1, numb2 } = reqBody;
  parseFloat(numb1, numb2);

  if (reqBody.type == "+") {
    return (calculator.result = calculator.adicao(numb1, numb2));
  }
  if (reqBody.type == "-") {
    return (calculator.result = calculator.subtracao(numb1, numb2));
  }
  if (reqBody.type == "/") {
    return (calculator.result = calculator.divisao(numb1, numb2));
  }
  if (reqBody.type == "*") {
    return (calculator.result = calculator.mutiplicacao(numb1, numb2));
  }
  if (reqBody.type == "**") {
    return (calculator.result = calculator.potencia(numb1, numb2));
  }
  if (reqBody.type == "%") {
    return (calculator.result = calculator.modulo(numb1, numb2));
  }
}

export default operatorsFilter;
