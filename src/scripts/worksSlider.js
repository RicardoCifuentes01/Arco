const worksSlider = document.getElementById('worksSlider')
const buttonPreviousWork = document.getElementById('previousWork')
const buttonNextWork = document.getElementById('nextWork')

const scrollingWorks = 320

const previousWork = () => {

    worksSlider.scrollTo({
        left: worksSlider.scrollLeft - scrollingWorks,
        behavior: "smooth"
    })

}

const nextWork = () => {

    worksSlider.scrollTo({
        left: worksSlider.scrollLeft + scrollingWorks,
        behavior: "smooth"
    })

}

buttonPreviousWork.addEventListener('click', previousWork)
buttonNextWork.addEventListener('click', nextWork)