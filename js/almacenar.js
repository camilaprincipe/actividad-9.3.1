// con este addeventlistener hacemos que el script espere a que la pagina se cargue para ejecutarse
document.addEventListener('DOMContentLoaded', function () {
    /* una vez que se cargo la pagina, 
    creamos una variable por cada uno de los elementos 
    importantes que queremos manipular del html  para poder acceder a ellos */
    const itemInput = document.getElementById('item');
    const addButton = document.getElementById('agregar');
    const clearButton = document.getElementById('limpiar');
    const contenedor = document.getElementById('contenedor');


    // Cargar elementos almacenados al inicio 
    // en esta constante se traen los items almacenados previamente en el local storage, si no hay se inicializa 
    // como un arreglo vacio
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    // con este foreach recorremos el array de items y creamos un 
    // li dentro del contenedor de la lista para mostrar cada uno de ellos
    storedItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(item));
        contenedor.appendChild(li);
    });

    /* Cuando se hace clic en el botón "Agregar", obtenemos el valor del campo de entrada
    y lo limpiamos de espacios en blanco al principio y al final. Si el valor no está vacío, 
    agregamos el nuevo ítem al arreglo storedItems y lo almacenamos en el almacenamiento local.
    También creamos un elemento <li> para el nuevo ítem y lo agregamos al contenedor de la lista. 
    Finalmente, limpiamos el campo de entrada. */
    addButton.addEventListener('click', function () {
        const newItem = itemInput.value.trim(); // el trim saca los espacios del texto ingresado en itemInput
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

    /* Cuando se hace clic en el botón "Limpiar", eliminamos los ítems almacenados del almacenamiento
     local y vaciamos el contenido del contenedor de la lista */
    clearButton.addEventListener('click', function () {
        // Eliminar el listado almacenado y actualizar la vista
        localStorage.removeItem('items');
        contenedor.innerHTML = '';
    });
});