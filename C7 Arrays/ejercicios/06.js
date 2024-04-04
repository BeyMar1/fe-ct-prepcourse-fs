function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  // console.log(array.reverse([1,2,3,4,5]))
  // return array

  
var arreglotemporal=[]

  for(var i = array.length -1; i > 0 ; i--){
    console.log(array[i])
    arreglotemporal.push(array[i])
  }
  return arreglotemporal
}

invertirArray([1,2,3,4,5])
module.exports = invertirArray;

