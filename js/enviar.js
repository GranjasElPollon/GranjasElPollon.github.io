document.getElementById("enviar-uno").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value;
    let cartones = document.getElementById("cartones").value;
    let dia = document.getElementById("dia").value;

    let url =
        "https://api.whatsapp.com/send?phone=+50377774562&text=" +
        "*PEDIDO%20DE%20LA%20WEB%20GRANJAS%20EL%20POLLON*%0A%0A*Mi%20nombre%20es*%3A%20" + nombre + "%0A%0A*Cantidad*%3A%20" + cartones + "%20cartones%20de%20huevo%20completo%20por%20favor%0A%0A*Fecha%20de%20Entrega*%3A%20" + dia + "%0A%0AFeliz%20Dia%20%3A)%0A";

    window.open(url);
});


document.getElementById("enviar-tres").addEventListener("click", function () {
    let nombret = document.getElementById("nombretres").value;
    let cartonest = document.getElementById("cartonestres").value;
    let diat = document.getElementById("diatres").value;

    let url =
        "https://api.whatsapp.com/send?phone=+50377774562&text=" +
        "*PEDIDO%20DE%20LA%20WEB%20GRANJAS%20EL%20POLLON*%0A%0A*Mi%20nombre%20es*%3A%20" + nombret + "%0A%0A*Cantidad*%3A%20"+ cartonest +"%20huevo%20completo%20por%20favor%0A%0A*Fecha%20de%20Entrega*%3A%20"+ diat +"%0A%0AFeliz%20Dia%20%3A)%0A";

    window.open(url);
});
