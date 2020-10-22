//Creando funcion 

function validarFormulario(){
    //removemos el div con la clase alert
    $('.alert').remove();
    //Variables
    var nombre=$('#nombre').val();
    var correo=$('#correo').val();
    var asunto=$('#asunto').val();
    var mensaje=$('#mensaje').val();

    //Validar Nombre
    if (nombre=="" || nombre==null) {
        cambiarColor("nombre");
        //mensaje de alerta
        mostraAlerta("Campo Obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(nombre)) {
            cambiarColor("nombre");
            mostraAlerta("No se permiten caracteres especiales o numeros");
            return false;
        }
    }
     //Validar Correo
     if (correo=="" || correo==null) {
        cambiarColor("correo");
        //mensaje de alerta
        mostraAlerta("Campo Obligatorio");
        return false;
    }else{
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!expresion.test(correo)) {
            cambiarColor("correo");
            mostraAlerta("Por favor ingrese un correo valido");
            return false;
        }
    }
    //Validar Asunto
    if (asunto=="" || asunto==null) {
        cambiarColor("asunto");
        //mensaje de alerta
        mostraAlerta("Campo Obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(asunto)) {
            cambiarColor("asunto");
            mostraAlerta("No se permiten caracteres especiales");
            return false;
        }
    }
      //Validar Mensaje
      if (mensaje=="" || mensaje==null) {
        cambiarColor("mensaje");
        //mensaje de alerta
        mostraAlerta("Campo Obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(mensaje)) {
            cambiarColor("mensaje");
            mostraAlerta("No se permiten caracteres especiales");
            return false;
        }
    }

    $('form').submit();
    return true;
}
//Foco las opciones de del formulario
$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('asunto');
});

$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('mensaje');
});

function colorDefault(dato){
    $('#'+dato).css({
        border: "1px solid #999"
    });
}

function cambiarColor(dato){
    $('#'+dato).css({
        border: "1px solid #dd5144"
    });
}

function mostraAlerta(texto){
    $('#nombre').before('<div class="alert">Error: '+ texto + '</div>');
}