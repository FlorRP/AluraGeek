# AluraGeek
Página web de productos.

Puede bajarlo y ejecutarlo con Live Server en VSCode u otro similar.

Esta página consume API, creada mediante https://my-json-server.typicode.com/florRP/AluraGeek-API, por lo tanto los cambios no persisten.

Al borrar todos los productos debería aparecer una leyenda que dice "No hay productos disponibles..." puede que, ya que los cambios no persisten, la misma no aparezca.

Lo he probado de manera local y aparece, así que puedo afirmar que funciona correctamente, si desea confirmarlo puede cambiar los links dentro de la carpeta js - Services, en el archivo listado-de-productos, por un link local.

# Métodos HTTP que se utilizan en la app

- <strong>Get:</strong> Mediante la petición de datos a la base de datos (fake API).
- Post: Mediante el formulario de esta página web se pueden crear nuevos productos, los cuales se agregan a la base de datos (fake API) creada.
- Delete: Cada producto contiene un botón de borrar con el cual se elimina el producto de la base de datos (fake API) creada.

