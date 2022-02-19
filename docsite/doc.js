const ham=document.querySelector(".hamburger");
const list=document.querySelector(".sidebar")

ham.addEventListener('click',()=>{
    if(list.style.display === "none"){
        list.style.display="flex"
    }   
    else{
        list.style.display="none"
    }
})
