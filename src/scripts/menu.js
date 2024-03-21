const body = document.getElementById('body')
const header = document.getElementById('header')
const logo = document.getElementById('logo')
const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const menu = document.getElementById('menu')

const showMenu = () => {
    body.style.overflow = 'hidden'
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
    header.children[1].style.display = 'flex'
    header.children[1].style.transform = 'translate(0, 0)'
    header.style.height = '100vh'

}

const hideMenu = () => {
    body.style.overflow = 'auto'
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
    header.children[1].style.transform = 'translate(-100vw, 0px)'
    header.style.height = '48px'
}

openMenu.addEventListener('click', showMenu)
closeMenu.addEventListener('click', hideMenu)

const checkWindowSize = () => {
    if (window.innerWidth >= 600) {
        showMenu()
        body.style.overflow = 'auto'
        closeMenu.style.display = 'none'
        header.children[1].style.display = 'block'
        header.style.height = 'auto'
    } else {
        hideMenu()

    }
}

checkWindowSize();
window.addEventListener('resize', checkWindowSize)

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        if (window.innerWidth <= 600) {
            hideMenu()
        }

        const section = document.querySelector(this.getAttribute('href'));
        const sectionPosition = window.pageYOffset + section.getBoundingClientRect().top;
        const offsetPosition = sectionPosition - 40;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});
