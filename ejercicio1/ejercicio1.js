'use strict'


function Estudiante(nombre, correo, promedio){
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;

    this.validarPromedio = function(){
       if (this.promedio >= 70){
           return ("Aprobado")
       } else {
           return ("Reprobado")
       } 
    }

    this.obtenerUsuario = function(){
        let email = this.correo.indexOf("@");
        let username = this.correo.substring(0, email);
        return (username); 
    }
}

let estudiante1 = new Estudiante(
    "Andres",
    "japeralta.2@sudamericano.edu.ec",
    "80"
)

alert(estudiante1.validarPromedio())
alert(estudiante1.obtenerUsuario())