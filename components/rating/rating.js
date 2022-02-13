const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")

one.addEventListener('click',()=>{
    one.classList.add("fas")
    two.classList.remove("fas")
    three.classList.remove("fas")
    four.classList.remove("fas")
    five.classList.remove("fas")
})

two.addEventListener('click',()=>{
    one.classList.add("fas")
    two.classList.add("fas")
    three.classList.remove("fas")
    four.classList.remove("fas")
    five.classList.remove("fas")
})

three.addEventListener('click',()=>{
    one.classList.add("fas")
    two.classList.add("fas")
    three.classList.add("fas")
    four.classList.remove("fas")
    five.classList.remove("fas")
})

four.addEventListener('click',()=>{
    one.classList.add("fas")
    two.classList.add("fas")
    three.classList.add("fas")
    four.classList.add("fas")
    five.classList.remove("fas")
})

five.addEventListener('click',()=>{
    one.classList.add("fas")
    two.classList.add("fas")
    three.classList.add("fas")
    four.classList.add("fas")
    five.classList.add("fas")
})