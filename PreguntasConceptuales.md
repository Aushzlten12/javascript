# Preguntas Conceptuales

- En JavaScript, todas las operaciones de red son asíncronas. ¿Porque es esto importante?
  Para no bloquear la ejecucion de codigo mientras se espera la repuesta de la red.
- En Javascript, queremos realizar acciones tras una operación/solicitud de red completa. ¿Qué paradigma de programación hace esto posible?
  EL paradigma de la programacion asincrona. JavaScript usa callbacks, promises y async/await.
- ¿Javascript proporciona soporte limitado para la herencia a través de qué mecanismo?
  Las clases no pueden extender objectos regulares (literales). Si se quiere heredar de un objecto regular, se debe user Object.setPrototypeOf().
  Pero en ECMAScript 6, se ha introducido las clases, así palabras claves como `class` y `extends` se pueden usar.
- ¿Qué es el DOM? ¿Qué librería nos ayuda a usar Javascript para manipular el DOM?
  El DOM es una representación estructurada del documento HTML.
  La librería Jquery, simplifica la manipulacion del DOM, interacción de eventos, animaciones,etc.