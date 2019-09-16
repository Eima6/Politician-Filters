
// 
// Variables...
// 

var desplegador = document.querySelector('#desplegador')
var plegador = document.querySelector('#plegador')
var submenu = document.querySelector('#submenu')
var senate=document.querySelector('#submenu li:nth-child(1)')
var house=document.querySelector('#submenu li:nth-child(2)')
// console.log(senate)
// console.log(house)
// console.log(submenu)


// 
// Ocultar senate y house
// 


// senate.style.display="none";
// house.style.display="none";

// 
//variable de addeventlistener click para desplegar el menu de seante y house 
// 

 desplegador.addEventListener('click',
 function(){
    //  console.log('funxiona')
    senate.style.display="flex";
    house.style.display="flex";
    plegador.style.display="flex",
    desplegador.style.display="none";

 })

 plegador.addEventListener('click',
 function(){
    //  console.log('funxiona')
    senate.style.display="none";
    house.style.display="none";
    plegador.style.display="none",
    desplegador.style.display="flex";


 })


// 
// Funcion para desplegar el menu
// 

