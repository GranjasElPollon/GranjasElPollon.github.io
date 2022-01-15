document.getElementById("enviar-dos").addEventListener("click", function () {
    let nombred = document.getElementById("nombredos").value;
    let cartonesd = document.getElementById("cartonesdos").value;
    let diad = document.getElementById("diados").value;

    let url =
        "https://api.whatsapp.com/send?phone=+50377774562&text=" +
        "*PEDIDO%20DE%20LA%20WEB%20GRANJAS%20EL%20POLLON*%0A%0A*Mi%20nombre%20es*%3A%20" + nombred +  "%0A%0A*Cantidad*%3A%20" + cartonesd + "%20medios%20cartones%20de%20huevo%20por%20favor%0A%0A*Fecha%20de%20Entrega*%3A%20" + diad + "%0A%0AFeliz%20Dia%20%3A)%0A";

    window.open(url);
});
