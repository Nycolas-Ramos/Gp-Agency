const elementsAnimation = document.querySelectorAll('[data-anima]')
const classAnimation = 'animate'

function scrollAnimation(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) /4) + 85

    elementsAnimation.forEach(function(element){
        if(windowTop > element.offsetTop)
        element.classList.add(classAnimation)
        else
        element.classList.remove(classAnimation)
    })
}

window.addEventListener('scroll', ()=>{
    scrollAnimation()
})