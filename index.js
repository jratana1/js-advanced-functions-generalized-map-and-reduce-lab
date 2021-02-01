// Add your functions here
function map(array, func){
    let r = []
        for (let i = 0; i < array.length; i++ ) {
            r.push(func(array[i]))
        }
    return r
}

function reduce(array, func, start){
    let r = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1

  for (; i < array.length; i++) {
    r = func(array[i], r)
  }

  return r;
  
//   let r = start
//         for (let i = 0; i < array.length; i++ ) {
//             r += func(array[i])
//         }
//     return r
}
