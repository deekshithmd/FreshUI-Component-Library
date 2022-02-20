const dark=document.querySelector(".dark");

dark.addEventListener('click',()=>{
    if(dark.classList.contains("fa-sun")){
        dark.classList.remove("fa-sun")
        dark.classList.add("fa-moon")
        document.body.classList.remove("light-theme")
        document.body.classList.add("dark-theme")
    }
    else{
        dark.classList.remove("fa-moon")
        dark.classList.add("fa-sun")
        document.body.classList.remove("dark-theme")
        document.body.classList.add("light-theme")
    }
})