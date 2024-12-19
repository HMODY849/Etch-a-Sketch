const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const board = document.querySelector(".board");
const control = document.querySelector(".control");
const razer = document.createElement("button");
const picColor = document.querySelector(".picColor");
const randomColorButton = document.querySelector(".button4")
            razer.classList.add("razer");
            razer.classList.toggle("item1");
            razer.textContent="razer";
            control.appendChild(razer);
const cancelRazer = document.createElement("button");
            cancelRazer.classList.add("cancelRazer");
            cancelRazer.classList.toggle("item1");
            cancelRazer.textContent="X";
            control.appendChild(cancelRazer);
const reset = document.createElement("button");
            reset.classList.add("reset");
            reset.classList.toggle("item1");
            reset.textContent="reset";
            control.appendChild(reset);
function randomColor(){
    let color ="#";
    const range = "0123456789ABCDEF";
    for (let i = 0; i<6; i++){
        color+=range[Math.floor(Math.random()*16)]
    }
    return color
}

button1.addEventListener("click",function(){
    for (let i =0; i < 16 ; i++){
        let box = document.createElement("div");
        box.classList.add("item");
        box.classList.add("pic");
        board.appendChild(box);
            box.addEventListener("mouseover",function(){
                box.style.backgroundColor=randomColor();
            })
        button1.style.display="none";
        button2.style.display="none";
        button3.style.display="none";
            razer.classList.remove("item1");
                razer.addEventListener("click",function(){
                    box.addEventListener("mouseover",function(){
                         box.style.backgroundColor="white"
                        })
                    cancelRazer.classList.remove("item1");
                    })
                cancelRazer.addEventListener("click",function(){
                    cancelRazer.classList.add("item1");
                    box.addEventListener("mouseover",function(){
                      box.style.backgroundColor=randomColor();
                        })    
                })
        reset.classList.remove("item1");
            reset.addEventListener("click", function(){
            board.innerHTML=``
            button1.style.display="";
            button2.style.display="";
            button3.style.display=""
            reset.classList.add("item1");
            razer.classList.add("item1");
            cancelRazer.classList.add("item1");
            })
    }
}) 
    
button2.addEventListener("click",function(){
    for (let i =0; i < 64 ; i++){
        let box2 = document.createElement("div");
        box2.classList.add("item8");
        box2.classList.add("pic");
        board.appendChild(box2);
            box2.addEventListener("mouseover",function(){
                box2.style.backgroundColor=randomColor();
            })
    button1.style.display="none";
    button2.style.display="none";
    button3.style.display="none";
        razer.classList.remove("item1");
            razer.addEventListener("click",function(){
                box2.addEventListener("mouseover",function(){
                    box2.style.backgroundColor="white"
                    })
                cancelRazer.classList.remove("item1");
                })
                cancelRazer.addEventListener("click",function(){
                    cancelRazer.classList.add("item1");
                    box2.addEventListener("mouseover",function(){
                      box2.style.backgroundColor=randomColor();
                        })    
                })
    reset.classList.remove("item1");
        reset.addEventListener("click", function(){
            board.innerHTML=``
            button1.style.display="";
            button2.style.display="";
            button3.style.display=""
            reset.classList.add("item1");
            razer.classList.add("item1");
            cancelRazer.classList.add("item1");
        })        
    }
})


button3.addEventListener("click",function(){
    for (let i =0; i < 256 ; i++){
        let box3 = document.createElement("div");
        box3.classList.add("item16");
        box3.classList.add("pic");
        board.appendChild(box3);
            box3.addEventListener("mouseover",function(){
                box3.style.backgroundColor=randomColor();
            })
    button1.style.display="none";
    button2.style.display="none";
    button3.style.display="none";
        razer.classList.remove("item1");
            razer.addEventListener("click",function(){
                box3.addEventListener("mouseover",function(){
                    box3.style.backgroundColor="white"
                    })
                cancelRazer.classList.remove("item1");
                })
                cancelRazer.addEventListener("click",function(){
                    cancelRazer.classList.add("item1");
                    box3.addEventListener("mouseover",function(){
                      box3.style.backgroundColor=randomColor();
                        })    
                })   
    reset.classList.remove("item1");
        reset.addEventListener("click", function(){
            board.innerHTML=``
            button1.style.display="";
            button2.style.display="";
            button3.style.display=""
            reset.classList.add("item1");
            razer.classList.add("item1");
            cancelRazer.classList.add("item1");
        })
    }
})

picColor.addEventListener("mouseout",function(){
    let color=this.value;
    const allDivs=document.querySelectorAll(".pic");
        allDivs.forEach(div => {
            div.addEventListener("mouseover",function(){
                this.style.backgroundColor=color;
            })
        })
    })

randomColorButton.addEventListener("click", function(){
    const allDivs=document.querySelectorAll(".pic");
    allDivs.forEach(div => {
        div.addEventListener("mouseover",function(){
            this.style.backgroundColor=randomColor();
        })
    })
})