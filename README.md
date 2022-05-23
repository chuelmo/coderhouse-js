# Agregando librerías

- Se agrega el uso de la librería SweetAlert para cumplir con la consigna
- Su uso se acopla perfectamente al funcionamiento del carrito, al momento de intentar vaciar el carrito se despliega un alert que te informa que tu carrito quedará vacío, según la elección del usuario el carrito se vaciará o quedará tal cual.

# Optimizando el código

- Se refactoriza el código, no hay funciones de más de 15 líneas
- Cada clase va en un archivo js separado, database, categoria, articulo, compra
- Se utiliza el operador ternario donde se puede para darle claridad al código
- Al disminuir la cantidad de un artículo hasta 0 se elimina la línea de la tabla del carrito
- Fix a bug que aparecía cuando se vaciaba el carrito y se le trataba de dar funcionalidad a un botón inexistente.

# Segunda entrega del proyecto

- Eliminé el Map donde guardaba las compras para pasar a utilizar el localStorage.
- En el carrito agregué el botón "Vaciar Carrito" que deja el carrito vacío.
- En el carrito le agregué funcionalidad a los botoncitos de aumentar y disminuir la cantidad comprada de un producto.
- Si la cantidad llega a 0 todavía no se elimina el producto del carrito, se hará para una próxima versión.
- Se usa localStorage, JSON.stringify y JSON.parse tal cual se pide en la rúbrica.

# Desafío incorporar eventos

- Eliminé por completo la primer parte de los ejercicios donde trabajamos con prompt y alert.
- Agruegué manejo de eventos para cargar la colección (Map) de Compras.
- Muestro el carrito con todas las compras, se arma dinámicamente.
- Al mostrar el carrito también se hacen los cálculos del valor total de la compra.
- Se siguen manteniendo en gitHub cada desafío como una rama independiente.

# Desafío complementario

## Interactuar con el HTML

- Dejé el ejercicio anterior para que corra a través de un botón.
- Se despliegan los artículos según la categoría de manera dinámica, modificando el DOM.
- Se crea un template donde se muestra cada uno de los artículos, este template se modifica dinámicamente.
- Se mantiene la anterior DataBase como MockDataBase para que funcione el ejercicio anterior
- Se crea una nueva DataBase con todos los artículos con los que trabajaré en el proyecto
- Se agregan campos en la clase Artículos para guardar la url de la imagen, la descripción del producto y el atributo alt de la imagen.

# Primer entrega del proyecto

- Agregué a los artículos la categoría, la idea es mostrar sólo los artículos de la categoría seleccionada.
- Trabajé sobre la estructura HTML para tener una idea más aproximada de como se verá la página
- Agregué las imágenes de todos los productos que la página va a tener disponibles.
- Hice algunos pequeños cambios en el archivo js para que contemple el uso de la categoría

# Trabajo con Arrays y Clases

- Trasladar al proyecto integrador el concepto de objetos y clases
- Incorporar el uso de Arrays
- Utilizar algún método sobre los arrays
- Agregué el uso de Map también
- En cada entrega agrego una nueva rama en git así siempre tengo cada trabajo
- Sobreescribo la rama main para que se vea el último trabajo en gitpages

#Entrega del primer desafío
Simulador Interactivo

- En este caso es una especie de carro de compras con 4 artículos
- No tiene ninguna interfaz gráfica
- Solo es una prueba de concepto a nivel de JS

# coderhouse-js

Curso de JS en Coderhouse, ejercicios y proyecto final
