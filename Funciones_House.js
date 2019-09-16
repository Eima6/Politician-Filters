var i=0;

var members = dataHouse.results[0].members;
var partido = dataHouse.results[0 ].members[i].party;
var results = dataHouse.results;

var statesvar= dataHouse.results[0].members[i].state[i];

//     for(var i=0;i<members.length;i++){
//         console.log(members[i].first_name);
//     }   




function pintarHouse( members     ){
    containerHouse.innerHTML='';
    for(var i=0;i<members.length;i++){
        
        containerHouse.innerHTML+=`

    <tr>
        <td></td>
        <td>${members[i].first_name}</td>
        <td>${members[i].middle_name}</td>
        <td>${members[i].last_name}</td>
        <td>${members[i].party}</td>
        <td>${members[i].total_votes}</td>
        <td>${members[i].state}</td>
        <td></td>
    </tr>
    </tbody>
    ` 
    }
    console.log(members)
}

var label= document.getElementsByTagName('label')
  var input = document.getElementsByTagName('input');

//FUNCTION PARA ACTIVAR LABELS DE CHECKBOX






 //FUNCION 1 GET CHECKEDS (CRIBAR POR PARTIDOS)


  function arrayMembers(){
     var checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
     const partiesFilter = [];
   for (const box of checkedBoxes) {
     partiesFilter.push(box.defaultValue);
   }
   filterPartyStates(members, partiesFilter);
    //  console.log(partiesFilter)
  }



//          FUNCION 1 PARA OBTENER LOS ESTADOS
   

function getOptionStates(){
    var checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkBoxFilters = [];
  for (const box of checkedBoxes) {
    checkBoxFilters.push(box.defaultValue);
  }

    var selectorOfstates= document.querySelector("#ContainerStates");
    
    filterPartyStates(members, checkBoxFilters, selectorOfstates.value);
}



  //SEGUNDA FUNCION UN FOR DE MEMBERS



// function filterMembers(members, filters){
//     var partidosDemocratas=[]
//     for(var i=0;i<members.length;i++){
//         if(filters.includes(members[i].party)){
//             partidosDemocratas.push(members[i]);
//         }
//     }
//     pintarHouse(partidosDemocratas);
    
// }
//                  SEGUNDA FUNCION UN FOR DE STATES
function filterPartyStates(members, checkBoxFilters, selectedState){
    var filtredStates=[];
    if( checkBoxFilters.length == 0 && selectedState == 'ALL'){
      pintarHouse(members);
    }
if( checkBoxFilters.length == 0 && selectedState != 'ALL'){
  for(var i=0;i<members.length;i++){
        
    if(( members[i].state == selectedState)   ){
        filtredStates.push(members[i]);
    }
    
}
pintarHouse(filtredStates);
}
if(checkBoxFilters.length != 0  && selectedState != 'ALL' ){
  for(var i=0;i<members.length;i++){
        
    if((checkBoxFilters.includes(members[i].party)  && members[i].state == selectedState)   ){
        filtredStates.push(members[i]);
    }
    
   
}
pintarHouse(filtredStates);
}

    

   if( checkBoxFilters.length != 0  && selectedState == 'ALL' ){
       
    for(var i=0;i<members.length;i++){
        
        if((checkBoxFilters.includes(members[i].party)  || members[i].state == selectedState)   ){
            filtredStates.push(members[i]);
        }
        
       
    }
    
    pintarHouse(filtredStates);
}else{
   // pintarHouse(members);
}
    
    
}


//
//
//                    VOY A COGER LOS ESTADOS DE TODOS ESTOS MAMONES de ·$%/&"$%&"
//                      PRIMERO CREARÉ UN ARRAY  CON TODOS LOS ESTADOS
//

arraystates=[]

for(i=0;i < members.length;i++){
    arraystates.push(members[i].state);
}
   console.log(arraystates)




//
//
//         AHORA QUE YA TENGO EL ARRAY DE LOS ESTADOS ELIMINARÉ LOS REPETIDOS
//
//
//

var sinRepetidos= arraystates.filter((valor, IndiceActual, arreglo)=>
arreglo.indexOf(valor)===IndiceActual);

console.log(sinRepetidos)
//
//
//                  AHORA QUE YA ELIMINÉ LOS REPETIDOS VOY A CREAR
//                  UNA FUNCION PARA PINTAR TODOS LOS TAG OPTION CON 
//                          EL ARRAY SIN ESTADOS REPETIDOS
//

function paintStates(sinRepetidos){
    for(i=0;i<sinRepetidos.length;i++){
        ContainerStates.innerHTML+= `
        
        <option value="${sinRepetidos[i]}" onchange="getOptionStates()">${sinRepetidos[i]}</option>

        `
    }
}
paintStates(sinRepetidos);
pintarHouse(members);

//
var all = document.getElementById('ALL')
//
//              ^^^^^^FUNCIONA HIJODELAGRANMIERDASECA^^^^^^
//              ||||||                                ||||||
//










