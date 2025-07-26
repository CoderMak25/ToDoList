let btn = document.querySelector("button");
let ul = document.querySelector("#list");
let inp = document.querySelector("input");


btn.addEventListener("click",function(){

    if (inp.value == "") {
       return;
    }

    let item = document.createElement("li");
    item.innerText = inp.value;

    let i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");

    item.appendChild(i);
    ul.appendChild(item);


    inp.value="";

});



ul.addEventListener("click",function(event){
    if (event.target.nodeName == "I") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

