function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  // var indiceRandom = Math.floor(Math.random()*array.length)
  // return array[indiceRandom]


  var resultadoDelFilter = array.filter(function(palabra){

  if(palabra.length >= 5){
    return palabra
  }
})



console.log(resultadoDelFilter[0])

}
obtenerPrimerStringLargo(["www", "22234", "adasdasdasdada", "1003"])
module.exports = obtenerPrimerStringLargo;
