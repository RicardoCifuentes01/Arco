const buttonMethodDescription = document.getElementsByClassName('learning__method__button--more')
const buttonMethodBack = document.getElementsByClassName('learning__method__button--back')


const description = (method, color) => {
    method.style.transform = 'rotateY(360deg)'
    method.style.backgroundColor = color
    method.children[0].style.display = 'none'
    method.children[1].children[0].style.color = '#F6F6F6'
    method.children[1].children[1].style.color = '#F6F6F6'
    method.children[1].children[2].style.display = 'none'
    method.children[1].children[3].style.display = 'block'
    method.children[1].children[4].style.display = 'block'
    method.children[1].children[4].style.backgroundColor = 'white'
    method.children[1].children[4].style.height = '24px'
    method.children[1].children[4].style.alignSelf = 'flex-end'
}

const back = (method) => {
    method.style.transform = 'rotateY(0deg)'
    method.style.backgroundColor = '#F6F6F6'
    method.children[0].style.display = 'flex'
    method.children[1].children[0].style.color = '#1F1F1F'
    method.children[1].children[1].style.color = '#1F1F1F'
    method.children[1].children[2].style.display = 'flex'
    method.children[1].children[3].style.display = 'none'
    method.children[1].children[4].style.display = 'none'
    method.children[1].children[2].style.height = '20px'
}

const colorFigure = (figure) => {
    figure.style.filter = 'grayscale(0%)'
}

const gray = (figure) => {
    figure.style.filter = 'grayscale(100%)'
}

for (let index = 0; index < buttonMethodDescription.length; index++) {
    const buttonMore = buttonMethodDescription[index]
    const background = window.getComputedStyle(buttonMore)
    const method = buttonMethodDescription[index].parentNode.parentNode
    buttonMore.addEventListener('click', () => {
        description(method, background.backgroundColor)
    })
    buttonMore.addEventListener('mouseenter', () => { colorFigure(method.children[0]) })
    buttonMore.addEventListener('mouseleave', () => { gray(method.children[0]) })
}

for (let index = 0; index < buttonMethodBack.length; index++) {
    const buttonBack = buttonMethodBack[index]
    const method = buttonMethodDescription[index].parentNode.parentNode
    buttonBack.addEventListener('click', () => { back(method) })

}