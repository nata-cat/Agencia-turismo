function esconderTitulo(){

    let textoOverlay = document.getElementById('cardTour__overlay');
    textoOverlay.classList.add('d-none')

    let fondoImagen = document.getElementById('cardTour__img');
    fondoImagen.style.opacity = 1;

}

function revelarTitulo(){

    let textoOverlay = document.getElementById('cardTour__overlay');
    textoOverlay.classList.remove('d-none');

    let fondoImagen = document.getElementById('cardTour__img');
    fondoImagen.style.opacity = 0.9;
}


    let laFoto = document.getElementById('cardTour__img');
    let elTitulo = document.getElementById('cardTour__tipo');
    let laUbicacion = document.getElementById('cardTour__Ubicacion');
    let laDescripcion = document.getElementById('cardTour__description');

    


function cargaElementos(){

    //Buscamos el selector por id
    let selectOpciones = document.getElementById('opcionesFormulario');

    //Le agregamos un add event listener que reconozca cuando se cambia la opción
    selectOpciones.addEventListener('change', function() {
    
        //Reconocemos la opcion seleccionada
        let opcionSeleccionada = selectOpciones.value;
        console.log('Opción seleccionada:', opcionSeleccionada); //Consolelog para corroborar
    
        //Con if le diremos que hacer en cada caso
        if(opcionSeleccionada == 1){
     
        let elTitulo = document.getElementById('cardTour__tipo');
        elTitulo.innerText = 'TREKKING';

        let laFoto = document.getElementById('cardTour__img');
        laFoto.src = 'assets/img/trekking.jpeg';

        let laUbicacion = document.getElementById('cardTour__Ubicacion');
        laUbicacion.innerText = 'Volcán Villarica';

        let laDescripcion = document.getElementById('cardTour__description');
        laDescripcion.innerText = 'Descripcion tour trekking, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la costa de la semántica, un gran océano de lenguas.';
        
    }
    else if(opcionSeleccionada == 2){

        let elTitulo = document.getElementById('cardTour__tipo');
        elTitulo.innerHTML = 'NATACIÓN';

        let laFoto = document.getElementById('cardTour__img');
        laFoto.src = 'assets/img/natacion.jpeg';

        let laUbicacion = document.getElementById('cardTour__Ubicacion');
        laUbicacion.innerHTML = 'Lago Llanquihue';

        let laDescripcion = document.getElementById('cardTour__description');
        laDescripcion.innerHTML = 'Descripción tour de natación, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la costa de la semántica, un gran océano de lenguas.';
    }
    else if(opcionSeleccionada == 3){

        let elTitulo = document.getElementById('cardTour__tipo');
        elTitulo.innerHTML = 'FERRY';

        let laFoto = document.getElementById('cardTour__img');
        laFoto.src = 'assets/img/foto-ferry.jpeg';

        let laUbicacion = document.getElementById('cardTour__Ubicacion');
        laUbicacion.innerHTML = 'Lago Llanquihue';

        let laDescripcion = document.getElementById('cardTour__description');
        laDescripcion.innerHTML = 'Descripcion tour ferry, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la costa de la semántica, un gran océano de lenguas.';
    }
    
    
});

    
}

