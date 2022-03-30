
/* Monasterio Gaston

Codigo realizado en JavaScript y node.js

Extenciones de Visual estudio Code usadas

-Code Runner (Para ejecutar el programa en visual studio y no usar el navegador requiere de node.js instalado)*/


/* Consigna */

/*Se cuenta con 2 listas donde cada elemento tiene 2 atributos/campos (ID, Nombre) se deben comparar los elementos de ambas listas y finalmente devolver 4 listados:
1.	Listado de coincidencias.
2.	Listado de elementos presentes en la Lista1 y faltantes de la Lista2.
3.	Listado de elementos presentes en la Lista2 y faltantes de la Lista1.
4.	Elementos en conflicto, es decir, elementos que existen en ambas listas, pero con distintos valores.
 */



let primeraLista = [
    {ID:1,nombre:"apio"},
    {ID:2,nombre:"batata"},
    {ID:3,nombre:"brocoli"},
    {ID:4,nombre:"cebolla"},
    {ID:5,nombre:"esparrago"},
    {ID:6,nombre:"lechuga"},
    {ID:7,nombre:"choclo"},
    {ID:8,nombre:"papa"},
    {ID:9,nombre:"pepino"},
    {ID:10,nombre:"pimiento"}
]

let segundaLista = [
    {ID:1,nombre:"apio"},
    {ID:2,nombre:"batata"},
    {ID:3,nombre:"brocoli"},
    {ID:4,nombre:"zanahoria"},
    {ID:5,nombre:"tomate"},
    {ID:6,nombre:"arbeja"},
    {ID:7,nombre:"papa"},
    {ID:8,nombre:"choclo"},
    {ID:9,nombre:"pepino"},
    {ID:10,nombre:"pimiento"}
]


main()



function main(){

    listaDeCoincidencias(primeraLista, segundaLista)

    faltantesLista2(primeraLista, segundaLista)

    faltantesLista1(primeraLista, segundaLista)

    elementosConflicto(primeraLista, segundaLista)

}






/*----------------lista de coincidencias--------- */
/*Para conocer la lista de coincidencias se recorrera una de las listas y en caso de encontrar una coincidencia se agregara a un nuevo array el cual va a contener todas las coincidencias y al finalizar la iteracion se imprimira por pantalla al final */

function listaDeCoincidencias(primeraLista, segundaLista){

    let coincidencias = [] //nuevo array para guardar las coincidencias

    let contadorCoincidencia = 0 //contador para saber el indice donde se va a guardar en la nueva lista(declarado e incializado)

   

    /*iteramos la lista 1 y la comparamos con la lista 2 */

    for (let i = 0; i < primeraLista.length; i++) {
        
        /*comparamos los valores de ambas listas */
        if ((primeraLista[i].ID && primeraLista[i].nombre) === ((segundaLista[i].ID && segundaLista[i].nombre))) {

            /*si el valor de lo que hay en lista 1 y lista 2 son iguales */
            //agregamos en la posicion (inicialmente 0) del array de coincidencias el valor de las listas coincidentes

            coincidencias[ contadorCoincidencia ] = {ID: primeraLista[i].ID, nombre: primeraLista[i].nombre}

            //aumentamos en uno el valor del contador para guardar el valor de los objetos coincidentes
            contadorCoincidencia++
        }
        
        
    }

    //procedemos a imprimir los valores guardaos en el array de coincidencias

    //si el contador de coincidencias queda en 0 significaca que no hay ninguna coincidencia en alas listas
    if (contadorCoincidencia != 0) {
        
        console.log(
            "----------------------- Listados de coincidencias -------------------------- \n\n")
        // iteraremos con el valor del contador que guarda la cantidad de coincidencias que hay
        for (let j = 0; j < contadorCoincidencia; j++) {

            console.log("Nombre:"+ " "+ coincidencias[j].nombre + " "+" ||"+ "ID: "+ coincidencias[j].ID)
            
        }
        // en cas de que no halla ninguna coincidencia se procedera a mostrar un mensaje por la pantalla
    }else{
        console.log(
            "------------- Listados de coincidencias ---------------------\n\n")
        console.log ("No hay ninguna coincidencia")
    }


}











