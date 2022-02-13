const show= document.querySelector(".show-modal");
const modal= document.querySelector(".modal-container");
const close = document.querySelector(".close-modal");

show.addEventListener('click',()=>{
    modal.style.display="flex";
})

close.addEventListener('click',()=>{
    modal.style.display="none";
})