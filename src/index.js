
// You should implement your task here.

module.exports = function towelSort (matrix) {


  let sotrMatrix = []

  if (!Array.isArray(matrix)){
    return sotrMatrix
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      i % 2 === 0 ? sotrMatrix.push(matrix[i][j]) : sotrMatrix.push(matrix[i][matrix[i].length - 1 - j])
    }
    
  }
  return sotrMatrix 
}


