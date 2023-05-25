let url = "https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/"
let boton = document.getElementById("boton")

boton.addEventListener("click", mostrarData)


function mostrarData(){
let comunaInput = document.getElementById("comuna").value

fetch(url)
        .then(response => response.json())
        .then((data) => {
            
            data.forEach((ciudad) => {

            const nombreCiudad = comunaInput.toLowerCase().replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
              if(nombreCiudad == ciudad.nombre){
                res.innerHTML = "<b>Resultado</b>"
                nom.innerHTML = `<b>Comuna:</b> ${ciudad.nombre}`
                reg.innerHTML = `<b>Región:</b> ${ciudad.region}`
                
                ciudad.realtime.forEach((real) => {
                    valor.innerText = `La Concentración de la contaminación en el aire es de ${real.tableRow.value}  µg/m3`
                    cal.innerText = `La calidad del aire es ${real.tableRow.status}` 
                    
                    
               })  
              }
                });
            
       
                
        })
        .catch((error) => {
            nom.innerText = "Ha Ocurrido Un Error en la Consulta"
        })
limpiar()

}

function limpiar(){

    document.getElementById("comuna").value = ""
}
