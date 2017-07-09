const TypedError = require('error/typed')

const MatrixError = TypedError({
  type: 'Matrix.operation_error',
  message: 'for {operation}, matrixes must have the same number of rows and columns',
  statusCode: 400
})

const MatrixMultiplcationError = TypedError({
  type: 'Matrix.operation_error',
  message: 'matrix multiplication requires that the number of columns on the first matrix matches the number of rows on the second',
  statusCode: 400
})

const MatrixDotProductError = TypedError({
  type: 'Matrix.operation_error',
  message: 'dot product requires both matrixes must be {message}',
  statusCode: 400
})

function rowsLengthMatch (matrix1, matrix2) {
  return matrix1.rowsLength === matrix2.rowsLength
}

function colsLengthMatch (matrix1, matrix2) {
  return matrix1.columnsLength === matrix2.columnsLength
}

function createEmptyMatrix (rows, cols) {
  return [...Array(rows).keys()].map(i => Array(cols))
}

function multiplyScalar (matrix, val) {
  const results = createEmptyMatrix(matrix.rowsLength, matrix.columnsLength)
  for (let row = 0; row < matrix.rowsLength; row++) {
    for (let col = 0; col < matrix.columnsLength; col++) {
      results[row][col] = matrix.matrix[row][col] * val
    }
  }
  return results
}

function multiply (matrix1, matrix2) {
  if (matrix1.columnsLength !== matrix2.rowsLength) throw MatrixMultiplcationError()
  const results = createEmptyMatrix(matrix1.rowsLength, matrix2.columnsLength)
  for (let row = 0; row < matrix1.rowsLength; row++) {
    for (let col = 0; col < matrix2.columnsLength; col++) {
      let value = 0
      for (let i = 0; i < matrix1.columnsLength; i++) {
        value += matrix1.matrix[row][i] * matrix2.matrix[i][col]
      }
      results[row][col] = value
    }
  }
  return results
}

function divideScalar (matrix1, val) {
  const results = createEmptyMatrix(matrix1.rowsLength, matrix1.columnsLength)
  for (let rows = 0; rows < matrix1.rowsLength; rows++) {
    for (let cols = 0; cols < matrix1.columnsLength; cols++) {
      results[rows][cols] = matrix1.matrix[rows][cols] / val
    }
  }
  return results
}

function add (matrix1, matrix2) {
  if (!rowsLengthMatch(matrix1, matrix2) || !colsLengthMatch(matrix1, matrix2)) throw MatrixError({operation: 'addition'})
  const results = createEmptyMatrix(matrix1.rowsLength, matrix1.columnsLength)
  for (let rows = 0; rows < results.length; rows++) {
    for (let cols = 0; cols < results[0].length; cols++) {
      results[rows][cols] = matrix1.matrix[rows][cols] + matrix2.matrix[rows][cols]
    }
  }
  return results
}

function subtract (matrix1, matrix2) {
  if (!rowsLengthMatch(matrix1, matrix2) || !colsLengthMatch(matrix1, matrix2)) throw MatrixError({operation: 'subtraction'})

  const results = createEmptyMatrix(matrix1.rowsLength, matrix1.columnsLength)
  for (let rows = 0; rows < results.length; rows++) {
    for (let cols = 0; cols < results[0].length; cols++) {
      results[rows][cols] = matrix1.matrix[rows][cols] - matrix2.matrix[rows][cols]
    }
  }
  return results
}

function dotProduct (matrix1, matrix2) {
  if (!matrix1.isVector() || !matrix2.isVector()) throw MatrixDotProductError({message: ' vectors.'})

  const aArray = matrix1.toArray()
  const bArray = matrix2.toArray()

  if (aArray.length !== bArray.length) throw MatrixDotProductError({message: 'the same length.'})

  let result = 0
  for (let i = 0; i < aArray.length; i++) {
    result += aArray[i] * bArray[i]
  }
  return result
}

function transpose (matrix) {
  const inverseMatrix = createEmptyMatrix(matrix.columnsLength, matrix.rowsLength)
  for (let rows = 0; rows < matrix.rowsLength; rows++) {
    for (let cols = 0; cols < matrix.columnsLength; cols++) {
      inverseMatrix[cols][rows] = matrix.matrix[rows][cols]
    }
  }
  return inverseMatrix
}

module.exports = {
  multiply,
  multiplyScalar,
  divideScalar,
  add,
  subtract,
  dotProduct,
  transpose
}
