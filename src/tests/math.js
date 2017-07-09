const Matrix = require('../')

describe('test matrix math', () => {
  it('should not add matrices', () => {
    const matrix1 = new Matrix([[-1, 2, 0], [0, 3, 6]])
    const matrix2 = new Matrix([[0, -4], [9, -4]])
    ;(function () {
      return Matrix.add(matrix1, matrix2)
    }).should.throw(Error)
  })

  it('should perform addition on matrices', () => {
    const matrix1 = new Matrix([[0, 1, 2], [9, 8, 7]])
    const matrix2 = new Matrix([[6, 5, 4], [3, 4, 5]])
    const res = Matrix.add(matrix1, matrix2)
    res.matrix[0].should.have.property('length', 3)
    res.matrix[0][0].should.equal(6)
    res.matrix[0][1].should.equal(6)
    res.matrix[0][2].should.equal(6)

    res.matrix[1].should.have.property('length', 3)
    res.matrix[1][0].should.equal(12)
    res.matrix[1][1].should.equal(12)
    res.matrix[1][2].should.equal(12)
  })

  it('should not subtract matrices', () => {
    const matrix1 = new Matrix([[-1, 2, 0], [0, 3, 6]])
    const matrix2 = new Matrix([[0, -4], [9, -4]])
    ;(function () {
      return Matrix.subtract(matrix1, matrix2)
    }).should.throw(Error)
  })

  it('should perform subtraction on matrices', () => {
    const matrix1 = new Matrix([[-1, 2, 0], [0, 3, 6]])
    const matrix2 = new Matrix([[0, -4, 3], [9, -4, -3]])
    const res = Matrix.subtract(matrix1, matrix2)
    res.matrix[0].should.have.property('length', 3)
    res.matrix[0][0].should.equal(-1)
    res.matrix[0][1].should.equal(6)
    res.matrix[0][2].should.equal(-3)

    res.matrix[1].should.have.property('length', 3)
    res.matrix[1][0].should.equal(-9)
    res.matrix[1][1].should.equal(7)
    res.matrix[1][2].should.equal(9)
  })

  it('should perform scalar multiplication', () => {
    const matrix = new Matrix([[4, 0], [1, -9]])
    const res = Matrix.multiplyScalar(matrix, 2)
    res.matrix[0].should.have.property('length', 2)
    res.matrix[0][0].should.equal(8)
    res.matrix[0][1].should.equal(0)
    res.matrix[1].should.have.property('length', 2)
    res.matrix[1][0].should.equal(2)
    res.matrix[1][1].should.equal(-18)
  })

  it('should not multiply matrices', () => {
    const matrix1 = new Matrix([[1, 2, 3], [4, 5, 6]])
    const matrix2 = new Matrix([[7, 8], [9, 10]])
    ;(function () {
      return Matrix.multiply(matrix1, matrix2)
    }).should.throw(Error)
  })

  it('should perform multiplication on matrices', () => {
    const matrix1 = new Matrix([[1, 2, 3], [4, 5, 6]])
    const matrix2 = new Matrix([[7, 8], [9, 10], [11, 12]])
    const res = Matrix.multiply(matrix1, matrix2)
    res.matrix[0].should.have.property('length', 2)
    res.matrix[0][0].should.equal(58)
    res.matrix[0][1].should.equal(64)
    res.matrix[1].should.have.property('length', 2)
    res.matrix[1][0].should.equal(139)
    res.matrix[1][1].should.equal(154)
  })

  it('should perform scalar division', () => {
    const matrix = new Matrix([[4, 2], [1, -9]])
    const res = Matrix.divideScalar(matrix, 2)
    res.matrix[0].should.have.property('length', 2)
    res.matrix[0][0].should.equal(2)
    res.matrix[0][1].should.equal(1)
    res.matrix[1].should.have.property('length', 2)
    res.matrix[1][0].should.equal(0.5)
    res.matrix[1][1].should.equal(-4.5)
  })

  it.only('should transpose', () => {
    const matrix = new Matrix([[1, 2, 3], [4, 5, 6]])
    const res = Matrix.transpose(matrix)
    res.matrix[0].should.have.property('length', 2)
    res.matrix[0][0].should.equal(1)
    res.matrix[0][1].should.equal(4)
    res.matrix[1].should.have.property('length', 2)
    res.matrix[1][0].should.equal(2)
    res.matrix[1][1].should.equal(5)
    res.matrix[2].should.have.property('length', 2)
    res.matrix[2][0].should.equal(3)
    res.matrix[2][1].should.equal(6)
  })
})
