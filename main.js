

function valida(){
function Persona (nombre, primerNota, segundaNota){
    this.nombre=nombre;
    this.primerNota=primerNota;
    this.segundaNota=segundaNota;
    this.Promedio=Promedio;
    swal({
       icon:"success",
       title: "Usuario registrado correctamente", 
       buttons:["Registrar otro alumno","Finalizar"]
    })
    }


let validaNombre = document.getElementById("nombre").value;

let validaPrimerNota = parseInt(document.getElementById("primerNota").value);

let validaSegundaNota = parseInt(document.getElementById("segundaNota").value);

Promedio = (validaPrimerNota + validaSegundaNota)/2;

nuevoAlumno = new Persona (validaNombre, validaPrimerNota, validaSegundaNota,Promedio);
console.log(nuevoAlumno);
agrega();


}

let ListaAlumnos= [];
function agrega(){
    ListaAlumnos.push(nuevoAlumno);
    console.log(ListaAlumnos);
    document.getElementById("tabla").innerHTML += '<tbody><td>' +nuevoAlumno.nombre + '</td><td>'+nuevoAlumno.primerNota + '</td><td>' + nuevoAlumno.segundaNota + '</td><td>' + Promedio + '</tbody></td>';
}



localStorage.setItem("Nuevo", "Rafael");
localStorage.getItem("Nuevo");


const alumnos = ["Gonzalo", "Victor", "Gabriel", "Leonardo"];
const alumnaNueva = "Laura";
alumnos.push(localStorage.getItem("Nuevo"));
const alumnosFaltantes = ["Sara", "Alberto", "Julia", "Luis", "Diego"];
const listaCompleta =alumnos.concat(alumnosFaltantes);
const alumnoIntermedio =listaCompleta.slice(5);
const buscador = listaCompleta.find(estudiante => estudiante === "Gabriel");
const filtro = listaCompleta.filter(estudiante =>estudiante.includes("L"))
console.log("Los alumnos del año 2021 son:" + " " + (listaCompleta));



JSON.stringify([listaCompleta]);
console.log(listaCompleta);

(function borrar(){
    const$botonb = documentById("botonb");
$botonb.addEventListener("click",(event)=>{
    alert("Valide sus datos")
    $("#botonb").click(function(){
        $("botonb").hide();
    });
})});

const DesAjax= "https://jsonplaceholder.typicode.com/posts";
$("#form").on("click"),(e) =>{
   e.preventDefault();
   const contact = {nombre: $("#email-bt").val()};
   $.post(DesAjax, contact, (respuesta,estado)=> {
      console.log(estado);
      console.log(estado);
   })
}

//Animando secciones de landingpage
$(".nav-link1").on("click", function() {
    $("html, body").animate({
       scrollTop: $("#banner_taital").offset().top
    })
   })
   
   $("#nav-link2").on("click", function() {
       $("html, body").animate({
          scrollTop: $(".seccion2").offset().top
       })
      })
   
      $("#nav-link3").on("click", function() {
       $("html, body").animate({
          scrollTop: $(".seccion3").offset().top
       })
      })
   
      $("#nav-link4").on("click", function() {
       $("html, body").animate({
          scrollTop: $(".seccion4").offset().top
       })
      })

      $(document).ready(function() {
         $(".fancybox").fancybox({
         openEffect: "none",
         closeEffect: "none"
      })
   })