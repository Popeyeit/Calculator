let currentNumbersArray = [];
let currentNum = '';
const calcParent = document.querySelector('.calc-wrapper');
const resultOperation = calcParent.querySelector('.calc-res');

const countOpeartion = () => {
  const [num1, symbol, num2, lastSymbol] = currentNumbersArray;
  let res = 0;
  switch (symbol) {
    case '+':
      res = Number(num1) + Number(num2);
      break;
    case '-':
      res = Number(num1) - Number(num2);
      break;
    case 'X':
      res = Number(num1) * Number(num2);
      break;
    case '/':
      res = Number(num1) / Number(num2);
      break;
    default:
      break;
  }
  if (lastSymbol !== '=') {
    return [res, lastSymbol];
  }

  return [res];
};

const typeOfOperation = function (key) {
  return countOpeartion();
};
const handleCalc = function (e) {
  e.preventDefault();
  const currentValue = e.target.value;
  const name = e.target.name;
  if (currentValue === 'clear') {
    currentNumbersArray = [];
    currentNum = '';
    resultOperation.textContent = '';
    return;
  }
  if (name !== 'num') {
    if (currentNum) {
      currentNumbersArray.push(currentNum);
    }

    currentNumbersArray.push(currentValue);

    currentNum = '';
  }

  if (currentNumbersArray.length % 4 === 0 && currentNumbersArray.length > 0) {
    const res = typeOfOperation(name);
    currentNumbersArray = res;
    resultOperation.textContent = res[0];
  }
  console.log(currentNumbersArray);
  if (name === 'num') {
    currentNum += currentValue;
    resultOperation.textContent = currentNum;
  }
};
calcParent.addEventListener('click', handleCalc);
