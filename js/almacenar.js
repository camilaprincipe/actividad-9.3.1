// con este addEventListener hacemos que el script espere a que la página se cargue para ejecutarse
document.addEventListener('DOMContentLoaded', function () {
    
    /* Traer los botones:
    una vez que se cargo la página, creamos una variable por cada uno de los elementos 
    importantes que queremos manipular del HTML para poder acceder a ellos */
    const itemInput = document.getElementById('item');
    const addButton = document.getElementById('agregar');
    const clearButton = document.getElementById('limpiar');
    const contenedor = document.getElementById('contenedor');

    /* Cargar elementos almacenados al inicio:
    en esta constante se traen los ítems almacenados previamente en el local storage, 
    si no hay nada se inicializa como un arreglo vacio */ 
    const storedItems = JSON.parse(localStorage.getItem('items')) || []; // esta es la forma de inicializar porque si esta vacío da error, evita el error
    
    /* Función para agregar elementos a la lista: 
    con esta función creamos los elementos que queremos agregar
    a la lista y los añadimos al elemento del HTML correspondiente(contenedor)*/
    function agregarALista (item){
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(item));
        contenedor.appendChild(li)
    };

    /* Agregar elementos del local storage: 
    con este forEach recorremos el local storage y usamos
    la función agregarALista para añadir los elementos que haya a la lista */
    storedItems.forEach(item => {
        agregarALista(item)
    });

    /* Agregar elementos ingresados: 
    con este segmento del código, obtenemos el valor del campo de entrada al hacer clic en el botón "Agregar",
    y lo limpiamos de espacios en blanco al principio y al final. Si el valor no está vacío, 
    agregamos el nuevo ítem al arreglo storedItems y lo almacenamos en el almacenamiento local.
    Usamos la función AgregarALista para añadir los nuevos ítems al contenedor.
    Finalmente, limpiamos el campo de entrada. */
    addButton.addEventListener('click', function () {
        const newItem = itemInput.value.trim(); // el trim saca los espacios del texto ingresado en itemInput
        if (newItem !== '') {
            // Agregar el nuevo ítem al almacenamiento local y a la vista
            storedItems.push(newItem);
            localStorage.setItem('items', JSON.stringify(storedItems));
            agregarALista(newItem);
            itemInput.value = ''; // Limpiar el campo de entrada
        }
    });

    /* Limpiar contenedor: 
    con este addEventListener, hacemos que cuando se registre un clic en el botón "Limpiar", 
    los ítems almacenados en el local storage sean eliminados
    y vaciamos el contenido del contenedor de la lista */
    clearButton.addEventListener('click', function () {
        // Eliminar el listado almacenado y actualizar la vista
        localStorage.removeItem('items');
        contenedor.innerHTML = '';
    });
});