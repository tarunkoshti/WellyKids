var minus = document.querySelector(".ri-subtract-line")
var plus = document.querySelector(".ri-add-line")
var pack = document.querySelector("#pack span")

var box = 1
var smoothie = 20

minus.addEventListener("click",function(){
    if(box>1 && smoothie>20)
    {
        box = box-1
        smoothie = smoothie-20
        pack.innerHTML = `${box} Box ${smoothie} Smoothie`
    }
})

plus.addEventListener("click",function(){
    box = box+1
    smoothie = smoothie+20
    pack.innerHTML = `${box} Box ${smoothie} Smoothie`
    console.log("helo")
})
