# Preguntas Conceptuales

- En JavaScript, todas las operaciones de red son asíncronas. ¿Porque es esto importante?
  
- En Javascript, queremos realizar acciones tras una operación/solicitud de red completa. ¿Qué paradigma de programación hace esto posible?
  Paradigma cliente-servidor
- ¿Javascript proporciona soporte limitado para la herencia a través de qué mecanismo?
  Al usar `Object.create()` para que se cree un objeto siendo el prototype de ese objeto el primer argumento
  ```javascript
  function B(a, b) {
    A.call(this, a);
    this.varB = b;
  }
  ```
  B hereda de A, con el método `call`. 
- ¿Qué es el DOM? ¿Qué librería nos ayuda a usar Javascript para manipular el DOM?
  La librería Jquery.
 