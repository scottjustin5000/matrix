const Matrix = require('../')

describe('test matrix', () => {
  it('should throw validation error', () => {
    (function () {
      return new Matrix([[0, 1, 2, 4, 6], [1, 2, 3, 4], [1, 2, 3, 4, 5]])
    }).should.throw(Error)
  })

  it('should create valid matrix', () => {
    const matrix = new Matrix([[0, 1, 2, 4, 6], [1, 2, 3, 4, 7], [1, 2, 3, 4, 5]])
    matrix.should.be.an.instanceOf(Matrix)
  })

  it('should get row length', () => {
    const matrix = new Matrix([[0, 1, 2, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
    matrix.rowsLength.should.equal(3)
  })

  it('should get column length', () => {
    const matrix = new Matrix([[0, 1, 2, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
    matrix.columnsLength.should.equal(4)
  })

  it('should create a column matrix', () => {
    const matrix = Matrix.createColumnMatrix([1, 2, 3, 4])
    matrix.rowsLength.should.equal(4)
    matrix.columnsLength.should.equal(1)
  })

  it('should create a row matrix', () => {
    const matrix = Matrix.createRowMatrix([1, 2, 3, 4])
    matrix.should.be.an.instanceOf(Matrix)
    matrix.rowsLength.should.equal(1)
    matrix.columnsLength.should.equal(4)
  })

  it('should clear matrix', () => {
    const matrix = new Matrix([[0, 1, 2, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
    matrix.columnsLength.should.equal(4)
    matrix.clear()
    matrix.columnsLength.should.equal(4)
    for (let r = 0; r < matrix.length; r++) {
      let row = matrix[r]
      for (let c = 0; c < row.length; c++) {
        matrix[r][c].should.equal(0)
      }
    }
  })

  it('should return vector = false', () => {
    const matrix = new Matrix([[0, 1, 2, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
    const isVector = matrix.isVector()
    isVector.should.equal(false)
  })

  it('should return vector = true', () => {
    const matrix = new Matrix([[1, 2, 3, 4]])
    const isVector = matrix.isVector()
    isVector.should.equal(true)
  })

  it('should convert to array', () => {
    const matrix = new Matrix([[0, 1, 2, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
    const arr = matrix.toArray()
    arr.should.have.property('length', 12)
  })
})
