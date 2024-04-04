function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"

   

   var stringMasLargo = Math.max(str1.length, str2.length, str3.length)  //hago un conteo de posiciones de los array para saber cual tiene mas posiciones

   var nuevoString = " " // se crea la variable para concatenar variables uno al lado del otro  y al dejarlo en blanco no altera al string

   for (var i = 0; i < stringMasLargo; i++) { // recorre posiciones de los arreglos para saber que contienen dentro
      console.log(str1[i])
      console.log(str2[i])
      console.log(str3[i])

      // EXTRAE CADA POSICION DE LOS ARRAY Y LOS ALMACENA EN UNA NUEVA VARIABLE PARA LUEGO CONCATENARLOS
      if (str1[i]) nuevoString += str1[i]

      if (str2[i]) nuevoString += str2[i]

      if (str3[i]) nuevoString += str3[i]

   }

   console.log(nuevoString) // RESULTADO DE LOS ARRAYS CONCATENADOS
   return nuevoString

}

combine("abc", "12345", "67")
module.exports = combine;
