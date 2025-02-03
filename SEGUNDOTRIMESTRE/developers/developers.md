## Ejercicio de selección de personal de desarrollo

El fichero developers.html ofrece el esquema de una página para mostrar el personal de un departamento de desarrollo software.

En el fichero dev_data.json están los empleados que pertenecen a la plantilla del departamento.

Los ficheros html y css se pueden modificar con total libertad para facilitar los puntos siguientes.

A partir de aquí, se trata de realizar los siguientes puntos:

- Obtener en una variable la lista de los empleados para poder operar con ellos

  - Con una llamada a una función asíncrona (fetch)
  - Asignando directamente el texto a una variable para transformarlo en array de objetos JSON.

- Completar la tabla donde se muestran los datos de los empleados (con los primeros 20 empleados sería suficiente)

  - El campo Rank muestra el campo value con un bloque div de anchura ese value x 5
  - El campo Selección va a servir para los botones de la tabla "Con los seleccionados"

- A partir de las opciones de la primera tabla, usando los objetos de formulario, filtrar los datos de modo que se muestren sólo los que cumplen las opciones elegidas

  - Por nivel de lenguaje
  - Por edad

- En el último campo Selección se marcan las filas que van a ser resaltadas o eliminadas al pulsar el botón de la tabla "Con los seleccionados"

  - Resaltar pone la fila con un color de fondo distinto
  - Borrar temporalmente elimina esas filas de la tabla pero no de la lista de empleados
  - Borrar definitivamente elimina esos empleados de los datos guardados. Para volver a ser usados hay que recargar la página

- A partir de estas opciones añadir tantas como se quieran, como por ejemplo
  - Añadir nuevos empleados a la lista
  - Poner una opción de filtro por ciudades
  - Mostrar en un bloque aparte los datos de los empleados seleccionados
  - .....
