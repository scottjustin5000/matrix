const TypedError = require('error/typed')
const math = require('./math')
const MatrixError = TypedError({
  type: 'Matrix.validation_error',
  message: 'invalid matrix',
  statusCode: 400
})

class Matrix {
  constructor (matrix) {
    if (!this.isValid(matrix)) throw MatrixError()

    this.matrix = matrix
  }

  static createColumnMatrix (input) {
    const matrix = []
    for (let i = 0; i < input.length; i++) {
      matrix[i] = [input[i]]
    }
    return new Matrix(matrix)
  }

  static createRowMatrix (input) {
    const matrix = [[]]
    for (let i = 0; i < input.length; i++) {
      matrix[0].push(input[i])
    }
    return new Matrix(matrix)
  }

  get columnsLength () {
    return this.matrix[0].length
  }

  get rowsLength () {
    return this.matrix.length
  }

  add (row, column, value) {
    this.matrix[row][column] = value
  }

  clear () {
    for (let r = 0; r < this.matrix.length; r++) {
      let row = this.matrix[r]
      for (let c = 0; c < row.length; c++) {
        this.matrix[r][c] = 0
      }
    }
  }

  isVector () {
    if (this.matrix.length === 1) return true
    if (this.matrix[0].length === 1) return true

    return false
  }

  toArray () {
    const results = []
    for (let r = 0; r < this.matrix.length; r++) {
      let row = this.matrix[r]
      for (let c = 0; c < row.length; c++) {
        results.push(this.matrix[r][c])
      }
    }
    return results
  }

  isValid (matrix) {
    if (!matrix || !matrix.length) return false
    const length = matrix[0].length
    for (let r = 0; r < matrix.length; r++) {
      let item = matrix[r]
      if (item.length !== length) return false
    }
    return true
  }

  static multiply (matrix1, matrix2) {
    return new Matrix(math.multiply(matrix1, matrix2))
  }

  static multiplyScalar (matrix1, value) {
    return new Matrix(math.multiplyScalar(matrix1, value))
  }

  static divideScalar (matrix1, value) {
    return new Matrix(math.divideScalar(matrix1, value))
  }

  static add (matrix1, matrix2) {
    return new Matrix(math.add(matrix1, matrix2))
  }

  static subtract (matrix1, matrix2) {
    return new Matrix(math.subtract(matrix1, matrix2))
  }

  static dotProduct (matrix1, matrix2) {
    return math.dotProduct(matrix1, matrix2)
  }

  static transpose (matrix) {
    return new Matrix(math.transpose(matrix))
  }
}
module.exports = Matrix
