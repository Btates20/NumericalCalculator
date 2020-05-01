//==> shorten nerdamer expression that evaluates f(x):
function f(x) {
  return +parseFloat(nerdamer(`f(${x})`).evaluate().toDecimal())
}

//! tested (working):
const calcBisectionAndFalsePos = (xl, xu, targetErr, maxIter) => {
  let iter = 0,
    currentErr = 100,
    xr = 0,
    xrOld = 0,
    iterationsResults = []
  if (f(xl) * f(xu) < 0) {
    do {
      xrOld = xr
      if (selectedMethod == bisectionId) xr = (xl + xu) / 2
      else if (selectedMethod == falsePositionId) xr = xu - (f(xu) * (xl - xu)) / (f(xl) - f(xu))

      currentErr = Math.abs((xr - xrOld) / xr) * 100
      iterationsResults.push({ i: iter, xl: xl, fxl: f(xl), xu: xu, fxu: f(xu), xr: xr, fxr: f(xr), err: iter == 0 ? '----' : currentErr })

      if (f(xl) * f(xr) == 0) return iterationsResults
      else if (f(xl) * f(xr) > 0) xl = xr
      else if (f(xl) * f(xr) < 0) xu = xr

      iter++
    } while (currentErr >= targetErr)
    return iterationsResults
  } else {
    return new Error("Root isn't in the interval")
  }
}

// TODO: test this
const displayBisectionAndFalse = (results) => {
  const tableHeader = ['i', 'xl', 'f(xl)', 'xu', 'f(xu)', 'xr', 'f(xr)', 'error']
  let table = document.createElement('table')
  //add the header:
  let header = document.createElement('thead')
  let body = document.createElement('tbody')
  tableHeader.forEach((element) => {})
  results.forEach((row) => {
    TableBody.append(`
        <tr>
          <td>${row.i}</td>
          <td>${+parseFloat(row.xl)}</td>
          <td>${row.fxl}</td>
          <td>${+parseFloat(row.xu)}</td>
          <td>${row.fxu}</td>
          <td>${+parseFloat(row.xr)}</td>
          <td>${row.fxr}</td>
          <td>${row.err}</td>
        </tr>
      `)
  })
}

// //outer loop to create rows and append it to tbody:
// for (let i = 0; i < rows; i++) {
//   let row = document.createElement('tr');

//   //inner loop to create row cells:
//   for (let j = 0; j < cols; j++) {
//     let cell = document.createElement('td');
//     let cellText = document.createTextNode(matrix[i][j]);
//     cell.appendChild(cellText);
//     row.appendChild(cell);
//   }
//   // add the row to the end of the table body
//   matrixBody.appendChild(row);
// }

// // var table_body = '<table border="1">';
// // for (var i = 0; i < number_of_rows; i++) {
// //   table_body += '<tr>';
// //   for (var j = 0; j < number_of_cols; j++) {
// //     table_body += '<td>';
// //     table_body += 'Table data';
// //     table_body += '</td>';
// //   }
// //   table_body += '</tr>';
// // }
// // table_body += '</table>';
// // $('#tableDiv').html(table_body);
