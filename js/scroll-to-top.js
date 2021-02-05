
/*Función javascript para que al presionar el botón de la parte inferior de la pantalla
este regrese al usuario desde el fondo hasta la parte superior */

/*Creamos una variable que obtendrá del DOM el id del boón que creamos  */
var mybutton = document.getElementById("btn-top");
var rootElement = document.documentElement;


/*Asignamos la funcionalidad de mostrar el botón una vez que el usuario ha empezado a moverse */
window.onscroll = function(){scrollfunction()};

/*Creamos la función */
function scrollfunction(){
    /*Botón se muestra cuando el usuario comienza el scroll en la página */
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block"; /*Aqui la propiedad display pasa de ser none a block */  
    }
    else{
        mybutton.style.display = "none"; /*regresamos a none caso contrario */
    }
};
/*Creamos la función que devuelve al usuario a la parte superior de la página */
function topfunction(){
    /*Suavisado del movimiento con smooth y behavior, obtenemos el elemnto raíz que eremos mover
    en este caso el botón */
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
        
    
    
};
