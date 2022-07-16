class Calculator {

  add(x, y){
    if(typeof(x) === 'number' && typeof(y) === 'number') return (x + y);
  }

  subtract(x, y){
    if(typeof(x) === 'number' && typeof(y) === 'number') return (x - y);
  }

  divide(x, y){
    if(typeof(x) === 'number' && typeof(y) === 'number') return (x / y);
  }

  multiply(x, y){
    if(typeof(x) === 'number' && typeof(y) === 'number') return (x * y);
  }
}



export default Calculator;