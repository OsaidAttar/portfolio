let navbar =document.getElementById('navbar')
window.addEventListener("scroll",function(){
    if(window.scrollY > 50){
       navbar.classList.add('new-bg-color')
       navbar.style.transition='1s'
    }
    else{
        navbar.classList.remove('new-bg-color')
        navbar.style.transition='1s'

    }
    
})
// smooth scroll
let links =document.querySelectorAll('nav a')
links.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault()
     let currentId= e.target.attributes.href.value;
     let sectionPos=window.document.querySelector(currentId).offsetTop
     window.scroll({
        top:sectionPos,
        behavior:'smooth'
     })
     console.log(sectionPos);
    })
}
)
document.querySelector('.top').style.opacity='0'
window.addEventListener('scroll',function(){
    let aboutPos=this.window.document.getElementById('about').offsetTop
    if(window.scrollY > aboutPos){
    document.querySelector('.top').style.opacity='1'
    document.querySelector('.top').style.transition='.7s'
    }
    else{
        document.querySelector('.top').style.opacity='0'
        document.querySelector('.top').style.transition='.7s' 
    }
})
let topbtn=document.querySelector('.top button')
topbtn.addEventListener('click',function(e){
    e.preventDefault()
    window.scroll({
        top:0,
        behavior:'smooth'
    })
})
let body =document.body
body.style.overflow="hidden"
document.querySelector('.loading').style.opacity='1'
document.querySelector('.loading').style.visibility='visible'
document.querySelector('.loading').style.transition='.7s'


window.addEventListener('load',function(){
    this.setTimeout(function(){
        document.querySelector('.loading').style.opacity='0'
        document.querySelector('.loading').style.visibility='hidden'
        document.querySelector('.loading').style.transition='.7s'
        body.style.overflow='auto'

    },1000)
})