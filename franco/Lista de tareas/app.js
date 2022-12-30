(function(){
    //variables
    let lista = document.getElementById('lista'),
        tareaInput = document.getElementById('tareaInput'),
        btn = document.getElementById('btn-agregar');
        
    //funciones
    let agregarTarea = function(){
        let tarea = tareaInput.value,
            nuevaTarea = document.createElement('li'),
            enlace = document.createElement('a'),
            contenido = document.createTextNode(tarea);
        
        if(tarea === ''){
            tareaInput.setAttribute('placeholder', 'Agregar una tarea valida')
            tareaInput.className = 'error';
            return false;
        }

        //agregamos contenido al enlace
        enlace.appendChild(contenido);
        //le establecemos enlace href
        enlace.setAttribute('href','#');
        //agregamos enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        //agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);

        tareaInput.value = '';

        for(i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener('click', function(){
                this.parentNode.removeChild(this)
            });
        }
    };

    let comprobarInput = function(){
        tareaInput.className = '';
        tareaInput.setAttribute('placeholder','Agrega tu tarea')
    };

    let eliminarTarea = function(){
        this.parentNode.removeChild(this)
    };
    
    //eventos

    //agregar tarea
    btn.addEventListener('click', agregarTarea);

    //comprobar input
    tareaInput.addEventListener('click', comprobarInput);

    //borrando elementos de la lista
    for(i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener('click', eliminarTarea);
    }
}());
