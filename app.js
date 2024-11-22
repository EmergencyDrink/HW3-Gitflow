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