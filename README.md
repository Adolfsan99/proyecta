# 💡Proyecta

### Objetivo del Proyecto

El objetivo principal de este sistema es **optimizar la gestión de proyectos y tareas** dentro de las empresas y equipos de trabajo, permitiendo un seguimiento detallado de las **historias de usuario** y los **tickets** de cada proyecto. Los usuarios pueden colaborar de forma más eficiente, ya que pueden ver el estado actual de las tareas y modificar la información relacionada a proyectos, historias y tickets en tiempo real.

### Características principales:

1. **Gestión de Proyectos**:
   - Los usuarios pueden gestionar proyectos dentro de la plataforma.
   - Cada empresa puede tener proyectos, y cada proyecto contiene múltiples historias de usuario y tickets asociados.
2. **Gestión de Historias de Usuario y Tickets**:
   - Las **historias de usuario** representan funcionalidades que deben desarrollarse dentro de un proyecto.
   - Cada historia de usuario tiene asignados **tickets**, que son tareas específicas necesarias para implementar esa historia.
   - Los tickets pueden tener estados como **Activo**, **En Proceso** o **Finalizado**.
3. **Login y Registro**:

   - Los usuarios deben registrarse en la plataforma y luego pueden iniciar sesión para acceder a sus proyectos.
   - El sistema valida el **correo electrónico** y la **contraseña** para asegurar que solo usuarios autorizados puedan acceder.

4. **Interactividad y Modificaciones**:

   - Los usuarios pueden **crear, editar y eliminar proyectos**, **historias de usuario**, y **tickets** dentro de los proyectos.
   - Se implementan confirmaciones para acciones sensibles, como eliminar proyectos o tickets, para evitar modificaciones accidentales.

5. **Dashboard de Proyectos**:
   - Los usuarios pueden ver un **dashboard** con una lista de proyectos y su estado actual, lo que les permite tener un panorama general de su trabajo y de las tareas pendientes.

### Casos de Uso

- **Empresas** pueden gestionar proyectos para sus equipos y hacer un seguimiento del progreso.
- **Usuarios** pueden tener proyectos personales donde pueden gestionar su propio trabajo o proyectos asociados a la empresa para la cual trabajan.
- **Administradores** o **superusuarios** pueden agregar nuevos usuarios, asignarles proyectos y gestionar los datos de la plataforma.

## Más información sobre el proyecto

El proyecto es una plataforma de gestión de proyectos, **historia de usuario** y **tickets** que permite a las empresas administrar sus **proyectos** de desarrollo y **seguimiento de tareas**. Está construida utilizando **Vue.js** (para la interfaz de usuario) y **Vuex** (para la gestión del estado).

### 1. **Componentes y Funciones:**

- **Formulario de Login y Registro**:
  - Permiten a los usuarios iniciar sesión o registrarse en la aplicación. Se validan los correos electrónicos y las contraseñas antes de permitir el acceso.
- **Gestión de Proyectos, Historias de Usuario y Tickets**:
  - El código permite a los usuarios crear, editar y eliminar proyectos, historias de usuario y tickets.
  - Cada proyecto tiene **historias de usuario**, y cada historia de usuario tiene **tickets** asociados.
  - Los estados de los tickets pueden ser **Activo**, **Finalizado** o **En Proceso**.
- **Confirmaciones y Eliminaciones**:

  - Cuando el usuario desea eliminar un proyecto, historia o ticket, se solicita una confirmación.
  - Para eliminar elementos, se verifican los estados y se actualiza el estado en la tienda Vuex.

- **Validaciones**:
  - **Validar email** y **validar contraseña** (que debe cumplir con ciertos requisitos de seguridad).
- **Estilo Dinámico para estados de tickets**:

  - Se ajustan los estilos de los tickets dependiendo de su estado (Activo, Finalizado, En Proceso) con colores específicos.

- **Restablecimiento de datos**:
  - Es posible volver a los datos por defecto de la aplicación iniciando sesión y creando un proyecto con el nombre "resetdata"

### 2. **Interacciones con el Usuario:**

- **Login/Registro**: Los usuarios pueden iniciar sesión o registrarse en el sistema.
- **Gestión de Proyectos y Tickets**: Los usuarios pueden crear, editar o eliminar proyectos y tickets relacionados con las historias de usuario.
- **Confirmación de acciones**: Algunas acciones (como eliminar elementos) requieren confirmación del usuario.

### 3. **Estructura de Datos Iniciales (Local Storage):**

- **`cargarDatosLocales`**: Esta función carga datos de un `localStorage` en el navegador. Si no hay datos, se carga un conjunto de datos predeterminados que incluyen:
  - Empresas con proyectos asociados.
  - Usuarios con sus respectivos proyectos y contraseñas.
  - Información sobre historias de usuario y tickets relacionados.

### 4. **Uso de `localStorage`:**

- El estado de la aplicación se guarda en el `localStorage` para que la información persista incluso si se recarga la página o se cierra el navegador.

### 5. **Gestión del Estados con Vuex Store:**

- El código crea una tienda **Vuex** para manejar el estado de la aplicación. Se utiliza para almacenar datos relacionados con:
  - **Empresas** y **Proyectos**.
  - **Usuarios** y su información.
  - Las **acciones** permiten realizar operaciones como:
    - **Iniciar sesión** (`iniciarSesion`).
    - **Registrar un nuevo usuario** (`registrar`).
    - **Actualizar datos** en el `localStorage`.

### 6. **Vista de la Aplicación:**

- La interfaz de usuario está manejada por Vue, y usa reactividad para actualizar los elementos dinámicamente según el estado de la tienda Vuex.
- Los usuarios pueden interactuar con los proyectos, historias y tickets, modificando sus detalles en tiempo real.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactar a sanchezlopezadolfo@gmail.com.
