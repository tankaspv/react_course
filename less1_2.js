// Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади (можете выбрать какую то конкретную фигуру, 
// а можете, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) 
// и возвращать объект вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры, для которой вычислялась площадь, 
// input - входные параметры, по которым было произведено вычисление.
let area;
let figure;


function calculateArea(a, b) {
  if (a == b) {
    figure = 'square';
  } else {
    figure = 'rectangle';
  }
  area = a * b;
  input = [a,b];

  return {area, figure, input};
}

console.log(calculateArea(2, 2));
console.log(calculateArea(10, 2));