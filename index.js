"use strict";

/* TODO */

let ingreso = 0;

function ingresar() {
    ingreso = parseInt(prompt("Ingrese un numero"));
}

function mostrar() {
    console.log(ingreso)
    if (ingreso == 0) {
        console.info("El numero es 0");
    } else if (ingreso % 2){
        console.info("El numero es impar");
    } else {
        console.info("El numero es par");
    }
}



/*
Hay dos botones:

- El primero dice “Ingresar un número”, que al hacerle click una función debe ingresar un número entero 
- El segundo dice “Mostrar paridad del número”, que al hacerle click una función debe mostrar mediante console.info si el número es par, impar o cero
- Se deben validar los valores ingresados
- Se debe considerar la posibilidad de que el usuario quiera ver antes de ingresar, realizar lavalidación*/