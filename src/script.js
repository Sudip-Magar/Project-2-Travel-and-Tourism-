let navbar=document.querySelector('.navbar')
let cross=document.querySelector('.cross')
let cross1=document.querySelector('.cross1')

cross.addEventListener('click',()=>{
    navbar.style.margin='0px'
    navbar.style.transition='0.2s'
    cross.style.display='none'
    cross1.style.display='block'
})
cross1.addEventListener('click',()=>{
    navbar.style.marginTop='-500px'
    navbar.style.transition='0.2s'
    cross.style.display='block'
    cross1.style.display='none'
})