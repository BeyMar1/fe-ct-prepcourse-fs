function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:

   if (array.includes(num)){
      console.log(array.indexOf(num))
      return array.indexOf(num)
   } else return -1

}

encontrarElemento(5, [1,2,3,4,5])
module.exports = encontrarElemento;
