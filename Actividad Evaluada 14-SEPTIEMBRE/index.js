$(document).ready(function() {
    $("#calcular").click(function() {
        calcularBilletes();
    });
});

function calcularBilletes() {
    
    var nombreUsuario = $("#nombreUsuario").val();

    
    var cantidadRetiro = parseInt($("#cantidadRetiro").val());
    var billetes100 = Math.floor(cantidadRetiro / 100);
    cantidadRetiro %= 100;
    var billetes50 = Math.floor(cantidadRetiro / 50);
    cantidadRetiro %= 50;
    var billetes20 = Math.floor(cantidadRetiro / 20);
    cantidadRetiro %= 20;
    var billetes10 = Math.floor(cantidadRetiro / 10);
    cantidadRetiro %= 10;
    var billetes5 = Math.floor(cantidadRetiro / 5);
    cantidadRetiro %= 5;
    var billetes1 = cantidadRetiro;


    $("#resultado h3").text(" Hola  " + nombreUsuario +" su cantidad en billetes es de  " +  ":");

    
    $("#billetes100").text(billetes100);
    $("#billetes50").text(billetes50);
    $("#billetes20").text(billetes20);
    $("#billetes10").text(billetes10);
    $("#billetes5").text(billetes5);
    $("#billetes1").text(billetes1);
}