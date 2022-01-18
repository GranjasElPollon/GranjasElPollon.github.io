//alertas//

function cancelar(){
   swal({
    title: "¿Seguro que quiere borrar su pedido?",
    text: "Se borraran los datos ingresados en el formulario",
    icon: "warning",
    buttons: [true, "si"],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      location.href ="index.html";

    } else {
        swal({
            title: "Siga Ingresando sus Datos",
            icon: "success",
           
           
          })
      
    }
  });
}

