[![Build Status](https://travis-ci.org/scottjustin5000/matrix.svg?branch=master)](https://travis-ci.org/scottjustin5000/matrix) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Simple Matrix and Matrix math

### Tests
```sh
npm test
```


### Usage
```js
const matrix = new Matrix([[0, 1, 2, 4], [5, 6, 7, 8], [9, 10, 11, 12]])

//scalar multiplication
const matrix1 = new Matrix([[4, 2], [5, -9]])
const result = Matrix.multiplyScalar(matrix, 2)

//matrix multiplication
const matrix1 = new Matrix([[1, 2, 3], [4, 5, 6]])
const matrix2 = new Matrix([[7, 8], [9, 10], [11, 12]])
const result = Matrix.multiply(matrix1, matrix2)

//addition
const matrix1 = new Matrix([[0, 1, 2], [9, 8, 7]])
const matrix2 = new Matrix([[6, 5, 4], [3, 4, 5]])
const result = Matrix.add(matrix1, matrix2)

//subtraction
const matrix1 = new Matrix([[1, 2, 8], [2, 3, 5]])
const matrix2 = new Matrix([[1, 4, 3], [9, 4, 6]])
const result = Matrix.subtract(matrix1, matrix2)

//transpose
const matrix1 = new Matrix([[5, 4, 5], [4, 4, 7]])
const result = Matrix.transpose(matrix1)
```