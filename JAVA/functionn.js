/**
document.getElementById('boton').onclick = function(){console.log("cpturamos el evento click")
document.getElementById("demo").innerHTML = "estamos probando el primer evento" ;  }
 */

document.addEventListener('click',function(){
    console.log("hola mundo desde EL"); document.getElementById("demo").innerHTML = "ESTAMOS     probando nuestro 1 evento EL"
});

document.getElementById('boton_color').addEventListener('click',function(){document.body.style.backgroundColor = "blue" ;
}); 
                                
document.getElementById('boton_volver').addEventListener('click',function(){ document.body.style.backgroundColor = 'antiquewhite' ;
});

document.getElementById('boton_ocultar').addEventListener('click',function(){ document.getElementById('demo').style.display = 'none' ;
});