//--------------Listado de elementos presentes en la Lista1 y faltantes de la Lista2------------------

/*Para realizar este inciso se realizara una busqueda secuencial de los elementos del array 1 en el array 2. cuando se encuentre un item que se considere faltante sera colocado en un nuevo array para posteriormente ser combinado con el array 1 formando el array deseado */

function faltantesLista2(primeraLista, segundaLista){

    let nuevaLista=[] //lista en la que se convinaran los elementos del array 1 con los faltantes del 2

    let contadorElementos = 0 //contador de elementos que sobran

    let resultadoBusqueda = false // booleano que indica si se encontro el item buscado

    let exitenFaltantes = false //bander para saber la existencia de faltantes

    //copiamos la lista 1 a la nueva lista en la cual se agregaran los sobrantes
    for (let i = 0; i < primeraLista.length; i++) {
        nuevaLista[i] = primeraLista[i]
        
    }

    // busqueda binaria
    //hacemos una busqueda de los items de la primer lista sobre la segunda
    for (let i = 0; i < segundaLista.length; i++) {

        let j = 0


        while ( resultadoBusqueda == false && j < primeraLista.length) {
            
            //se evalua el primer iten de la lista con todos elementos de la segunda, luego el segundo item dela lista con todos items de la segunda lista....
            if (segundaLista[i].nombre == primeraLista[j].nombre) {

                resultadoBusqueda = true

            }
            j++
        
        }
        // si no hay ninguna coincidencia se considera que hay un item sobrante y se procede a ser agregado en la nueva lista
        //contador de elementos hace referencia a la cantiad de elementos resates que se encontraron
        if (resultadoBusqueda == false) {
            //se agrega el objeto a la lista
            nuevaLista[primeraLista.length + contadorElementos ] = {ID:(primeraLista.length+ contadorElementos +1), nombre: segundaLista[i].nombre}
            
            contadorElementos++

            exitenFaltantes = true

        }

        resultadoBusqueda = false
        
    }

    //si la bandera da la habilitacion se mostrara lo siguiente
    if (exitenFaltantes == true) {

        console.log(
            "\n\n--------------Listado de elementos presentes en la Lista1 y faltantes de la Lista2------------------ \n\n"
        )
        
        // se muestran los elementos sobrantes que se van a agregar a la lista
        console.log(
            "\n------ Faltantes lista 2 ----- \n"
        )
        
        for (let i = nuevaLista.length - contadorElementos ; i < nuevaLista.length; i++) {
        
            console.log("ID:"+ " "+ nuevaLista[i].ID + " "+" || "+ "Nombre: "+ nuevaLista[i].nombre)
        }
        
        //muestra la lista ya combinada
        console.log(
            "\n------ Lista 1 mas los faltantes lista 2 ----- \n"
        )
        for (let i = 0; i < nuevaLista.length; i++) {
        
            console.log("ID:"+ " "+ nuevaLista[i].ID + " "+" || "+ "Nombre: "+ nuevaLista[i].nombre)
        }
        
        
    }else{
        console.log("No existen sobrantes")
    }

}









//--------------Listado de elementos presentes en la Lista2 y faltantes de la Lista1 ------------------

/*Para realizar este inciso se realizara una busqueda secuencial de los elementos del array 2 en el array 1. cuando se encuentre un item que se considere faltante sera colocado en un nuevo array para posteriormente ser combinado con el array 1 formando el array deseado */


