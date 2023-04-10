let nNic = document.querySelector('.nNic')
let bgcont = document.querySelector('.bgCont')
let header = document.querySelector('header')
let namecont = document.querySelector('.namecont')

nNic.addEventListener('mouseover', ()=>{
    bgcont.style.cssText = ' background: linear-gradient( rgb(226, 33, 33, .2), rgba(0,0,0)), url(m1.jpg) no-repeat center/cover; background-position: top;'
    namecont.style.backgroundColor = 'rgb(226, 33, 33, .2)'
})

let nJai = document.querySelector('.nJai')
nJai.addEventListener('mouseover', ()=>{
    bgcont.style.cssText = ' background: linear-gradient( rgb(255, 250, 250, .2), rgba(0,0,0)), url(m2.png) no-repeat center/cover; background-position: top;'
    namecont.style.backgroundColor = ' rgb(255, 250, 250, .2)'
})

let nJes = document.querySelector('.nJes')
nJes.addEventListener('mouseover', ()=>{
    bgcont.style.cssText = ' background: linear-gradient( rgb(216, 118, 37, .3), rgba(0,0,0)), url(m3.jpg) no-repeat center/cover; background-position: top;'
    namecont.style.backgroundColor = '  rgb(216, 118, 37, .3)'
    
})

let nMark = document.querySelector('.nMark')
nMark.addEventListener('mouseover', ()=>{
    bgcont.style.cssText = ' background: linear-gradient( rgba(70, 33, 2, .4), rgba(0,0,0)), url(m4.jpg) no-repeat center/cover; background-position: top;'
    namecont.style.backgroundColor = 'rgba(70, 33, 2, .4)'
    

})

let nEmm = document.querySelector('.nEmm')
nEmm.addEventListener('mouseover', ()=>{
    bgcont.style.cssText = ' background: linear-gradient( rgba(49, 48, 48, 0.2), rgba(0,0,0)), url(m5.jpg) no-repeat center/cover; background-position: top;'
    namecont.style.backgroundColor = 'rgba(49, 48, 48, 0.7)'

})

let nEli = document.querySelector('.nEli')
nEli.addEventListener('mouseover', ()=>{
    bgcont.style.cssText = ' background: linear-gradient( rgb(255, 224, 177, .2), rgba(0,0,0)), url(m6.jpg) no-repeat center/cover; background-position: top;'
    namecont.style.backgroundColor = 'rgb(255, 224, 177, .2)'

})