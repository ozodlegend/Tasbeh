var elButton = document.querySelector(".button")

elButton.addEventListener("click", function(){
    var a = document.querySelector(".input")
    a.value = parseInt(a.value) +1

    if(a.value >= 34){
        a.value = 0
    }
})
