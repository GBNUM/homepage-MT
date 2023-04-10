let menu = document.querySelector('.menu')
let header = document.querySelector('header')
let toggle = false
menu.addEventListener('click', ()=>{
    if(toggle == false){
        header.style.cssText = "left: 0"
        toggle = true
    }
    else {
        header.style.cssText = "left: -100%"
        toggle = false
    }
})