const form = document.getElementById('alumnoForm');
const tabla = document.getElementById('TablaAlumnos').querySelector('tbody')
let filaEnEdicion = null;
const btnAgregar = document.getElementById('btnAgregar');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const matricula = document.getElementById('matricula').value;
    const nota = document.getElementById('nota').value;

    // Validaciones
    if (!nombre || !apellido || !matricula || !nota) {
        alert('Por favor, completa todos los campos');
        return;
    }
        
    if (filaEnEdicion) {
        // Actualizamos la fila existente
        filaEnEdicion.cells[0].textContent = nombre;
        filaEnEdicion.cells[1].textContent = apellido;
        filaEnEdicion.cells[2].textContent = matricula;
        filaEnEdicion.cells[3].textContent = nota;
        finalizarEdicion();
    } else{
     
    //Agregar
    const fila = document.createElement('tr');
    fila.innerHTML = `
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${matricula}</td>
            <td>${nota}</td>
            <td><button class = "Delete-btn btn-danger">Delete</button>
            <button class = "Editar-btn btn-primary">Editar</button></td>`;
        tabla.appendChild(fila)
    }
    form.reset(); 
});
    //Eliminar buscando por selector
    tabla.addEventListener('click', (event) => {
        const boton = event.target;
        if (event.target.classList.contains('Delete-btn')) {
            const fila = event.target.closest('tr'); 
            fila.remove(); 
            
            //boton para el editar
        } else if (boton.classList.contains('Editar-btn')) {
            iniciarEdicion(boton.closest('tr'));
        }
    });

    // Función para editar
    function iniciarEdicion(fila) {
        filaEnEdicion = fila; 
        document.getElementById('nombre').value = fila.cells[0].textContent;
        document.getElementById('apellido').value = fila.cells[1].textContent;
        document.getElementById('matricula').value = fila.cells[2].textContent;
        document.getElementById('nota').value = fila.cells[3].textContent;
        btnAgregar.textContent = 'Guardar Cambios'; 
    }
    
    function finalizarEdicion() {
        filaEnEdicion = null; 
        btnAgregar.textContent = 'Agregar Alumno'; 
        form.reset(); 
    }