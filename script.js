console.log("Hello World!");
let button = document.getElementById("button");
let container = document.getElementById("container");
let box = document.getElementById("color-box");
let flag = 0;
let MyFunction =  () => {
    if(flag == 0){
        box.style.backgroundColor = "red";
        flag = 1;
        console.log(flag);
    }
    else if(flag == 1){
        box.style.backgroundColor = "orange";
        flag = 2;
        console.log(flag);
    }
    else if(flag == 2){
        box.style.backgroundColor = "yellow";
        flag = 3;
        console.log(flag);
    }
    else if(flag == 3){
        box.style.backgroundColor = "indigo";
        flag = 4;
        console.log(flag);
    }
    else if(flag == 4){
        box.style.backgroundColor = "purple";
        flag = 5;
        console.log(flag);
    }
    else if(flag == 5){
        box.style.backgroundColor = "blue";
        flag = 6;
        console.log(flag);
    }
    else if(flag == 6){
        box.style.backgroundColor = "green";
        flag = 7;
        console.log(flag);
    }
    else if(flag == 7){
        box.style.backgroundColor = "transparent";
        flag = 0;
        console.log(flag);
    }
}

button.addEventListener("click", MyFunction)