const bar = document.querySelector("#bar")
const menu = document.querySelector("#menu")
const header = document.querySelector("#top")

bar.addEventListener('click', ()=>{

    if(menu.classList.contains('show')){
        menu.classList.remove('show')
        menu.classList.add('hidde')

        header.classList.remove('show')
        header.classList.add('hidde')
    }else{

        menu.classList.add('show')
        menu.classList.remove('hidde')

        header.classList.add('show')
        header.classList.remove('hidde')

    }

}) 





function verificacao() {
    if (menu.classList.contains('show'))
    {
        menu.classList.remove('show')
        menu.classList.add('hide')

        el.classList.add('fa-bars')
        el.classList.remove('fa-times')
    }else{

        menu.classList.remove('hide')
        menu.classList.add('show')

        el.classList.add('fa-times')
        el.classList.remove('fa-bars')
    }
}