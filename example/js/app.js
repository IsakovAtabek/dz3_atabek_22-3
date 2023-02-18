const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')
const tabImgs = document.querySelectorAll('.tabcontent img')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
    tabImgs.forEach((item) => {
        item.style.opacity = 0.5
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
    setTimeout(() => {
        tabImgs[i].style.opacity = 1
    }, 0)
}

hideTabContent()
showTabContent()

let currSlide = 0
setInterval(() => {
    if(currSlide < tabContent.length - 1){
        currSlide++
        hideTabContent()
        showTabContent(currSlide)
    } else {
        currSlide = 0
        hideTabContent()
        showTabContent(currSlide)
    } 
}, 5000)


tabsParent.addEventListener('click', (e) => {
    if(e.target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) => {
            if(e.target === item){
                currSlide = i
                hideTabContent()
                showTabContent(i)
            }   
        })
    }    
})

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')
let isModalOpened = false

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

window.onscroll = () => {
    if(document.documentElement.scrollTop >= 3270 && isModalOpened === false){
        isModalOpened = true
        openModal()
    }
}

document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains('show')){
        closeModal()
    }
})