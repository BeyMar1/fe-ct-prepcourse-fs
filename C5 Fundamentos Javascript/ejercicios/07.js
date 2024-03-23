function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof valor;
}

module.exports = esTipoDato;

console.log(esTipoDato(5)); // "number"
console.log(esTipoDato("Hola")); // "string"
console.log(esTipoDato(true)); // "boolean"
console.log(esTipoDato({})); // "object"
console.log(esTipoDato(null)); // "object"
console.log(esTipoDato(undefined)); // "undefined"