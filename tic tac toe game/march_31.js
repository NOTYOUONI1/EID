let boxes = document.querySelectorAll(".box")
const reset = document.querySelector("#reset")
const backg = document.querySelector(".game")
const res = document.querySelector(".res")
const start = document.querySelector("#start")
let true0 = true;
let backc = false


const winpaten = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const disable = ()=>{
    for(v of boxes){
        v.disabled = true
        v.innerText=""
    }
}

const start0 = ()=>{
    for(l of boxes){
        l.disabled = false
        l.innerText=""
    }
}

let checkwin = ()=>{
    for(let peaten of winpaten){
        let val1 = boxes[peaten[0]].innerText
        let val2 = boxes[peaten[1]].innerText
        let val3 = boxes[peaten[2]].innerText
    
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                res.innerText=`winner ${val1}`
                disable()
                console.log(val1)
                res.style.backgroundColor="green"
            }
        }
    }
}



function gg (backc){
    if(backc){
        backg.style.backgroundColor="red"
    } else{
        backg.style.backgroundColor="burlywood"
    }
}

function logic(){
    if(pass){

    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(true0) {
            box.innerText = "x"; // Use box.innerHTML instead of boxes.innerHTML
            true0 = false;
        } else {
            box.innerText = "o"; // Use box.innerHTML instead of boxes.innerHTML
            true0 = true;
        }
        box.disabled = true
        if(backc){
            backg.style.backgroundColor="pink"
        } else{
            backg.style.backgroundColor="burlywood"
        }
        checkwin()
    });
    
});

reset.addEventListener("click",()=>{
    backg.style.backgroundColor="rgb(164, 99, 15)"
    disable()
    true0 = true
})

start.addEventListener("click",()=>{
    backg.style.backgroundColor="pink"
    start0()
})