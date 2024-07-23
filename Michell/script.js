function saludar (){  
    var usuario = document.getElementById("nombre").value;
    localStorage.setItem("nombreusuario",usuario)
    var saludo = document.getElementById("saludo");
    saludo.textContent = "Hola," + usuario + "!";
    document.getElementById("nombre").value = " " ;
     }



 var nombre=localStorage.getItem("nombreusuario")