function faltantesLista1(primeraLista, segundaLista){


    let nuevaLista2=[] //lista en la que se convinaran los elementos del array 1 con los faltantes del 2

    let contadorElementos2 = 0 //contador de elementos que sobran
    
    let resultadoBusqueda2 = false // booleano que indica si se encontro el item buscado
    
    let existenFaltantes2 = false
    
    //copiamos la lista 1 a la nueva lista en la cual se agregaran los sobrantes
    for (let i = 0; i < segundaLista.length; i++) {
        nuevaLista2[i] = segundaLista[i]
        
    }
    
    // busqueda binaria
    //hacemos una busqueda de los items de la segunda lista sobre la primera
    for (let i = 0; i < primeraLista.length; i++) {
    
        let j = 0
    
    
        while ( resultadoBusqueda2 == false && j < segundaLista.length) {
            
            //se evalua el primer iten de la segunda lista con todos elementos de la primera, luego el segundo item dela lista con todos items de la segunda lista....
            if (primeraLista[i].nombre == segundaLista[j].nombre) {
    
                resultadoBusqueda2 = true
    
            }
            j++
        
        }
        // si no hay ninguna coincidencia se considera que hay un item sobrante y se procede a ser agregado en la nueva lista
        //contador de elementos hace referencia a la cantiad de elementos resates que se encontraron
        if (resultadoBusqueda2 == false) {
            //se agrega el objeto a la lista
            nuevaLista2[segundaLista.length + contadorElementos2 ] = {ID:(segundaLista.length+ contadorElementos2 +1), nombre: primeraLista[i].nombre}
            
            contadorElementos2++
    
            existenFaltantes2 = true
    
        }
    
        resultadoBusqueda2 = false
        
    }
    
    if (existenFaltantes2 == true) {
    
        console.log(
            "\n\n--------------Listado de elementos presentes en la Lista 2 y faltantes de la Lista 1------------------ \n\n"
        )
        
        // se muestran los elementos sobrantes que se van a agregar a la lista
        console.log(
            "\n------ Faltantes lista 1 ----- \n"
        )
        
        for (let i = nuevaLista2.length - contadorElementos2 ; i < nuevaLista2.length; i++) {
           
            console.log("ID:"+ " "+ nuevaLista2[i].ID + " "+" || "+ "Nombre: "+ nuevaLista2[i].nombre)
        }
        
        //muestra la lista ya combinada
        console.log(
            "\n------ Lista 2 mas los faltantes lista 1 ----- \n"
        )
        for (let i = 0; i < nuevaLista2.length; i++) {
           
            console.log("ID:"+ " "+ nuevaLista2[i].ID + " "+" || "+ "Nombre: "+ nuevaLista2[i].nombre)
        }
    
        
    }else{
        console.log ("No existen faltantes")
    }

}








/*----------Elementos en conflicto, es decir, elementos que existen en ambas listas, pero con distintos valores.---------------- */

/*para esta funcion lo que se realizo fue una busqueda secuencial de los valores de la primera lista en la segunda. En caso de que los nombres de los objetos de ambas listas sea el mismo se proocedera a evaluar sus id si sus id son diferentes se tomara como un conflicto y e ese caso se mostrara un cartel por pantalla  el cual mostrara que elementos estan en conlicto y a que lista pertenecen */


function elementosConflicto(primeraLista, segundaLista){

    console.log(
        "\n\n----------Elementos en conflicto, es decir, elementos que existen en ambas listas, pero con distintos valores.----------------\n\n")
    
    let resultadoBusquedaConflicto = false //variable para busqueda
    let ausenciaDeConflictos = true //bandera que indica si existen elementos en conflicto
    
    
    
    // busqueda secuencial
    //hacemos una busqueda de los items de la primer lista sobre la segunda
    for (let i = 0; i < segundaLista.length; i++) {
    
        let j = 0
    
    
        while ( resultadoBusquedaConflicto == false && j < primeraLista.length) {
            
                //si los nombres son iguales y los id diferentes entrara al condicional
            if ((segundaLista[i].nombre == primeraLista[j].nombre ) && (segundaLista[i].ID != primeraLista[j].ID) ) {
    
                resultadoBusquedaConflicto = true
                //se procede a mostrar por pantalla los elementos en conflicto
                console.log(
                    "\n------------Elemento en conflicto----------------\n")
                
                console.log("Lista 1 \t\t\t\t\t"+ "Lista 2"+"\n"+ "ID: "+ primeraLista[i].ID + " "+ "Nombre: "+ primeraLista[i].nombre + "\t\t\t" + "ID: "+ segundaLista[j].ID +" "+ "Nombre: "+ segundaLista[j].nombre)    
                
                ausenciaDeConflictos = false    
            }
            j++
        
        }
        
        resultadoBusquedaConflicto = false
     
    }
    
    if (ausenciaDeConflictos == true ) {
        
        console.log("No hay elementos en conflicto")
    }
}