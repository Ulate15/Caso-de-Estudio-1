


// Lista de estudiantes precargados

var estudiantes = [
  { nombre: "Maria",  apellidos: "Mora Perez",   nota: 90 },
  { nombre: "Pedro",  apellidos: "Sibaja Lopez",  nota: 60 },
  { nombre: "Marco",  apellidos: "Rojas Castro",  nota: 78 }
];

// Función que decide el color de la nota

function colorNota(nota) {
  if (nota >= 80) {
    return "nota-alta";   // retorna verde
  } else if (nota < 65) {
    return "nota-baja";   // retorna rojo
  } else {
    return "nota-media";  // retorna amarillo
  }
}

// Funcion que muestra la tabla de estudiantes

function mostrarTabla() {
  var tbody = document.getElementById("cuerpo-tabla");
  tbody.innerHTML = "";

  for (var i = 0; i < estudiantes.length; i++) {
    var fila = document.createElement("tr");
    var clase = colorNota(estudiantes[i].nota);

    fila.innerHTML = "<td>" + estudiantes[i].nombre + "</td>" +
                     "<td>" + estudiantes[i].apellidos + "</td>" +
                     "<td><span class='" + clase + "'>" + estudiantes[i].nota + "</span></td>" +
                     "<td><button onclick='eliminarEstudiante(" + i + ")' class='btn-eliminar'>Eliminar</button></td>";

    tbody.appendChild(fila);
  }
}

// Funcion que calcula y muestra el resumen

function mostrarResumen() {
  var mayor = estudiantes[0].nota;
  var menor = estudiantes[0].nota;
  var suma  = 0;

  for (var i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota > mayor) {
      mayor = estudiantes[i].nota;
    }
    if (estudiantes[i].nota < menor) {
      menor = estudiantes[i].nota;
    }
    suma = suma + estudiantes[i].nota;
  }

  var promedio = (suma / estudiantes.length).toFixed(1);

  document.getElementById("resumen-mayor").textContent    = mayor;
  document.getElementById("resumen-menor").textContent    = menor;
}

// Funcion que agrega un nuevo estudiante

function agregarEstudiante() {
  var nombre    = document.getElementById("nombre").value.trim();
  var apellidos = document.getElementById("apellidos").value.trim();
  var notaTexto = document.getElementById("nota").value.trim();
  var error     = document.getElementById("mensaje-error");

  var nota = Number(notaTexto);

  // Validación: campos vacíos o nota fuera de rango

  if (nombre == "" || apellidos == "" || notaTexto == "" || isNaN(nota) || nota < 0 || nota > 100) {
    error.classList.remove("oculto");
    return;
  }

  // Oculta el error si todo está bien 

  error.classList.add("oculto");

  // Crea el nuevo estudiante y lo agrega a la lista

  var nuevo = { nombre: nombre, apellidos: apellidos, nota: nota };
  estudiantes.push(nuevo);

  // Actualizamos la tabla y el resumen

  mostrarTabla();
  mostrarResumen();

  limpiarCampos();

}


function limpiarCampos() {

    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("nota").value = "";

}

function eliminarEstudiante(indice) {
  estudiantes.splice(indice, 1);
  mostrarTabla();
  mostrarResumen();
}

mostrarTabla();
mostrarResumen();