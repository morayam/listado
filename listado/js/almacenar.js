let arrayItems=[];

function agregarItemAlListado(arreglo){
    let item = document.getElementById("item");
        
    arreglo.push(item.value);

    localStorage.setItem("datos", JSON.stringify(arreglo)); //transforma el arreglo en un string para poder guardarlo

    item.value = ""
}

function mostrarListado(array){

    console.log(array)

    let content = "";

    for (let item of array){
        
        content +=`<li class="list-group-item">${item}</li>`;
    }

    document.getElementById("contenedor").innerHTML = content;
}

function limpiar(){
    arrayItems = [];
    mostrarListado(arrayItems)
    localStorage.removeItem("datos")
}


document.addEventListener("DOMContentLoaded", ()=>{

    let datos = JSON.parse(localStorage.getItem("datos")); //trasnsforma el string a un objeto (arreglo) para poder usarlo

    if (datos != null){
        mostrarListado(datos);
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


