document.addEventListener('DOMContentLoaded', function() {
    const itemInput = document.getElementById('item');
    const addButton = document.getElementById('agregar');
    const clearButton = document.getElementById('limpiar');
    const contenedor = document.getElementById('contenedor');
  
    // Cargar elementos almacenados al inicio
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    storedItems.forEach(item => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.appendChild(document.createTextNode(item));
      contenedor.appendChild(li);
    });
  
    addButton.addEventListener('click', function() {
      const newItem = itemInput.value.trim();
      if (newItem !== '') {
        // Agregar el nuevo ítem al almacenamiento local y a la vista
        storedItems.push(newItem);
        localStorage.setItem('items', JSON.stringify(storedItems));
  
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newItem));
        contenedor.appendChild(li);
  
        itemInput.value = ''; // Limpiar el campo de entrada
      }
    });
  
    clearButton.addEventListener('click', function() {
      // Eliminar el listado almacenado y actualizar la vista
      localStorage.removeItem('items');
      contenedor.innerHTML = '';
    });
  });