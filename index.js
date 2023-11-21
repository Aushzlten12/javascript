let a = [1,2,3] + [4,5,6] 
console.log(a)
console.log(typeof a )

console.log([] == true)
console.log([10, 1, 3].sort())
console.log([]==0)

function f1(x) {
  var baz = 3;
  return function (y) {
    console.log(x + y + (baz++));
    }
}
var bar = f1(5);
bar(11);

function greatestNumber(array) {
  let greatest = array[0];

  for(let i in array){
    if (array[i] > greatest){
      greatest = array[i];
    }
  }

  return greatest;
}

console.log(greatestNumber([4,5,1,10]))

function primerNoDuplicado(cadena){
  // quitar las tildes
  cadena = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  // convertir a minusculas
  cadena = cadena.toLowerCase();
  const frecuencia = {};

  for(let i in cadena){
    const caracter = cadena[i];
    frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
  }
  console.log(frecuencia)
  for(let i in cadena){
    const caracter = cadena[i];
    if (frecuencia[caracter] === 1){
      return caracter;
    }
  }

  return null;
}

const resultado = primerNoDuplicado("mínimum");
console.log(resultado); // Debería imprimir: "n"

class Pokemon {
  constructor(HP, ataque, defensa) {
    this.HP = HP;
    this.ataque = ataque;
    this.defensa = defensa;
    this.movimiento = "";
    this.nivel = 1;
    this.tipo = "";
  }

  flight(){
    if(this.movimiento === ""){
      throw new Error("No se especifica ningún movimiento.");
    }
  }

  canFly() {
    if (this.tipo === "") {
      throw new Error("No se especifica ningún tipo.");
    }

    return this.tipo.includes("volar");
  }
}

pokemon = new Pokemon(1200,40,70);
console.log(pokemon); //

class Charizard extends Pokemon{
  constructor(HP, ataque, defensa, movimiento) {
    super(HP, ataque, defensa);
    this.movimiento = movimiento ;
    this.tipo = "disparar/volar";
  }

  fight(){
    if(this.movimiento != ""){
      console.log("Utilizando el movimiento: ",this.movimiento);
      return this.ataque;
    } else{
      throw new Error("No se especifica ningún movimiento.");
    }
  }
}


charizard = new Charizard(1200,40,70, "Lanzallamas");
console.log(charizard);
try {
  let ataque = charizard.fight();
  console.log("Ataque: ",ataque);
} catch (error) {
  console.error(error.message);
}