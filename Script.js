//Number 1
document.getElementById("container")

//Number 2
document.querySelector("#container")

//Number 3
document.getElementsByClassName("second")

//Number 4
const third = document.querySelector("ol .third")
console.log(third)

//Number 5
var container = document.getElementById("container").textContent
container = document.createTextNode("Hello!")

//Number 6
const footer = document.querySelector(".footer")
footer.classList.add("main")

//Number 7
document.querySelector(".main").classList.remove("main")

//Number 8
const newLi = document.createElement("li")

//Number 9
newLi.innerText = "four"
console.log(newLi)

//Number 10
document.querySelector("ul").appendChild(newLi)

//Number 12
var listLi = document.querySelectorAll("ol li")
for(var x = 0; x <listLi.length; x++) {
    listLi[x].style.backgroundColor = "green"
}

//Number13
document.querySelector(".footer").remove("footer")