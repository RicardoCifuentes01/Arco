const artistsSlider = document.getElementById('artistsSlider')
const buttonPreviousArtist = document.getElementById('previousArtist')
const buttonNextArtist = document.getElementById('nextArtist')

const scrollingArtists = window.innerWidth - 40

const previousArtist = () => {

    artistsSlider.scrollTo({
        left: artistsSlider.scrollLeft - scrollingArtists,
        behavior: "smooth"
    })

}

const nextArtist = () => {

    artistsSlider.scrollTo({
        left: artistsSlider.scrollLeft + scrollingArtists,
        behavior: "smooth"
    })

}

buttonPreviousArtist.addEventListener('click', previousArtist)
buttonNextArtist.addEventListener('click', nextArtist)