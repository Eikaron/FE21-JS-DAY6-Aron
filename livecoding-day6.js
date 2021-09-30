let animalsAP = JSON.parse(animals);

//console.table(animalsAP);

for (let x of animalsAP) {

    if (x.jellyfish == true) {
        document.getElementById("result").innerHTML += `<div class="col-4" style="background: blue">
        <p>${x.fname} ${x.lname} </p>
        <img src ="${x.img}" width="300">
        </div>`
    }

    else {
        document.getElementById("result").innerHTML += `<div class="col-4" style="background: green">
        <p>${x.fname} ${x.lname} </p>
        <img src ="${x.img}" width="300">
        </div>`
    }

}