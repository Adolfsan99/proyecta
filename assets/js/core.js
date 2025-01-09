const { createApp, ref, computed } = Vue;
const { createStore } = Vuex;
const cargarDatosLocales = () => {
  const datosGuardados = localStorage.getItem("proyectaData");
  const datosIniciales = {
    empresas: [
      {
        id: 1,
        nombre: "Soluciones Tecnológicas",
        nit: "123456789",
        telefono: "555-0100",
        direccion: "Calle Principal 123",
        email: "contacto@solucionestec.com",
        proyectos: [
          {
            id: 1,
            nombre: "Sistema de Gestión de Inventarios",
            historiasUsuario: [
              {
                id: 1,
                titulo:
                  "Como administrador, quiero poder agregar, editar y eliminar productos para mantener actualizado mi inventario.",
                tickets: [
                  {
                    id: 1,
                    titulo: "Crear la interfaz para el registro de productos.",
                    estado: "Finalizado",
                    comentarios: [],
                  },
                  {
                    id: 2,
                    titulo:
                      "Implementar la lógica para la edición y eliminación de productos.",
                    estado: "Activo",
                    comentarios: [],
                  },
                ],
              },
              {
                id: 2,
                titulo:
                  "Como usuario, quiero generar reportes de inventario para conocer el estado actual de los productos.",
                tickets: [
                  {
                    id: 3,
                    titulo:
                      "Diseñar la funcionalidad para generar reportes en PDF.",
                    estado: "Finalizado",
                    comentarios: [],
                  },
                  {
                    id: 4,
                    titulo:
                      "Implementar filtros avanzados para los reportes (por fecha, categoría, etc.).",
                    estado: "Activo",
                    comentarios: [],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            nombre: "Plataforma de Gestión de Clientes (CRM)",
            historiasUsuario: [
              {
                id: 3,
                titulo:
                  "Como ejecutivo de ventas, quiero registrar datos de los clientes para realizar un seguimiento efectivo de cada cuenta.",
                tickets: [
                  {
                    id: 5,
                    titulo: "Crear un formulario para el registro de clientes.",
                    estado: "Finalizado",
                    comentarios: [],
                  },
                  {
                    id: 6,
                    titulo:
                      "Implementar la funcionalidad de búsqueda y actualización de datos de clientes.",
                    estado: "Activo",
                    comentarios: [],
                  },
                ],
              },
              {
                id: 4,
                titulo:
                  "Como gerente, quiero obtener estadísticas sobre la interacción con los clientes para tomar decisiones estratégicas.",
                tickets: [
                  {
                    id: 7,
                    titulo:
                      "Implementar un dashboard con gráficas sobre métricas clave.",
                    estado: "Finalizado",
                    comentarios: [],
                  },
                  {
                    id: 8,
                    titulo:
                      "Desarrollar la funcionalidad para exportar datos en formato CSV.",
                    estado: "Activo",
                    comentarios: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: "Innovación Digital",
        nit: "987654321",
        telefono: "555-0200",
        direccion: "Avenida Tecnológica 456",
        email: "info@innovaciondigital.com",
        proyectos: [
          {
            id: 3,
            nombre: "Plataforma de Automatización de Procesos",
            historiasUsuario: [
              {
                id: 5,
                titulo:
                  "Como gerente de operaciones, quiero automatizar procesos repetitivos para aumentar la eficiencia de mi equipo.",
                tickets: [
                  {
                    id: 9,
                    titulo:
                      "Diseñar un sistema para definir flujos de trabajo.",
                    estado: "Finalizado",
                    comentarios: [],
                  },
                  {
                    id: 10,
                    titulo:
                      "Implementar notificaciones automáticas para tareas pendientes.",
                    estado: "Activo",
                    comentarios: [],
                  },
                ],
              },
              {
                id: 6,
                titulo:
                  "Como usuario, quiero visualizar el estado actual de cada proceso automatizado para mantener el control.",
                tickets: [
                  {
                    id: 11,
                    titulo:
                      "Crear una vista de tablero que muestre el progreso de cada proceso.",
                    estado: "Finalizado",
                    comentarios: [],
                  },
                  {
                    id: 12,
                    titulo:
                      "Implementar alertas para procesos detenidos o con errores.",
                    estado: "Activo",
                    comentarios: [],
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            nombre: "Aplicación de Realidad Aumentada para Capacitación",
            historiasUsuario: [
              {
                id: 7,
                titulo:
                  "Como empleado, quiero realizar capacitaciones interactivas mediante realidad aumentada para mejorar mi experiencia de aprendizaje.",
                tickets: [
                  {
                    id: 13,
                    titulo:
                      "Diseñar modelos 3D básicos para las capacitaciones.",
                    estado: "Finalizado",
                    comentarios: [],
                  },
                  {
                    id: 14,
                    titulo:
                      "Implementar la funcionalidad de interacción en la aplicación móvil.",
                    estado: "Activo",
                    comentarios: [],
                  },
                ],
              },
              {
                id: 8,
                titulo:
                  "Como gerente de capacitación, quiero monitorear el desempeño de los empleados en las sesiones de realidad aumentada para medir su progreso.",
                tickets: [
                  {
                    id: 15,
                    titulo:
                      "Crear un sistema de seguimiento de métricas de desempeño.",
                    estado: "Finalizado",
                    comentarios: [],
                  },
                  {
                    id: 16,
                    titulo:
                      "Implementar reportes automáticos basados en el desempeño individual.",
                    estado: "Activo",
                    comentarios: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    usuarios: [
      {
        id: 1,
        nombre: "SuperUsuario",
        email: "superusuario@ejemplo.com",
        contrasena: "Proyecto123",
        empresaId: null,
        proyectosPersonales: [
          {
            id: 5,
            nombre: "Portafolio",
            historiasUsuario: [
              {
                id: 9,
                titulo:
                  "Como diseñador gráfico, quiero tener una galería de proyectos bien organizada para mostrar mi trabajo a posibles clientes.",
                tickets: [
                  {
                    id: 17,
                    titulo: "Diseñar la estructura visual del portafolio.",
                    estado: "Finalizado",
                    comentarios: [],
                  },
                  {
                    id: 18,
                    titulo:
                      "Implementar una funcionalidad para filtrar proyectos por categoría.",
                    estado: "Activo",
                    comentarios: [],
                  },
                ],
              },
              {
                id: 10,
                titulo:
                  "Como usuario del portafolio, quiero poder acceder a información detallada de cada proyecto al hacer clic en él.",
                tickets: [
                  {
                    id: 19,
                    titulo: "Crear la página de detalle para los proyectos.",
                    estado: "Finalizado",
                    comentarios: [],
                  },
                  {
                    id: 20,
                    titulo:
                      "Implementar una navegación fluida entre la lista de proyectos y el detalle.",
                    estado: "Activo",
                    comentarios: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: "SuperUsuario",
        email: "superusuario@ejemplo.com",
        contrasena: "Proyecto123",
        empresaId: 1,
      },
      {
        id: 3,
        nombre: "SuperUsuario",
        email: "superusuario@ejemplo.com",
        contrasena: "Proyecto123",
        empresaId: 2,
      },
    ],
  };
  if (datosGuardados) {
    return JSON.parse(datosGuardados);
  }
  return datosIniciales;
};
const tienda = createStore({
  state() {
    return cargarDatosLocales();
  },
  mutations: {
    establecerUsuarioActual(state, usuario) {
      state.usuarioActual = usuario;
      localStorage.setItem("proyectaData", JSON.stringify(state));
    },
    agregarUsuario(state, usuario) {
      state.usuarios.push(usuario);
      localStorage.setItem("proyectaData", JSON.stringify(state));
    },
    actualizarEstado(state) {
      localStorage.setItem("proyectaData", JSON.stringify(state));
    },
  },
  actions: {
    iniciarSesion({ commit, state }, credenciales) {
      const usuarios = state.usuarios.filter(
        (u) =>
          u.email === credenciales.email &&
          u.contrasena === credenciales.contrasena &&
          u.empresaId === (credenciales.empresaId || null)
      );
      if (usuarios.length > 0) {
        const usuario = usuarios[0];
        commit("establecerUsuarioActual", usuario);
        return true;
      }
      return false;
    },
    registrar({ commit }, datosUsuario) {
      const usuario = {
        id: Date.now(),
        ...datosUsuario,
      };
      commit("agregarUsuario", usuario);
      commit("establecerUsuarioActual", usuario);
    },
  },
});
const validarEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
const validarContrasena = (contrasena) => {
  return (
    contrasena.length >= 8 &&
    /[A-Z]/.test(contrasena) &&
    /[a-z]/.test(contrasena) &&
    /[0-9]/.test(contrasena)
  );
};
const app = createApp({
  setup() {
    const mostrarFormularioLogin = ref(false);
    const mostrarFormularioRegistro = ref(false);
    const mostrarConfirmacion = ref(false);
    const formularioLogin = ref({
      email: "",
      contrasena: "",
      empresaId: "",
    });
    const formularioRegistro = ref({
      nombre: "",
      email: "",
      contrasena: "",
      empresaId: "",
    });
    const confirmacionContrasena = ref("");
    const elementoAEliminar = ref(null);
    const empresas = computed(() => tienda.state.empresas);
    const usuarioActual = computed(() => {
      const user = tienda.state.usuarioActual;
      if (user) {
        document.body.classList.add("logged-in");
      } else {
        document.body.classList.remove("logged-in");
      }
      return user;
    });
    const proyectosUsuario = computed(() => {
      if (!usuarioActual.value) return [];
      if (!usuarioActual.value.empresaId) {
        return usuarioActual.value.proyectosPersonales || [];
      }
      const empresaUsuario = empresas.value.find(
        (e) => e.id === usuarioActual.value.empresaId
      );
      return empresaUsuario ? empresaUsuario.proyectos : [];
    });
    const iniciarSesion = async () => {
      if (!validarEmail(formularioLogin.value.email)) {
        alert("Por favor ingrese un email válido");
        return;
      }
      const empresaId = formularioLogin.value.empresaId || null;
      const usuarios = tienda.state.usuarios.filter(
        (u) =>
          u.email === formularioLogin.value.email && u.empresaId === empresaId
      );
      if (usuarios.length === 0) {
        alert("Usuario no encontrado en esta empresa");
        return;
      }
      const exito = await tienda.dispatch(
        "iniciarSesion",
        formularioLogin.value
      );
      if (exito) {
        mostrarFormularioLogin.value = false;
        formularioLogin.value = {
          email: "",
          contrasena: "",
          empresaId: "",
        };
      } else {
        alert("Credenciales inválidas");
      }
    };
    const registrar = async () => {
      if (!validarEmail(formularioRegistro.value.email)) {
        alert("Por favor ingrese un email válido");
        return;
      }
      if (!validarContrasena(formularioRegistro.value.contrasena)) {
        alert(
          "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número. Ejemplo: Proyecto123"
        );
        return;
      }
      const empresaId =
        formularioRegistro.value.empresaId === "null"
          ? null
          : formularioRegistro.value.empresaId;
      const usuarioExistente = tienda.state.usuarios.find(
        (u) =>
          u.email === formularioRegistro.value.email &&
          u.empresaId === empresaId
      );
      if (usuarioExistente) {
        alert("Ya tiene una cuenta registrada con este email en esta empresa");
        return;
      }
      const datosUsuario = {
        ...formularioRegistro.value,
        empresaId: empresaId,
        proyectosPersonales: [],
      };
      await tienda.dispatch("registrar", datosUsuario);
      mostrarFormularioRegistro.value = false;
      formularioRegistro.value = {
        nombre: "",
        email: "",
        contrasena: "",
        empresaId: "",
      };
    };
    const cerrarSesion = () => {
      if (confirm("¿Está seguro que desea cerrar sesión?")) {
        tienda.commit("establecerUsuarioActual", null);
      }
    };
    const crearHistoriaUsuario = (proyectoId) => {
      const titulo = prompt("Ingrese el título de la historia de usuario:");
      if (titulo) {
        const proyecto = proyectosUsuario.value.find(
          (p) => p.id === proyectoId
        );
        if (proyecto) {
          proyecto.historiasUsuario.push({
            id: Date.now(),
            titulo,
            tickets: [],
          });
          tienda.commit("actualizarEstado");
        }
      }
    };
    const crearTicket = (historiaId) => {
      const titulo = prompt("Ingrese el título del ticket:");
      if (titulo) {
        proyectosUsuario.value.forEach((proyecto) => {
          proyecto.historiasUsuario.forEach((historia) => {
            if (historia.id === historiaId) {
              historia.tickets.push({
                id: Date.now(),
                titulo,
                estado: "Activo",
                comentarios: [],
              });
            }
          });
        });
        tienda.commit("actualizarEstado");
      }
    };
    const eliminarHistoria = (proyectoId, historiaId) => {
      if (confirm("¿Deseas eliminar esta historia de usuario?")) {
        const proyecto = proyectosUsuario.value.find(
          (p) => p.id === proyectoId
        );
        if (proyecto) {
          proyecto.historiasUsuario = proyecto.historiasUsuario.filter(
            (h) => h.id !== historiaId
          );
          tienda.commit("actualizarEstado");
        }
      }
    };
    const eliminarTicket = (proyectoId, historiaId, ticketId) => {
      if (confirm("¿Deseas eliminar este ticket?")) {
        const proyecto = proyectosUsuario.value.find(
          (p) => p.id === proyectoId
        );
        if (proyecto) {
          const historia = proyecto.historiasUsuario.find(
            (h) => h.id === historiaId
          );
          if (historia) {
            historia.tickets = historia.tickets.filter(
              (t) => t.id !== ticketId
            );
            tienda.commit("actualizarEstado");
          }
        }
      }
    };
    const eliminarProyecto = (proyectoId) => {
      if (confirm("¿Deseas eliminar este proyecto?")) {
        if (!usuarioActual.value.empresaId) {
          usuarioActual.value.proyectosPersonales =
            usuarioActual.value.proyectosPersonales.filter(
              (p) => p.id !== proyectoId
            );
        } else {
          const empresaUsuario = empresas.value.find(
            (e) => e.id === usuarioActual.value.empresaId
          );
          if (empresaUsuario) {
            empresaUsuario.proyectos = empresaUsuario.proyectos.filter(
              (p) => p.id !== proyectoId
            );
          }
        }
        tienda.commit("actualizarEstado");
      }
    };
    const confirmarEliminacion = () => {
      if (confirmacionContrasena.value === usuarioActual.value.contrasena) {
        if (elementoAEliminar.value.tipo === "historia") {
          const proyecto = proyectosUsuario.value.find(
            (p) => p.id === elementoAEliminar.value.proyectoId
          );
          if (proyecto) {
            proyecto.historiasUsuario = proyecto.historiasUsuario.filter(
              (h) => h.id !== elementoAEliminar.value.historiaId
            );
          }
        } else if (elementoAEliminar.value.tipo === "ticket") {
          const proyecto = proyectosUsuario.value.find(
            (p) => p.id === elementoAEliminar.value.proyectoId
          );
          if (proyecto) {
            const historia = proyecto.historiasUsuario.find(
              (h) => h.id === elementoAEliminar.value.historiaId
            );
            if (historia) {
              historia.tickets = historia.tickets.filter(
                (t) => t.id !== elementoAEliminar.value.ticketId
              );
            }
          }
        } else if (elementoAEliminar.value.tipo === "proyecto") {
          const empresaUsuario = empresas.value.find(
            (e) => e.id === usuarioActual.value.empresaId
          );
          if (empresaUsuario) {
            empresaUsuario.proyectos = empresaUsuario.proyectos.filter(
              (p) => p.id !== elementoAEliminar.value.proyectoId
            );
          }
        }
        tienda.commit("actualizarEstado");
        mostrarConfirmacion.value = false;
        confirmacionContrasena.value = "";
        elementoAEliminar.value = null;
      } else {
        alert("Contraseña incorrecta");
      }
    };
    const cancelarConfirmacion = () => {
      mostrarConfirmacion.value = false;
      confirmacionContrasena.value = "";
      elementoAEliminar.value = null;
    };
    const crearProyecto = () => {
      const nombre = prompt("Ingrese el nombre del proyecto:");
      if (nombre) {
        if (nombre.toLowerCase() === "resetdata") {
          if (
            confirm(
              "¿Está seguro que desea restablecer todos los datos a su estado inicial?"
            )
          ) {
            localStorage.removeItem("proyectaData");
            window.location.reload();
            return;
          }
          return;
        }
        if (!usuarioActual.value.empresaId) {
          if (!usuarioActual.value.proyectosPersonales) {
            usuarioActual.value.proyectosPersonales = [];
          }
          usuarioActual.value.proyectosPersonales.push({
            id: Date.now(),
            nombre,
            historiasUsuario: [],
          });
        } else {
          const empresaUsuario = empresas.value.find(
            (e) => e.id === usuarioActual.value.empresaId
          );
          if (empresaUsuario) {
            empresaUsuario.proyectos.push({
              id: Date.now(),
              nombre,
              historiasUsuario: [],
            });
          }
        }
        tienda.commit("actualizarEstado");
      }
    };
    const puedeCrearProyectos = computed(() => {
      return usuarioActual.value !== null;
    });
    const editarProyecto = (proyecto) => {
      const nuevoNombre = prompt(
        "Ingrese el nuevo nombre del proyecto:",
        proyecto.nombre
      );
      if (nuevoNombre && nuevoNombre !== proyecto.nombre) {
        proyecto.nombre = nuevoNombre;
        tienda.commit("actualizarEstado");
      }
    };
    const editarHistoria = (proyectoId, historia) => {
      const nuevoTitulo = prompt(
        "Ingrese el nuevo título de la historia:",
        historia.titulo
      );
      if (nuevoTitulo && nuevoTitulo !== historia.titulo) {
        historia.titulo = nuevoTitulo;
        tienda.commit("actualizarEstado");
      }
    };
    const editarTicket = (proyectoId, historiaId, ticket) => {
      const nuevoTitulo = prompt(
        "Ingrese el nuevo título del ticket:",
        ticket.titulo
      );
      if (nuevoTitulo && nuevoTitulo !== ticket.titulo) {
        ticket.titulo = nuevoTitulo;
        tienda.commit("actualizarEstado");
      }
    };
    return {
      mostrarFormularioLogin,
      mostrarFormularioRegistro,
      mostrarConfirmacion,
      formularioLogin,
      formularioRegistro,
      confirmacionContrasena,
      empresas,
      usuarioActual,
      proyectosUsuario,
      iniciarSesion,
      registrar,
      cerrarSesion,
      crearHistoriaUsuario,
      crearTicket,
      eliminarHistoria,
      eliminarTicket,
      eliminarProyecto,
      confirmarEliminacion,
      cancelarConfirmacion,
      crearProyecto,
      puedeCrearProyectos,
      editarProyecto,
      editarHistoria,
      editarTicket,
    };
  },
});
app.use(tienda);
app.mount("#app");
