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
  - El proyecto permite a los usuarios crear, editar y eliminar proyectos, historias de usuario y tickets.
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

- El proyecto crea una tienda **Vuex** para manejar el estado de la aplicación. Se utiliza para almacenar datos relacionados con:
  - **Empresas** y **Proyectos**.
  - **Usuarios** y su información.
  - Las **acciones** permiten realizar operaciones como:
    - **Iniciar sesión** (`iniciarSesion`).
    - **Registrar un nuevo usuario** (`registrar`).
    - **Actualizar datos** en el `localStorage`.

### 6. **Vista de la Aplicación:**

- La interfaz de usuario está manejada por Vue, y usa reactividad para actualizar los elementos dinámicamente según el estado de la tienda Vuex.
- Los usuarios pueden interactuar con los proyectos, historias y tickets, modificando sus detalles en tiempo real.

## Posibles mejoras y actualizaciones

### 1. **Autenticación y Seguridad Mejorada**

- **Autenticación avanzada**: Aunque el proyecto tiene un sistema básico de inicio de sesión y registro, sería recomendable integrar un sistema de autenticación más seguro, como **OAuth** o **JWT** (JSON Web Tokens), para manejar las sesiones de usuario de manera más segura.
- **Recuperación de contraseña**: Implementar una funcionalidad de **recuperación de contraseña** para que los usuarios puedan restablecer sus contraseñas si la olvidan.
- **Roles de usuario más específicos**: Mejorar los roles y permisos, permitiendo definir roles como "Admin", "Manager", "Developer", etc., con acceso restringido según el rol.
- **Protección de datos**: Usar HTTPS para garantizar que la comunicación entre el servidor y el cliente sea segura. Además, implementar medidas de protección contra ataques como **Cross-Site Scripting (XSS)** y **SQL Injection**.

### 2. **Base de Datos y Escalabilidad**

- **Base de datos real**: Actualmente, los datos están almacenados en `localStorage`, lo que es adecuado para pruebas o pequeños proyectos, pero para un entorno empresarial real, se necesita una base de datos robusta. Se recomienda integrar una base de datos como **MySQL**, **PostgreSQL** o **MongoDB** para almacenar los datos de manera segura y escalable.
- **Backend API**: Crear un servidor backend (por ejemplo, usando **Node.js**, **Express**, **Python/Django**, etc.) que gestione las solicitudes de los usuarios y se conecte a la base de datos.
- **Escalabilidad**: Asegurarse de que la arquitectura sea escalable para manejar un número creciente de usuarios y proyectos.

### 3. **Interfaz de Usuario (UI) y Experiencia de Usuario (UX)**

- **Diseño responsive**: Asegurarse de que la aplicación sea completamente **responsive**, es decir, que funcione correctamente en dispositivos móviles, tabletas y escritorios. Usar frameworks como **Vuetify** o **Tailwind CSS** puede ser útil para mejorar la apariencia y usabilidad.
- **Interfaz de administración**: Crear una interfaz de administración avanzada para gestionar usuarios, proyectos y roles dentro de la plataforma de forma sencilla y eficiente.

### 4. **Gestión de Proyectos Avanzada**

- **Calendario y planificación**: Agregar un **calendario de tareas** o una vista tipo **Gantt** para mostrar las fechas de inicio y finalización de las tareas y proyectos, y permitir a los usuarios planificar y ajustar sus plazos.
- **Priorización de tareas**: Permitir la asignación de **prioridades** a las tareas (baja, media, alta) y agregar funcionalidades para gestionar estos tickets de manera más eficiente.

### 5. **Notificaciones y Alertas**

- **Notificaciones en tiempo real**: Implementar **notificaciones push** o utilizar **WebSockets** para notificar a los usuarios sobre cambios importantes en los proyectos o tareas, como nuevos tickets asignados, cambios de estado, comentarios, etc.
- **Alertas y recordatorios**: Implementar un sistema de **alertas** para recordar a los usuarios los plazos próximos o tareas que están pendientes.

### 6. **Soporte Multi-idioma y Localización**

- **Soporte multilingüe**: Permitir que la aplicación soporte varios idiomas, utilizando bibliotecas como **Vue I18n**. Esto es especialmente útil si el sistema se va a usar en empresas internacionales.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactar a sanchezlopezadolfo@gmail.com.
