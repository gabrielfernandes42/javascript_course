//functions

// Methods  = Built-in functions
//Exemplos:
//"Gabrie.toLowerCase()"
//Math.random()

//function declaration syntax:
//function useble codes

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("gato"));
