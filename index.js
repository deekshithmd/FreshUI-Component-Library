const dark=document.querySelector(".dark");

if(localStorage.getItem("dark")==="dark-theme"){
    document.body.classList.add("dark-theme")
    dark.classList.remove("fa-sun")
    dark.classList.add("fa-moon")
}
else{
    document.body.classList.add("light-theme")
}

dark.addEventListener('click',()=>{
    if(dark.classList.contains("fa-sun")){
        localStorage.clear();
        localStorage.setItem("dark","dark-theme")
        dark.classList.remove("fa-sun")
        dark.classList.add("fa-moon")
        document.body.classList.remove("light-theme")
        document.body.classList.add("dark-theme")
    }
    else{
        localStorage.clear();
        localStorage.setItem("dark","light-theme")
        dark.classList.remove("fa-moon")
        dark.classList.add("fa-sun")
        document.body.classList.remove("dark-theme")
        document.body.classList.add("light-theme")
    }
})