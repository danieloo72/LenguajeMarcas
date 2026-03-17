const contenedor = document.querySelector(".contenedor");
const btnDirection = document.getElementById("direction");
const bntJustify = document.getElementById("justify");
const btnalign = document.getElementById("align");

const listaDirection = ['row', 'column', 'row-reverse', 'column-reverse'];

const listaAlign = ['stretch', 'center', 'flex-start', 'flex-end', 'baseline'];

const listaJustify = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];

function getValue(lista, actual){
    for(let i = 0; i < lista.length; i ++){
        if(lista[i] === actual){
            if(i < lista.length -1){
                return lista[i + 1];
            }else{
                return lista[0];
            }
        }
    }
    return lista[0];
}

btnDirection.addEventListener("click", function(){
    const actual = contenedor.style.flexDirection || 'row';
    const siguiente = getValue(listaDirection, actual);

    contenedor.style.flexDirection = siguiente;
    btnDirection.textContent = `Direction: ${siguiente}`;

});

bntJustify.addEventListener("click", function(){
    const actual = contenedor.style.justifyContent || 'center';
    const siguiente = getValue(listaJustify, actual);

    contenedor.style.justifyContent = siguiente;
    bntJustify.textContent = `Justify: ${siguiente}`;

});

btnalign.addEventListener("click", function(){
    const actual = contenedor.style.alignItems || 'center';
    const siguiente = getValue(listaAlign, actual);

    contenedor.style.alignItems = siguiente;
    btnalign.textContent = `Align: ${siguiente}`;

});