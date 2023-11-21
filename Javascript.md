# ¿Qué puede hacer Javascript ?

## Booleans

**Preguntas**

- `undefined == null` es true, al hacer eso verifica que la variable que se compara con `undefined` si es null, en este caso es true.
- `NaN == NaN` es false, porque `NaN` es NotANumber, no se pueden comparar. Si se usa la función `isNaN(NaN)` retorna true.
- `null == false` es false, porque `null` representa un valor nulo y `false` es un booleano, cuyo valor numerico es cero.
- `0 == false` es true, ya que el valor número del booleano `false` es `0` al igualar estos dos retorna true.
- `"" == false` es true, una array vació es nulo verifica si este tiene contenido al no tenerlo es false.

Al usar `===` retorna false para cada comparacion que haga ya que son diferentes tipos.

Al convertir con `Boolean()` a cualquier de los siete valores `Falsy` retorna `false`.

## Arrays

**Preguntas**

- `[1, 2, 3] + [4, 5, 6]`, retorna `'1,2,34,5,6'` al usar `+` retorna un `string` asume que el contenido dentro de `[]` como una cadena y al sumarlo solo concatena el contenido dentro de los corchetes.
- `!![]` retorna true, empiezo teniendo un array `[]` vacío pero es un array, en Javascript todo objeto se considera verdadero, al ejecutar `![]` retorna false, como hay un array su valor booleano es true, al negarlo es false, y negarlo dos veces retorna `true`.
- `[] == true` es false, ya que no se relacionan entre booleanos no tiene por defecto su valor `true` solo que al usar `!` intrinsecamente hace `Boolean([])` eso retorna `true`.
- `[10, 1, 3].sort()` retorna `[1,10,3]`, el método sort ordena el array según la posición del valor Unicode, y según eso 10 es antes que 3.
- `[] == 0` retorna true, ya que Javascript el array vació lo convierte a una cadena esta sería una cadena vacía y luego a un número. Por lo que termina siendo 0, y al compararar `0==0` retorna true.

## Clausuras

```javascript
function f1(x) {
  var baz = 3;
  return function (y) {
    console.log(x + y + baz++);
  };
}
var bar = f1(5);
bar(11);
```

Se defina la función f1 que toma un parametro x, esta retorna una función interna con parametro y e imprime en consola una suma, en la que se incrementa baz.

`f1(5)` devuelve la función interna con `x = 5` y `baz = 3`
Cuando se ejecuta `bar(11)` esta llama a la función interna con `y = 11`. Ya teniendo los valores `console.log(5 + 11 + (3++))` por lo que imprime `19`. La variable `baz` seguirá incrementandose.

## Algoritmos

- Reescribe la función para que se convierta en una `O(N)` más rápida:

```javascript
function greatestNumber(array) {
  for (let i of array) {
    let isIValTheGreatest = true;
    for (let j of array) {
      if (j > i) {
        isIValTheGreatest = false;
      }
    }
    if (isIValTheGreatest) {
      return i;
    }
  }
}
```

Para hacer eso, iniciamos a una variable como mayor elemento por ejemplo array[0] y luego iterando entre sus elementos compararlo y si algunos elmento es mayor la variable cambia y retorna la variable con el mayor elemento.

```javascript
function greatestNumber(array) {
  let greatest = array[0];

  for (let i in array) {
    if (array[i] > greatest) {
      greatest = array[i];
    }
  }

  return greatest;
}
```

- La siguiente función devuelve si hay o no una X mayúscula dentro de una cadena. ¿Cuál es la complejidad temporal de esta función en términos de notación O grande? Luego, modifica el código para mejorar la eficiencia del algoritmo en los mejores y promedios escenarios

```javascript
function containsX(string) {
  foundX = false;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
      foundX = true;
    }
  }
  return foundX;
}
```

La complejidad temporal de esta función O(N)

**Luego, modifica el código para mejorar la eficiencia del algoritmo en los mejores y promedios escenarios.**

El mejor caso es cuando el caracter 'X' aparece en la primera iteración, el escenario promedio es un caso en el que el caracter 'X' este en la cadena entre la posicon 1 y la ultima.

```javascript
function containsX(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
      return true;
    }
  }
  return false;
}
```

Para ello, eliminamos la variable para que no vaya cambiando su valor en todas las iteraciones, sino una vez encuentra el caracter, detenga todo y retorne un valor. Para hacerlo más eficiente.

**Escribe una función que devuelva el primer carácter no duplicado de una cadena. Por ejemplo, la cadena "mínimum" tiene dos caracteres que solo existen una vez: la n y la u, por lo que su función debería devolver la n, ya que aparece primero. La función debe tener una eficiencia de O(N).**

```javascript
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
  // console.log(frecuencia)
  for(let i in cadena){
    const caracter = cadena[i];
    if (frecuencia[caracter] === 1){
      return caracter;
    }
  }

  return null; // o un caracter vacio
}
```
Tiene una complejidad O(n)

## Clases

Practiquemos la herencia y la programación orientada a objetos en Javascript. Diseñe 2 clases, una llamada "Pokemon" y otra llamada "Charizard".

```javascript
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
```

Usando ECMAScript 6 se puede usar la palabra reservada `class`.