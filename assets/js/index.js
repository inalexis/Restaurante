//funcion de aparicion de formulario reserva
function mostrarReserva() {
  var reserva = document.getElementById("reserva");
  if (reserva.classList.contains("d-none")) {
    reserva.classList.remove("d-none");
    reserva.classList.add("d-block");
  }
}

//funcion de formulario de contacto
function mostrarContacto() {
  var comunicacion = document.getElementById("comunicacion");
  if (comunicacion.classList.contains("d-none")) {
    comunicacion.classList.remove("d-none");
    comunicacion.classList.add("d-block");
  }
}
  
  



//funcion de formulario de contacto
function validarFormulario() {
  const nombre = document.getElementById('formGroupExampleInput').value;
  const correo = document.getElementById('formGroupExampleInput2').value;
  
  if (nombre === '' || correo === '') {
    alert('Por favor, llene todos los campos obligatorios.');
  } else {
    alert('¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.'); }
  }


  //funcion de formulario de reservacion
  function validarFormulario2() {
    const nombrer = document.getElementById('formGroupExampleInput5').value;
    const correor = document.getElementById('formGroupExampleInput6').value;
    const telefono = document.getElementById('formGroupExampleInput7').value;
    
    if (nombrer === '' || correor === '' || telefono ==='') {
      alert('Gracias por reservar pero Por favor, llene todos los campos obligatorios.');
    } else {
      alert('¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.'); }
    }

    //funcion de alerta reservas
    $(document).ready(function(){
      $("#reservas").click(function () {
        var nombre = $("#nombre").val();
        var correo = $("#correo").val();
        var hora = $("#hora").val();
        var invitados = $("#invitados").val();

        alert("Hola " + nombre + " agradecemos por reservar con nosotros, hemos registrado " + invitados + " asistentes " + "a la hora " + hora + " se enviara un correo a " + correo + " con todos los datos \nGracias por preferirnos" )
      })

          //  Tarjeta1
      $("#tarjeta1").click(function () {
        $(this).css("background-color", "black")
        $(this).css("color", "white")
        $(this).css('position' , "fixed");
        $(this).css('z-index' , "9999");
        $(this).css('width' , "50%");
        $(this).css("left", "50%");
        $(this).css("top", "50%");
        $(this).css("transform", "translate(-50%, -50%)");
        $(this).css("margin-left", "auto");
        $(this).css("margin-right", "auto");
      })

      $('#tarjeta1').dblclick(function() {
        $(this).removeClass('ampliada');
        $(this).removeAttr('style');
      });

      // Tarjeta2
      $("#tarjeta2").click(function () {
        $(this).css("background-color", "black")
        $(this).css("color", "white")
        $(this).css('position' , "fixed");
        $(this).css('z-index' , "9999");
        $(this).css('width' , "50%");
        $(this).css("left", "50%");
        $(this).css("top", "50%");
        $(this).css("transform", "translate(-50%, -50%)");
        $(this).css("margin-left", "auto");
        $(this).css("margin-right", "auto");
        
      })

      $('#tarjeta2').dblclick(function() {
        $(this).removeClass('ampliada');
        $(this).removeAttr('style');
      });

      // tarjeta3
      $("#tarjeta3").click(function () {
        $(this).css("background-color", "black")
        $(this).css("color", "white")
        $(this).css('position' , "fixed");
        $(this).css('z-index' , "9999");
        $(this).css('width' , "50%");
        $(this).css("left", "50%");
        $(this).css("top", "50%");
        $(this).css("transform", "translate(-50%, -50%)");
        $(this).css("margin-left", "auto");
        $(this).css("margin-right", "auto");
        
      })

      $('#tarjeta3').dblclick(function() {
        $(this).removeClass('ampliada');
        $(this).removeAttr('style');
      });

    })