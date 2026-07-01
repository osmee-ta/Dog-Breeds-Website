const steps = document.querySelectorAll(".step");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");

let current = 0;

function updatePage(){

    steps.forEach(step=>step.classList.remove("active"));

    steps[current].classList.add("active");

    progress.style.width=((current+1)/steps.length)*100+"%";

    prev.disabled=current===0;

    next.disabled=current===steps.length-1;
}

next.addEventListener("click",()=>{

    if(current<steps.length-1){

        current++;
        updatePage();

    }

});

prev.addEventListener("click",()=>{

    if(current>0){

        current--;
        updatePage();

    }

});

updatePage();