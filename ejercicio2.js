const botones = document.querySelectorAll("button");  //afecta a todos los que tengan la misma etiqueta

botones.forEach((button)=>{   //funciona como un for de java

    button.addEventListener("click", function(){
        const texto = button.textContent;
        alert(`Has pulsado: ${texto}`);
    });

});