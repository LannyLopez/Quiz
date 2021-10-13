var starterForm = document.getElementById("foam")
var starterBtn = starterForm.querySelector("#btn")
var qsTwo = document.getElementById("foam2")

starterBtn.addEventListener("click", function(){
    starterForm.style.display = "none"
    qsTwo.style.display = "inherit"
})