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

- `[1, 2, 3] + [4, 5, 6]`, retorna `'1,2,34,5,6'` al usar `+` retorna un `string` 
