let tareas = [];

function agregarTarea() {
  const input = document.getElementById("nuevaTarea");
  const texto = input.value.trim();
  const mensaje = document.getElementById("mensaje");

  if (texto === "") {
    mensaje.textContent = "⚠️ No puedes agregar una tarea vacía.";
    return;
  }

  mensaje.textContent = "";

  const nuevaTarea = {
    id: Math.floor(Math.random() * 10000),
    texto: texto,
    fecha: new Date().toLocaleString()
  };

  tareas.push(nuevaTarea);
  input.value = "";

  mostrarTareas();
}

function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
  mostrarTareas();
}

function mostrarTareas() {
  const lista = document.getElementById("listaTareas");
  lista.innerHTML = "";

  tareas.forEach(t => {
    const li = document.createElement("li");
    li.textContent = `${t.texto} (📅 ${t.fecha})`;
    li.onclick = () => eliminarTarea(t.id);
    lista.appendChild(li);
  });
}
