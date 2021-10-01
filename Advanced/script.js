let books = JSON.parse(booklist);

for (x of books){

    if ( x.read == true){
        document.getElementById("placehere").innerHTML += `<p class="text-center font-weight-bold bg-success"> <img src="${x.cover}" class="w-50 m-auto"> <br> ${x.title} by <br> ${x.author} </p>`    
    }

    else {
        document.getElementById("placehere").innerHTML += `<p class="text-center font-weight-bold bg-warning"> <img src="${x.cover}" class="w-50"> <br> ${x.title} by <br> ${x.author} </p>`  
    }

}