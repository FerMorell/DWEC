const radio = document.querySelectorAll('input[type="radio"]');
let devs;
const todosLosSelect= document.querySelectorAll("select")
async function leeFichero(tipo){
        let resp;  
        switch (tipo) {
            case "json":
            resp = await leeFicheroJson();
            //   console.log("leeFichero:" + resp);
            break;
        }
        return resp;
}

async function cargarDatos(){
    contenido = await leeFichero('json');
    // console.log(contenido)ç
     devs=contenido;
    crearTablaEmpleados(devs)
    // mostrarPorEleccion(devs)
    // console.log(devs)

}

async function leeFicheroJson(){
    return await fetch("dev_data.json")  // miro el json
    .then(respuesta => respuesta.json())
    .catch((err) => console.log(err));
}

cargarDatos();

function crearTablaEmpleados(lista){
    let tablitas= document.querySelectorAll("table")
    let tablaEmpleados=tablitas[2]
    let contenido=lista.slice(0,20);
    // slice para cortar la tabla
    // console.log(contenido)

        contenido.forEach(e => {
            let tr= document.createElement("tr")
            let id= document.createElement("td")
            id.textContent=e.norder;
            tr.appendChild(id)
            let tdNombre= document.createElement("td")
            tdNombre.textContent=e.Nombre;
            tr.appendChild(tdNombre);

            let apellido= document.createElement("td")
            apellido.textContent=e.Apellido;
            let java= document.createElement("td")
            let php= document.createElement("td")
            let sql= document.createElement("td")
            let sede= document.createElement("td")
            let rank= document.createElement("td")
            let habilidades= e.skills
            //  habilidades.forEach(s =>{
                java.textContent=habilidades.java;
                php.textContent=habilidades.php;
                sql.textContent=habilidades.sql;
            // })




            // for (let campo in objeto){
            //     let a = document.createElement("td");
            //     a.innerText= campo;
            
            // // mira si campo == skills 
            // // hacer otro for in
            
            //     padre.appendChild(a);
            
            // hacerlo asi
            
            // }


            sede.textContent=e.sede;
            rank.style.width=e.value * 5 +'px';
            // rank.textContent=e.value
            rank.classList.add("bar")
            // console.log("AAAAAAAAAAAAA",rank)
            let seleccion=document.createElement("td");
            let check= document.createElement("input")
            check.setAttribute("type","checkbox")
            seleccion.appendChild(check)
            tr.appendChild(apellido)    
            tr.appendChild(java);
            tr.appendChild(php);
            tr.appendChild(sql);
            tr.appendChild(sede)
            tr.appendChild(rank)
            tr.appendChild(seleccion)
            tablaEmpleados.querySelector("tbody").appendChild(tr)
            // console.log(e)
        });

}



// radio.forEach((radio) => {
//     radio.addEventListener("click", mostrarEleccion)
// })
todosLosSelect.forEach(s=>{
    s.addEventListener("change",function(){
        console.log(s.value)
        mostrarPorSelect(s.value);
    })
})


function mostrarPorSelect(valor){
let existe= devs.filter(c=>c.ja)
}
//  function mostrarEleccion() {
//      radio.forEach((radio) => {
//          if (radio.checked) {
//              const eleccion = radio.value;
//              console.log(eleccion);
//              mostrarPorEleccion(eleccion);
//          }
//      });
//  }
//   function mostrarPorEleccion(){
//     let existe= devs.filter(c => c.)
    
//   }