
var members = dataHouse.results[0].members;
var membersSenate = dataSenate.results[0].members;
//     for(var i=0;i<members.length;i++){
//         console.log(members[i].first_name);
//     }   

// }


function pintarHouse(){
    for(var i=0;i<members.length;i++){
        containerHouse.innerHTML+=`
        </thead>
<tbody>
    <tr>
        <td></td>
        <td>${members[i].first_name}</td>
        <td>${members[i].middle_name}</td>
        <td>${members[i].last_name}</td>
        <td>${members[i].party}</td>
        <td>${members[i].total_votes}</td>
        <td></td>
    </tr>

    ` 
    }
}
pintarHouse();





