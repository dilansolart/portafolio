(function(){
    const diaNacimiento = 28;
    const mesNacimiento = 03;
    const anioNacimiento = 1994;
    var salida = document.getElementById("salida");
  
    var calcula = 0;
    var objeto=new Date();
    var dia=objeto.getDate();
    var mes= objeto.getMonth()+1;
    var hoy=objeto.getFullYear();
  
    edad = function edad() {
      if (mes < mesNacimiento || (mes == mesNacimiento && dia < diaNacimiento)) {
        return calcula = parseInt(hoy - anioNacimiento) - 1;
      }
      else {
        return calcula = parseInt(hoy - anioNacimiento);
      }
    };
    salida.innerHTML= edad();

})();