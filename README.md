<h1 style="display:block; text-align:center;">Code & Beer - Proyecto Final Rolling Code School</h1>

***Repositorio del sitio web de Code&Beer - Back End***
#### Grupo 1 - Comision 16i

<br/>

### Se podrán realizar las siguientes funciones:
- Clientes:
     - Iniciar sesión / registrarse en la aplicación, editar nombre y apellido, dar de baja el usuario.
     - Visualización del listado de productos, número de mesa, pedido.
     - Eleccion de mesa, añadir o eliminar los productos del carrito.
     
- Administrador:
     - Visualización de las pantallas de administración de productos.
     - Agregar / modificar / eliminar productos. 
     
<br/>

### Páginas informativas

- Página Principal: bienvenida al sitio. Incluye un botón en el header para acceder a la 
aplicación de pedidos / administración. 
- Contacto: la página de contacto contiene un mapa funcional con la dirección del 
restaurante y el correspondiente formulario de contacto para que todas las personas 
interesadas puedan enviar consultas.
- Acerca de: esta página contiene información sobre el equipo que integra el restaurante.

<br/>

### Panel de Login y Registro

Esta pantalla del sitio contiene el formulario de logeo y la opción de crear una cuenta.
- Los datos indispensables para registrarse son:

     - Nombre.
     - Apellido.
     - Dirección de mail válido y que no esté ya registrado.
     - Contraseña que deberá contener al menos 2 caracteres numéricos, 2 alfabéticos y tener una longitud mínima de 6 caracteres.
  
#### Nota: en un intento de inicio de sesión incorrecto, se le indica al usuario que el mail o contraseña son incorrectos, sin hacer distinción sobre cuál es el incorrecto.

<br/>

### Listado de Productos que visualiza el CLIENTE

Para poder acceder a esta pantalla, el usuario primero deberá logearse y luego ingresar el numero de mesa en la cual está sentado.
El usuario podrá:

     - Visualizar los productos que contienen una imagen, nombre, precio, descripción y una opción de agregar al pedido.
     - Se le indicará al usuario los productos que NO estén disponibles y se le impedirá agregarlos al carrito.
     - Podrá acceder facilmente a su carrito y a su cuenta para realizar modificaciones.
     - Se mostrará el estado del pedido, siendo las opciones “En espera” y “Pedido realizado” los dos estados posibles. 

<br/>

### Panel del Pedido

Para poder acceder a esta pantalla, el usuario deberá estar logeado y haber ingresado el numero de mesa en la cual está sentado.
En esta pantalla el usuario podrá visualizar su pedido para:

     - Corroborar datos (productos seleccionados, precio total por producto y precio total del pedido)
     - Modificar su pedido de ser necesario.
     - Cerrar el pedido.
<br/>

### Panel de Cuenta

Para poder acceder a esta pantalla, el usuario deberá estar logeado.
En esta pantalla el usuario podrá visualizar sus datos, modificar su nombre y apellido de ser necesario y cerrar sesión.

<br/>

### Listado de Productos que visualiza el ADMINISTRADOR

Solo el administrador podrá acceder a esta pantalla.
Contiene un formulario para agregar nuevos productos y una tabla listando todos los ya existentes con sus datos correspondientes.

Los datos para crear un producto serán:

    - Nombre.
    - Imagen.
    - Precio.
    - Descripción básica del producto.
    - ¿Está disponible?
Se podrán modificar los productos, de ser necesario, permitiendo marcar como NO disponible el producto en cuestión.


### Sitio de prueba:

 <br/>
 
### Contribuidores:

- Candela M. Mercado
- Rubén Vizcarra
- Esteban David Arborio
- Paula Lucía Guillén
- Juan Carlos Medina
- Florencia Noelia Lancioni 
