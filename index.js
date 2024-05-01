document.getElementById("icon-menu").addEventListener("click",()=>{
    document.getElementById("mobile-links").style.display="flex";
    document.getElementById("mobile-links").style.opacity= 1;
});

document.getElementById("close-menu").addEventListener("click",()=>{
    document.getElementById("mobile-links").style.display="none";
    document.getElementById("mobile-links").style.opacity= 0;
})