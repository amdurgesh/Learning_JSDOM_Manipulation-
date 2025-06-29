var istatus = document.querySelector("h5")

var btn = document.querySelector("#add")

var click = 0

btn.addEventListener("click",function(){
    if (click == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        click = 1
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"

        click = 0
    }
    
})
