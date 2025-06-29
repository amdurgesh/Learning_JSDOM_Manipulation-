var point = document.querySelector("#main")
var pointer = document.querySelector(".cursor")


point.addEventListener("mousemove", function(dets){
    pointer.style.left = dets.x+"px"
    pointer.style.top = dets.y+"px"

})
