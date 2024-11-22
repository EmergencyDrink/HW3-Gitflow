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
