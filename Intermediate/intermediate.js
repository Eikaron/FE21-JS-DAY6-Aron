let employees = JSON.parse(employ);

console.table(employees);

for (x of employees){
    document.getElementById("result").innerHTML += `<tr> 
    <td class="w-auto font-weight-bold">${x.ID} </td>
    <td class="w-auto">${x.fname} ${x.lname}</td>
    <td class="w-auto">${x.email}</td>
    <td class="w-auto">${x.jobtitle}</td>
    <td class="w-auto text-center">${x.salary} R</td>
    </tr>`
}


