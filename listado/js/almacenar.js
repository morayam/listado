let arrayItems=[];

function agregarItemAlListado(arreglo){
    let item = document.getElementById("item");
        
    arreglo.push(item.value);

    localStorage.setItem("datos", JSON.stringify(arreglo));

    item.value = ""
}

function mostrarListado(array){

    let content = "";

    for (let i = 0; i < array.length; i++){
        let elemento = array[i];
        content +=`
        <li class="list-group-item">${elemento}</li>
        `
    }

    document.getElementById("contenedor").innerHTML = content
}

function limpiar(){
    arrayItems = [];
    mostrarListado(arrayItems)
    localStorage.removeItem("datos")
}


document.addEventListener("DOMContentLoaded", ()=>{

    arrayItems = JSON.stringify(localStorage.getItem("datos"));

    if (arrayItems != null){
        mostrarListado(arrayItems);
    }else{
        arrayItems = [];
    }
    

    document.getElementById("agregar").addEventListener("click",()=>{
        
        agregarItemAlListado(arrayItems);

        mostrarListado(arrayItems);
    })

    document.getElementById("limpiar").addEventListener("click", ()=>{
        limpiar()
    })
})


