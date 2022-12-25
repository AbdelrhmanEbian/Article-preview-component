let link=document.querySelector(".me .share .links")
function share() {
    if (link.classList.contains("active") === false) {
        
        // link.style.display="flex"
        link.classList.toggle('active')
    }else{
        // link.style.display="none"
        link.classList.toggle('active')



    }

}
