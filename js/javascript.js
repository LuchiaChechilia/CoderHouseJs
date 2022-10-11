let nombreAvtividad1 = 'Pilates'
let vacantesActividad1 = 20

let nombreActividad2 = 'Funcional'
let vacantesActividad2 = 15

let nombreActividad3 = 'Pesas'
let vacantesActividad3 = 30

function Actividad(nombre, cantidadInscriptos, vacantes){
    this.nombre = nombre;
    this.cantidadInscriptos = cantidadInscriptos;
    this.vacantes = vacantes;
    this.restarVacantes = function(cantidad){
        this.vacantes -= cantidadInscriptos
    }
}

let actividad1 = new Actividad("Pilates", 10, 20)
let actividad2 = new Actividad("Funcional", 5, 15)
let actividad3 = new Actividad("Pesas", 4, 30)

let cantidadInscriptos = parseInt(prompt("Cuantas personas desea inscribir:"))
for(let i = 0 ; i < cantidadInscriptos; i = i + 1){
    let actividadInscripcion = prompt("ingrse la actividad que desea inscribirse: \n - Pilates\n - Funcional\n - Pesas")

    if(actividadInscripcion == 'Pilates'){
        let cantidadActividadInscripcion = prompt("Ingrese la cantidad de personas a"  + actividad1.nombre + "que esta por inscribir:")
        calculoVacantes(cantidadActividadInscripcion , actividad1.vacantes)
        actividad1.restarVacantes(CantidadActividadInscripcion)
    }
    else if(actividadInscripcion == 'Funcional'){
        let cantidadActividadInscripcion = prompt("Ingrese la cantidad de personas a"  + actividad2.nombre + "que esta por inscribir:")
        calculoVacantes(cantidadActividadInscripcion , actividad2.vacantes)
        actividad2.restarVacantes(CantidadActividadInscripcion)
    }
    else if(actividadInscripcion == 'Pesas'){
        let cantidadActividadInscripcion = prompt("Ingrese la cantidad de personas a"  + actividad3.nombre + "que esta por inscribir:")
        calculoVacantes(cantidadActividadInscripcion , actividad3.vacantes)
        actividad3.restarVacantes(CantidadActividadInscripcion)
    }
    else{
        alert("Esa actividad no se encuentra disponible, por favor selecciona otra disponible")
    }
}

let input = document.querySelector('.input');
let result = document.querySelector('#result');
input.addEventListener('change', function () {
    result.textContent =this.value;
});