// String en formato JSON
let personaString = '{"nombre":"Pepe","ciudad":"Buenos Aires","edad":22}';
console.log(personaString);

// Parsear JSON
let persona = JSON.parse(personaString);
console.log(persona);

// String en formato JSON
let nombresString = '["Pepe","Ana","Pipo"]';
console.log(nombresString);

// Parsear JSON
let nombres = JSON.parse(nombresString);
console.log(nombres);